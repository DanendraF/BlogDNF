import React from 'react';
import { blogPosts } from '@/lib/data';
import BlogGrid from '@/components/blog/blog-grid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, TrendingUp, Users, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const featuredPosts = blogPosts.slice(0, 6);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 mb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Modern Blog Platform
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover insights, tutorials, and stories from our community of writers and developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
            <Button>Search</Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="flex justify-center">
              <BookOpen className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">24</h3>
            <p className="text-muted-foreground">Published Articles</p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-center">
              <Users className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">8</h3>
            <p className="text-muted-foreground">Expert Authors</p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-center">
              <TrendingUp className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">15K+</h3>
            <p className="text-muted-foreground">Monthly Readers</p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <Link href="/blog">
            <Button variant="outline">View All Posts</Button>
          </Link>
        </div>
        <BlogGrid posts={featuredPosts} />
      </section>
    </div>
  );
}