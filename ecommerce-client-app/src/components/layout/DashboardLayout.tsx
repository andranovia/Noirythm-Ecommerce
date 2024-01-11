import React from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <div className="flex justify-start h-screen w-screen bg-blue-100">
        <div className="w-1/5">
          <DashboardSidebar />
        </div>
        <main className='w-4/5'>{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;
    