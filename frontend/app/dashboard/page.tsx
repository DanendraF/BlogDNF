import React from 'react';
import { dashboardStats, getCurrentUser } from '@/lib/data';
import StatsCards from '@/components/dashboard/stats-cards';
import AnalyticsChart from '@/components/dashboard/analytics-chart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const currentUser = getCurrentUser();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {currentUser?.name}! Here's an overview of your blog performance.
        </p>
      </div>

      <StatsCards stats={dashboardStats} />

      <AnalyticsChart stats={dashboardStats} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <p className="text-sm">New post published: "Building Modern Web Apps"</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
              <p className="text-sm">Author Emma Wilson joined the platform</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
              <p className="text-sm">Post "UI Design Principles" reached 1K views</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-20 flex-col">
                <span className="text-2xl mb-1">📝</span>
                <span>New Post</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <span className="text-2xl mb-1">👥</span>
                <span>Manage Authors</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <span className="text-2xl mb-1">📊</span>
                <span>View Analytics</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <span className="text-2xl mb-1">⚙️</span>
                <span>Settings</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}