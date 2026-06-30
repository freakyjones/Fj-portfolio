"use server";

export interface GitHubCommit {
  repo: string;
  message: string;
  timestamp: string;
  hash: string;
}

function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMins < 60) return `T-${diffMins}m`;
  if (diffHours < 24) return `T-${diffHours}h`;
  return `T-${diffDays}d`;
}

export async function getOperatorHistory(): Promise<GitHubCommit[]> {
  const username = "freakyjones";
  
  try {
    const headers = {
      ...(process.env.GITHUB_ACCESS_TOKEN && { Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}` }),
      Accept: "application/vnd.github.v3+json",
    };

    // 1. Fetch the user's most recently pushed repositories
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=3`, {
      headers,
      next: { revalidate: 3600 } 
    });

    if (!reposRes.ok) {
        console.error("Failed to fetch GitHub repos:", reposRes.statusText);
        return [];
    }

    const repos = await reposRes.json();
    if (!Array.isArray(repos)) return [];

    // 2. Fetch the latest commits for those active repos in parallel
    const allCommits: GitHubCommit[] = [];
    
    await Promise.all(repos.map(async (repo: any) => {
      try {
        const commitsRes = await fetch(`https://api.github.com/repos/${username}/${repo.name}/commits?per_page=3`, {
          headers,
          next: { revalidate: 3600 }
        });
        if (!commitsRes.ok) return;
        
        const commits = await commitsRes.json();
        if (Array.isArray(commits)) {
          commits.forEach((c: any) => {
            allCommits.push({
              repo: repo.name,
              message: c.commit.message,
              timestamp: c.commit.committer.date, // raw date for sorting
              hash: c.sha,
            });
          });
        }
      } catch (err) {
        // Silently fail for individual repos to not break the whole feed
      }
    }));

    // 3. Sort globally by date (newest first), format timestamps, and return top 5
    return allCommits
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 5)
      .map(c => ({
        ...c,
        timestamp: formatRelativeTime(new Date(c.timestamp))
      }));

  } catch (err) {
    console.error("Telemetry link failed:", err);
    return [];
  }
}
