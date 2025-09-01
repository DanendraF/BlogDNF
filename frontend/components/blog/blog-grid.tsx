import React from 'react';
import { BlogPost } from '@/types';
import BlogCard from './blog-card';

interface BlogGridProps {
  posts: BlogPost[];
  className?: string;
}

export default function BlogGrid({ posts, className = '' }: BlogGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}