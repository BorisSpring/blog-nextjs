import React from 'react';
import HeaderRightImage from '../public/header.svg';
import SearchBar from './SearchBar';
import Image from 'next/image';

const HomePageHeader = () => {
  return (
    <header className='grid grid-cols-1 lg:grid-cols-2'>
      <div className='flex flex-col gap-5 text-center lg:text-left lg:justify-center lg:gap-7'>
        <h1 className='text-blue-primary-dark text-[30px] mt-8 md:text-[42px] leading-10  drop-shadow-sm font-semibold'>
          Read the most <br />
          interesting articles
        </h1>
        <p className='lg:text-blue-primary-dark font-medium text-lg md:text-2xl text-[#5A7184]'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis,
          quas sit accusantium maiores nihil quidem porro reiciendis voluptatum
          temporibus fugit cumque hic.
        </p>
        <SearchBar />
        <div className='flex flex-col md:flex-row text-xl items-center md:gap-2'>
          <span className='text-zinc-500 font-semibold'>Popular Tags:</span>
          <div className='flex flex-wrap gap-2'>
            {['design', 'ui', 'java'].map((tag) => (
              <div className='rounded-md px-3 py-1 hover:text-blue-primary-dark cursor-pointer hover:bg-blue-200 transition bg-blue-100 text-blue-primary-light flex items-center justify-center'>
                <p className='font-semibold'>{tag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='relative h-[525px] hidden lg:block'>
        <Image src={HeaderRightImage} alt='conversation image' fill />
      </div>
    </header>
  );
};

export default HomePageHeader;
