import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content/logs');

export type LogFrontmatter = {
  title: string;
  date: string;
  readTime: string;
};

export type LogData = {
  slug: string;
  frontmatter: LogFrontmatter;
};

export function getLogs(): LogData[] {
  // Return empty array if directory doesn't exist yet
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir);
  const logs = files
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace('.mdx', '');
      const markdownWithMeta = fs.readFileSync(
        path.join(contentDir, filename),
        'utf-8'
      );
      const { data } = matter(markdownWithMeta);

      return {
        slug,
        frontmatter: data as LogFrontmatter,
      };
    });

  // Sort logs by date descending
  return logs.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export function getLogBySlug(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(markdownWithMeta);

  return {
    frontmatter: data as LogFrontmatter,
    content,
  };
}
