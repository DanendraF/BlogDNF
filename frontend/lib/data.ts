import { User, BlogPost, DashboardStats } from '@/types';


export const users: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    bio: 'Tech writer and CMS administrator with 10 years of experience in content strategy.',
    website: 'https://sarahjohnson.com',
    twitter: '@sarahjtech',
    createdAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '2',
    name: 'Mike Chen',
    email: 'mike@example.com',
    role: 'author',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg',
    bio: 'Full-stack developer passionate about web technologies and developer tools.',
    website: 'https://mikechen.dev',
    twitter: '@mikechendev',
    createdAt: '2024-02-01T00:00:00Z',
  },
  {
    id: '3',
    name: 'Emma Wilson',
    email: 'emma@example.com',
    role: 'author',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    bio: 'UX designer and frontend developer focused on accessible and beautiful user interfaces.',
    website: 'https://emmawilson.design',
    linkedin: 'emmawilsonux',
    createdAt: '2024-02-10T00:00:00Z',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Modern Web Applications with Next.js 14',
    slug: 'building-modern-web-apps-nextjs-14',
    excerpt: 'Explore the latest features of Next.js 14 and learn how to build performant, scalable web applications with the new App Router.',
    content: `# Building Modern Web Applications with Next.js 14

Next.js 14 introduces groundbreaking features that revolutionize how we build web applications. The new App Router provides unprecedented flexibility and performance optimizations.

## Key Features

### 1. Server Components by Default
Server Components are now the default, enabling better performance and SEO out of the box.

### 2. Improved Routing
The app directory structure provides intuitive file-based routing with enhanced capabilities.

### 3. Streaming and Suspense
Built-in streaming support allows for better user experiences with progressive loading.

## Getting Started

\`\`\`bash
npx create-next-app@latest my-app --typescript --tailwind --eslint
\`\`\`

The future of web development is here with Next.js 14's innovative approach to full-stack React applications.`,
    featuredImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
    published: true,
    authorId: '2',
    author: users[1],
    tags: ['Next.js', 'React', 'Web Development'],
    category: 'Technology',
    views: 1245,
    likes: 89,
    createdAt: '2024-11-15T10:00:00Z',
    updatedAt: '2024-11-15T10:00:00Z',
    seo: {
      metaTitle: 'Building Modern Web Applications with Next.js 14 | Blog CMS',
      metaDescription: 'Learn how to build performant web applications with Next.js 14\'s new App Router and server components.',
      ogImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
    },
  },
  {
    id: '2',
    title: 'The Art of Minimalist UI Design',
    slug: 'art-of-minimalist-ui-design',
    excerpt: 'Discover the principles of minimalist design and how to create clean, user-friendly interfaces that focus on content and usability.',
    content: `# The Art of Minimalist UI Design

Minimalist design isn't about removing features—it's about removing distractions. Great minimalist UI focuses the user's attention on what truly matters.

## Core Principles

### 1. White Space is Your Friend
Generous white space creates breathing room and improves readability.

### 2. Typography Hierarchy
Clear typography hierarchy guides users through your content effortlessly.

### 3. Color with Purpose
Use color intentionally to highlight important elements and create visual harmony.

## Best Practices

- Start with content, then add design elements
- Remove unnecessary visual clutter
- Focus on user goals and workflows
- Test with real users regularly

Minimalist design creates powerful user experiences through intentional simplicity.`,
    featuredImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    published: true,
    authorId: '3',
    author: users[2],
    tags: ['UI/UX', 'Design', 'Minimalism'],
    category: 'Design',
    views: 892,
    likes: 156,
    createdAt: '2024-11-10T14:30:00Z',
    updatedAt: '2024-11-10T14:30:00Z',
    seo: {
      metaTitle: 'The Art of Minimalist UI Design | Blog CMS',
      metaDescription: 'Learn the principles of minimalist design and create clean, user-friendly interfaces.',
      ogImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    },
  },
  {
    id: '3',
    title: 'TypeScript Best Practices for Large Scale Applications',
    slug: 'typescript-best-practices-large-scale',
    excerpt: 'Learn advanced TypeScript patterns and best practices for building maintainable, type-safe applications at enterprise scale.',
    content: `# TypeScript Best Practices for Large Scale Applications

As applications grow, TypeScript becomes essential for maintaining code quality and developer productivity. Here are proven strategies for large-scale TypeScript projects.

## Type Safety Strategies

### 1. Strict Configuration
Enable strict mode and all strict flags in your tsconfig.json.

### 2. Custom Type Guards
Create type guards for runtime type checking:

\`\`\`typescript
function isUser(obj: any): obj is User {
  return obj && typeof obj.id === 'string' && typeof obj.name === 'string';
}
\`\`\`

### 3. Utility Types
Leverage built-in utility types like \`Partial\`, \`Pick\`, and \`Omit\`.

## Project Organization

- Use barrel exports for clean imports
- Implement consistent naming conventions
- Group related types in dedicated files
- Create shared type libraries

TypeScript's power shines in large applications where type safety prevents bugs and improves developer confidence.`,
    featuredImage: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg',
    published: true,
    authorId: '2',
    author: users[1],
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
    category: 'Technology',
    views: 2103,
    likes: 234,
    createdAt: '2024-11-05T09:15:00Z',
    updatedAt: '2024-11-05T09:15:00Z',
    seo: {
      metaTitle: 'TypeScript Best Practices for Large Scale Applications | Blog CMS',
      metaDescription: 'Advanced TypeScript patterns and best practices for enterprise-scale applications.',
      ogImage: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg',
    },
  },
  {
    id: '4',
    title: 'Content Strategy for Modern Blogs',
    slug: 'content-strategy-modern-blogs',
    excerpt: 'A comprehensive guide to developing effective content strategies that engage readers and drive growth for modern blog platforms.',
    content: `# Content Strategy for Modern Blogs

Successful blogs require more than great writing—they need strategic planning, consistent execution, and deep understanding of audience needs.

## Strategy Fundamentals

### 1. Audience Research
Understanding your readers is the foundation of all content decisions.

### 2. Content Pillars
Establish 3-5 core topics that align with your expertise and audience interests.

### 3. Editorial Calendar
Plan content publication schedules and maintain consistency.

## Content Types

- **Educational posts**: How-to guides and tutorials
- **Opinion pieces**: Industry insights and perspectives
- **Case studies**: Real-world examples and results
- **Interviews**: Expert conversations and insights

## Measurement and Optimization

Track key metrics like engagement, time on page, and conversion rates to refine your strategy continuously.

Great content strategy combines audience insight with consistent execution and data-driven optimization.`,
    featuredImage: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
    published: true,
    authorId: '1',
    author: users[0],
    tags: ['Content Strategy', 'Blogging', 'Marketing'],
    category: 'Marketing',
    views: 756,
    likes: 98,
    createdAt: '2024-11-01T16:45:00Z',
    updatedAt: '2024-11-01T16:45:00Z',
    seo: {
      metaTitle: 'Content Strategy for Modern Blogs | Blog CMS',
      metaDescription: 'Comprehensive guide to developing effective content strategies for modern blog platforms.',
      ogImage: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
    },
  },
];

