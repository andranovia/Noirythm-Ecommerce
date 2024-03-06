import React from 'react';
import DashboardSidebar from '../dashboard/DashboardSidebar';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <div className="flex justify-start h-screen w-screen overflow-x-hidden">
        <div className="w-1/5 fixed ">
          <DashboardSidebar />
        </div>
        <main className="w-4/5 ml-[24rem]">{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;
