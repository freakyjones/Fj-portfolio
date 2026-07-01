import React from 'react';
import { getLogBySlug, getLogs } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/mdx/mdx-components';
import { LogModal } from '@/components/mdx/LogModal';

interface LogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const logs = getLogs();
  return logs.map((log) => ({
    slug: log.slug,
  }));
}

export default async function LogModalPage({ params }: LogPageProps) {
  const { slug } = await params;
  const log = getLogBySlug(slug);

  if (!log) {
    notFound();
  }

  return (
    <LogModal>
      <div className="mb-8 font-mono">
        <h1 className="text-3xl font-bold tracking-tight text-primary mt-4 mb-2">
          {log.frontmatter.title}
        </h1>
        <div className="flex gap-4 text-sm text-muted-foreground border-b border-border pb-6">
          <span>[ PUBLISHED: {log.frontmatter.date.replace(/-/g, '.')} ]</span>
          <span>[ READ_TIME: {log.frontmatter.readTime} ]</span>
        </div>
      </div>
      
      <article className="prose prose-invert prose-p:text-muted-foreground max-w-none">
        <MDXRemote source={log.content} components={mdxComponents} />
      </article>
      
      <div className="mt-16 border-t border-border pt-8 text-center font-mono text-sm text-muted-foreground">
        *END OF TRANSMISSION*
      </div>
    </LogModal>
  );
}
