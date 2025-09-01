import React from 'react';
import Sidebar from '@/components/dashboard/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex overflow-hidden bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto ml-64">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}