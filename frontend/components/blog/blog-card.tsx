import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types';
import { Calendar, Eye, Heart, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur">
              {post.category}
            </Badge>
          </div>
        </div>
      </Link>
      
      <CardContent className="p-6">
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0">
        <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <Link href={`/author/${post.author.id}`} className="flex items-center space-x-2 hover:text-primary transition-colors">
              <User className="h-4 w-4" />
              <span>{post.author.name}</span>
            </Link>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.createdAt)}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{post.views}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart className="h-4 w-4" />
              <span>{post.likes}</span>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}