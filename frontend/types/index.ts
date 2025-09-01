export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'author' | 'reader';
  avatar?: string;
  bio?: string;
  website?: string;
  twitter?: string;
  linkedin?: string;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  published: boolean;
  authorId: string;
  author: User;
  tags: string[];
  category: string;
  views: number;
  likes: number;
  createdAt: string;
  updatedAt: string;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
  };
}

export interface DashboardStats {
  totalPosts: number;
  totalViews: number;
  totalAuthors: number;
  totalLikes: number;
  monthlyViews: { month: string; views: number }[];
  topPosts: { title: string; views: number }[];
  categoryDistribution: { category: string; count: number }[];
}