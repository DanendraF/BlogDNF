import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getRelatedPosts } from '@/lib/data';
import { Calendar, Eye, Heart, User, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BlogGrid from '@/components/blog/blog-grid';
import { blogPosts } from '@/lib/data';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.id, post.category);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <div className="space-y-4">
              <Badge variant="secondary">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground">{post.excerpt}</p>
            </div>

            <div className="flex items-center justify-between mt-8 pt-8 border-t">
              <Link href={`/author/${post.author.id}`} className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(post.createdAt)}
                  </p>
                </div>
              </Link>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>{post.views} views</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="h-4 w-4" />
                  <span>{post.likes} likes</span>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </article>

        {/* Author Bio */}
        <Card className="mt-12">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{post.author.name}</h3>
                <p className="text-muted-foreground mb-4">{post.author.bio}</p>
                <Link href={`/author/${post.author.id}`}>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <BlogGrid posts={relatedPosts} />
          </section>
        )}
      </div>
    </div>
  );
}