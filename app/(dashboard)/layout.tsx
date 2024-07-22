import DashboardNavigation from '@/components/navigation/DashboardNavigation';
import { currentProfile } from '@/lib/utils/currentProfile';
import { redirect } from 'next/navigation';
import React from 'react';

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const profile = await currentProfile();

  if (!profile) return redirect('/sign-in');

  return (
    <div className='h-screen flex flex-col md:flex-row'>
      <DashboardNavigation role={profile.role} />
      {children}
    </div>
  );
};

export default DashboardLayout;
