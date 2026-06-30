import { NextResponse } from 'next/server';

export async function GET() {
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

  try {
    const token = process.env.GITHUB_ACCESS_TOKEN;
    
    // Fallback if no token is provided during development/initial deployment
    if (!token) {
      return NextResponse.json({
        totalCommits: 0,
        weeks: [],
        error: 'Missing GITHUB_ACCESS_TOKEN'
      });
    }

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { username: 'freakyjones' },
      }),
      // Cache the response for an hour so you don't hit rate limits
      next: { revalidate: 3600 }, 
    });

    const data = await response.json();
    
    if (data.errors) {
      throw new Error(data.errors[0].message);
    }
    
    if (!data.data || !data.data.user) {
      throw new Error(data.message || 'Invalid GitHub response');
    }

    const calendar = data.data.user.contributionsCollection.contributionCalendar;
    
    return NextResponse.json({
      totalCommits: calendar.totalContributions,
      weeks: calendar.weeks
    });
  } catch (error: any) {
    console.error('GitHub API Error:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch telemetry',
      totalCommits: 0,
      weeks: []
    }, { status: 500 });
  }
}
