import Footer from '@/components/Footer';
import Navigation from '@/components/navigation/Navigation';
import React from 'react';

const RouteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default RouteLayout;
