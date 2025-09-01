import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Eye, Users, Heart } from 'lucide-react';
import { DashboardStats } from '@/types';

interface StatsCardsProps {
  stats: DashboardStats;
}

export default function StatsCards({ stats }: StatsCardsProps) {
  const cards = [
    {
      title: 'Total Posts',
      value: stats.totalPosts,
      icon: FileText,
      change: '+12%',
      changeType: 'positive' as const,
    },
    {
      title: 'Total Views',
      value: stats.totalViews.toLocaleString(),
      icon: Eye,
      change: '+18%',
      changeType: 'positive' as const,
    },
    {
      title: 'Authors',
      value: stats.totalAuthors,
      icon: Users,
      change: '+2%',
      changeType: 'positive' as const,
    },
    {
      title: 'Total Likes',
      value: stats.totalLikes.toLocaleString(),
      icon: Heart,
      change: '+25%',
      changeType: 'positive' as const,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <Card key={card.title} className="transition-all hover:shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <card.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className={card.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}>
                {card.change}
              </span>{' '}
              from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}