import Footer from '@/components/Footer';
import React from 'react';

const RouteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default RouteLayout;
