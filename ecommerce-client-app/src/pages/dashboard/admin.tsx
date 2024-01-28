import DashboardProducts from '@/components/dashboard/DashboardProducts';
import DashboardLayout from '@/components/layout/DashboardLayout';
import React from 'react';

const Admin = () => {
  return (
    <>
      <DashboardLayout>
        <div className='bg-white w-full h-full'>
        <DashboardProducts/>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Admin;
