import DashboardProducts from '@/components/Dashboard/DashboardProducts';
import DashboardLayout from '@/components/Layout/DashboardLayout';
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