export const dashboardStats: DashboardStats = {
  totalPosts: 24,
  totalViews: 15234,
  totalAuthors: 8,
  totalLikes: 1879,
  monthlyViews: [
    { month: 'Jan', views: 1200 },
    { month: 'Feb', views: 1800 },
    { month: 'Mar', views: 2400 },
    { month: 'Apr', views: 2100 },
    { month: 'May', views: 2800 },
    { month: 'Jun', views: 3200 },
  ],
  topPosts: [
    { title: 'TypeScript Best Practices', views: 2103 },
    { title: 'Building Modern Web Apps', views: 1245 },
    { title: 'Minimalist UI Design', views: 892 },
    { title: 'Content Strategy Guide', views: 756 },
  ],
  categoryDistribution: [
    { category: 'Technology', count: 12 },
    { category: 'Design', count: 8 },
    { category: 'Marketing', count: 4 },
  ],
};

// Simulate authentication state
export const getCurrentUser = (): User | null => {
  // In a real app, this would check authentication state
  return users[0]; // Return admin user for demo
};

export const getPostsByAuthor = (authorId: string): BlogPost[] => {
  return blogPosts.filter(post => post.authorId === authorId);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentPostId: string, category: string): BlogPost[] => {
  return blogPosts
    .filter(post => post.id !== currentPostId && post.category === category)
    .slice(0, 3);
};