import React from 'react';
import { dashboardStats } from '@/lib/data';
import StatsCards from '@/components/dashboard/stats-cards';
import AnalyticsChart from '@/components/dashboard/analytics-chart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">
          Track your blog's performance and engagement metrics.
        </p>
      </div>

      <StatsCards stats={dashboardStats} />

      <AnalyticsChart stats={dashboardStats} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dashboardStats.topPosts.map((post, index) => (
                <div key={post.title} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      {index + 1}
                    </div>
                    <p className="font-medium">{post.title}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">{post.views} views</span>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Average Views per Post</span>
                <span className="font-semibold">635</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Engagement Rate</span>
                <span className="font-semibold">12.3%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Bounce Rate</span>
                <span className="font-semibold">34.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Average Read Time</span>
                <span className="font-semibold">4m 32s</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}