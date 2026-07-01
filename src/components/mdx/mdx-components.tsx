import React from 'react';
import { cn } from '@/lib/utils';
import { MDXComponents } from 'mdx/types';

// Shared classes to keep the terminal aesthetic
const h1Classes = "mt-2 scroll-m-20 text-2xl font-bold tracking-tight font-mono text-primary";
const h2Classes = "mt-8 scroll-m-20 border-b border-border pb-2 text-xl font-semibold tracking-tight font-mono text-primary first:mt-0";
const h3Classes = "mt-8 scroll-m-20 text-lg font-semibold tracking-tight font-mono text-primary";
const pClasses = "leading-relaxed [&:not(:first-child)]:mt-6 text-emerald-50/70";
const blockquoteClasses = "mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground font-mono bg-muted/20 py-2";
const codeClasses = "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm text-primary font-semibold";
const preClasses = "mb-4 mt-6 overflow-x-auto rounded-lg border border-emerald-500/30 bg-emerald-950/20 py-4 px-4 shadow-sm";

export const mdxComponents: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1 className={cn(h1Classes, className)} {...props} />
  ),
  h2: ({ className, ...props }) => (
    <h2 className={cn(h2Classes, className)} {...props} />
  ),
  h3: ({ className, ...props }) => (
    <h3 className={cn(h3Classes, className)} {...props} />
  ),
  p: ({ className, ...props }) => (
    <p className={cn(pClasses, className)} {...props} />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2 text-muted-foreground", className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn("my-6 ml-6 list-decimal [&>li]:mt-2 text-muted-foreground", className)} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("leading-7", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote className={cn(blockquoteClasses, className)} {...props} />
  ),
  // For inline code
  code: ({ className, ...props }) => (
    <code className={cn(codeClasses, className)} {...props} />
  ),
  // For code blocks
  pre: ({ className, ...props }) => (
    <pre className={cn(preClasses, className)} {...props} />
  ),
  a: ({ className, ...props }) => (
    <a className={cn("font-medium text-primary underline underline-offset-4 hover:text-primary/80", className)} {...props} />
  ),
};
