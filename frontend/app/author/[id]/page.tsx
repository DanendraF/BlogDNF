import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { users, getPostsByAuthor } from '@/lib/data';
import { Calendar, Globe, Twitter, Linkedin, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BlogGrid from '@/components/blog/blog-grid';

interface AuthorPageProps {
  params: {
    id: string;
  };
}

export default function AuthorPage({ params }: AuthorPageProps) {
  const author = users.find(user => user.id === params.id);
  
  if (!author) {
    notFound();
  }

  const authorPosts = getPostsByAuthor(author.id);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Author Profile Header */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="relative">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="h-32 w-32 rounded-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{author.name}</h1>
                <p className="text-lg text-muted-foreground mb-4 capitalize">
                  {author.role}
                </p>
                <p className="text-muted-foreground mb-6">
                  {author.bio}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Joined {formatDate(author.createdAt)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FileText className="h-4 w-4" />
                    <span>{authorPosts.length} articles</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {author.website && (
                    <a
                      href={author.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-primary hover:underline"
                    >
                      <Globe className="h-4 w-4" />
                      <span>Website</span>
                    </a>
                  )}
                  {author.twitter && (
                    <a
                      href={`https://twitter.com/${author.twitter.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-primary hover:underline"
                    >
                      <Twitter className="h-4 w-4" />
                      <span>Twitter</span>
                    </a>
                  )}
                  {author.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${author.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-primary hover:underline"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Author's Posts */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">
              Articles by {author.name}
            </h2>
            <span className="text-muted-foreground">
              {authorPosts.length} {authorPosts.length === 1 ? 'article' : 'articles'}
            </span>
          </div>
          
          {authorPosts.length > 0 ? (
            <BlogGrid posts={authorPosts} />
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  {author.name} hasn't published any articles yet.
                </p>
              </CardContent>
            </Card>
          )}
        </section>
      </div>
    </div>
  );
}