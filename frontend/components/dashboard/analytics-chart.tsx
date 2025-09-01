'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DashboardStats } from '@/types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface AnalyticsChartProps {
  stats: DashboardStats;
}

export default function AnalyticsChart({ stats }: AnalyticsChartProps) {
  const monthlyViewsData = {
    labels: stats.monthlyViews.map(item => item.month),
    datasets: [
      {
        label: 'Monthly Views',
        data: stats.monthlyViews.map(item => item.views),
        borderColor: 'hsl(var(--primary))',
        backgroundColor: 'hsl(var(--primary) / 0.1)',
        tension: 0.4,
      },
    ],
  };

  const topPostsData = {
    labels: stats.topPosts.map(post => post.title.substring(0, 20) + '...'),
    datasets: [
      {
        label: 'Views',
        data: stats.topPosts.map(post => post.views),
        backgroundColor: [
          'hsl(var(--chart-1))',
          'hsl(var(--chart-2))',
          'hsl(var(--chart-3))',
          'hsl(var(--chart-4))',
        ],
      },
    ],
  };

  const categoryData = {
    labels: stats.categoryDistribution.map(cat => cat.category),
    datasets: [
      {
        data: stats.categoryDistribution.map(cat => cat.count),
        backgroundColor: [
          'hsl(var(--chart-1))',
          'hsl(var(--chart-2))',
          'hsl(var(--chart-3))',
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle>Monthly Views</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <Line data={monthlyViewsData} options={chartOptions} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <Bar data={topPostsData} options={chartOptions} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Posts by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <Doughnut data={categoryData} options={chartOptions} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}