'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BarChart3,
  FileText,
  Users,
  Settings,
  PlusCircle,
  TrendingUp,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { getCurrentUser } from '@/lib/data';

const adminNavigation = [
  { name: 'Overview', href: '/dashboard', icon: BarChart3 },
  { name: 'Posts', href: '/dashboard/posts', icon: FileText },
  { name: 'Authors', href: '/dashboard/authors', icon: Users },
  { name: 'Analytics', href: '/dashboard/analytics', icon: TrendingUp },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

const authorNavigation = [
  { name: 'Overview', href: '/dashboard', icon: BarChart3 },
  { name: 'My Posts', href: '/dashboard/posts', icon: FileText },
  { name: 'New Post', href: '/dashboard/posts/new', icon: PlusCircle },
  { name: 'Analytics', href: '/dashboard/analytics', icon: TrendingUp },
];

export default function Sidebar() {
  const pathname = usePathname();
  const currentUser = getCurrentUser();
  
  const navigation = currentUser?.role === 'admin' ? adminNavigation : authorNavigation;

  return (
    <div className="flex h-full w-64 flex-col fixed inset-y-0 z-50 bg-background border-r">
      <div className="flex h-16 shrink-0 items-center border-b px-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary"></div>
          <span className="text-xl font-bold">BlogDNF</span>
        </Link>
      </div>
      
      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <item.icon
                className={cn(
                  'mr-3 h-5 w-5 flex-shrink-0',
                  isActive ? 'text-primary-foreground' : 'text-muted-foreground'
                )}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t">
        <div className="flex items-center space-x-3">
          {currentUser?.avatar ? (
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="h-8 w-8 rounded-full object-cover"
            />
          ) : (
            <User className="h-8 w-8 p-1 rounded-full bg-accent" />
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{currentUser?.name}</p>
            <p className="text-xs text-muted-foreground capitalize">{currentUser?.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}