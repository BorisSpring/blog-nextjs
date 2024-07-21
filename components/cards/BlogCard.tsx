import React from 'react';
import BlogImage from '../../public/blog.jpg';
import Image from 'next/image';
import Avatar from '../../public/avatar.png';

const BlogCard = () => {
  return (
    <div className='flex group hover-shadow-md flex-col m-auto w-[288px] rounded-sm border shadow-sm md:w-[310px] lg:w-[360px] cursor-pointer'>
      <div className='relative w-full md:h-[249px] h-[160px] lg:h-[255px] rounded-t-md overflow-hidden'>
        <Image
          alt='Blog Image'
          src={BlogImage}
          fill
          className='w-full h-full group-hover:scale-125 transition-all duration-300'
        />
      </div>
      <div className='p-3 flex flex-col gap-4'>
        <h3 className='text-blue-primary-light min-h-[64px] text-2xl font-bold line-clamp-2'>
          Future of Work Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Qui provident sunt earum, dolore illum consequatur ex obcaecati
          possimus nihil velit perferendis eum incidunt tempora. Ipsa saepe vero
          similique doloremque esse!
        </h3>
        <p className='line-clamp-2 min-h-[56px] text-zinc-600 text-lg'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, modi
          animi numquam quas ipsam exercitationem minus asperiores est a
          suscipit accusamus explicabo voluptatum ullam quisquam quia illo
          repellat, voluptates impedit.
        </p>
        <div className='flex gap-2 justify-between items-center'>
          <div className='flex items-center gap-2'>
            <Image
              src={Avatar}
              className='size-8'
              width={32}
              height={32}
              alt='user avatar'
            />
            <p className='text-blue-primary-dark text-base'>
              Boris Dimitriejvic
            </p>
          </div>
          <div className='font-bold text-[#5A7184]'>02 May</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
