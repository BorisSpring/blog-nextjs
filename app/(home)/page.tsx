import CallToAction from '@/components/CallToAction';
import BlogCard from '@/components/cards/BlogCard';
import Footer from '@/components/Footer';
import HomePageHeader from '@/components/HomePageHeader';
import React from 'react';

const RootPage = () => {
  return (
    <main>
      <div className='container flex flex-col gap-12 lg:gap-24 '>
        <HomePageHeader />
        <div className='flex flex-wrap  gap-8'>
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <BlogCard key={item} />
          ))}
        </div>
      </div>
      <CallToAction />
      <Footer />
    </main>
  );
};

export default RootPage;
