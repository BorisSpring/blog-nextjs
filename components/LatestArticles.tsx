import Image from 'next/image';
import React from 'react';
import blog from '../public/blog.jpg';
import Link from 'next/link';

const LatestArticles = () => {
  return (
    <>
      <h3 className='lg:-mb-8 font-semibold text-blue-primary-dark'>
        Latest Articles
      </h3>
      <aside className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Link
            href='/1231'
            key={item}
            className='flex items-start gap-2 group hover:bg-gray-100 transition rounded-md hover:shadow-sm'
          >
            <div className='relative inline-block min-w-[60px] md:min-w-[80px] min-h-[60px] md:min-h-[80px] size-[60px] md:size-20 overflow-hidden rounded-md'>
              <Image
                alt='blog image'
                fill
                className='size-[60px] group-hover:scale-125 transition rounded-lg md:size-20 object-cover'
                src={blog}
              />
            </div>
            <div className='py-2'>
              <p className='font-medium  text-sm md:text-base line-clamp-2'>
                Help children get better education
              </p>
              <p className='text-zinc-400 text-xs'>Jun 27, 2022</p>
            </div>
          </Link>
        ))}
      </aside>
    </>
  );
};

export default LatestArticles;
