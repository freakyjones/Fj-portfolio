import { NextResponse } from 'next/server';

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface Week {
  contributionDays: ContributionDay[];
}

export async function GET() {
  const username = 'freakyjones';
  const token = process.env.GITHUB_ACCESS_TOKEN;

  // 1. Try official GitHub GraphQL API if token is present
  if (token) {
    try {
      const query = `
        query($username: String!) {
          user(login: $username) {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
          }
        }
      `;

      const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'User-Agent': 'portfolio-telemetry-agent',
        },
        body: JSON.stringify({
          query,
          variables: { username },
        }),
        next: { revalidate: 3600 },
      });

      if (response.ok) {
        const data = await response.json();
        const calendar = data?.data?.user?.contributionsCollection?.contributionCalendar;
        if (calendar) {
          return NextResponse.json({
            totalCommits: calendar.totalContributions,
            weeks: calendar.weeks,
          });
        }
      }
    } catch (err) {
      console.warn('Official GitHub GraphQL fetch failed, attempting public fallback...', err);
    }
  }

  // 2. Fallback to public contributions service if token is absent or request fails
  try {
    const fallbackRes = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      {
        headers: { 'User-Agent': 'portfolio-telemetry-agent' },
        next: { revalidate: 3600 },
      }
    );

    if (fallbackRes.ok) {
      const data = await fallbackRes.json();
      const contributions: Array<{ date: string; count: number }> = data.contributions || [];

      // Group contributions into 7-day calendar weeks
      const weeks: Week[] = [];
      for (let i = 0; i < contributions.length; i += 7) {
        weeks.push({
          contributionDays: contributions.slice(i, i + 7).map((d) => ({
            contributionCount: d.count,
            date: d.date,
          })),
        });
      }

      const totalCommits =
        data.total?.lastYear ??
        contributions.reduce((acc, curr) => acc + (curr.count || 0), 0);

      return NextResponse.json({
        totalCommits,
        weeks,
      });
    }
  } catch (fallbackErr) {
    console.error('Public fallback contributions fetch failed:', fallbackErr);
  }

  return NextResponse.json(
    {
      error: 'Failed to fetch telemetry',
      totalCommits: 0,
      weeks: [],
    },
    { status: 500 }
  );
}
