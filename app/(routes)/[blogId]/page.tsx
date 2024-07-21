import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import BlogImage from '../../../public/blog.jpg';
import Image from 'next/image';
import CommentForm from '@/components/forms/CommentForm';
import CommentSection from '@/components/CommentSection';
import LatestArticles from '@/components/LatestArticles';
import TagsSection from '@/components/TagsSection';

const SingleBlogPage = () => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-3 container mb-12 lg:mb-24 relative'>
      <section className='flex flex-col gap-5 lg:gap-8  mt-8 lg:col-span-2'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href='/1234'>Blogs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className='text-zinc-500'>
                Help children get better education
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className='relative w-[272px] h-[171px] md:w-[637px] md:h-[405px] lg:w-full lg:h-[405px]'>
          <Image fill alt='blog image' src={BlogImage} className='w-full' />
        </div>
        <p className='text-blue-primary-light text-sm md:text-base'>
          EDUCATION
        </p>
        <p className='text-blue-primary-dark font-medium md:text-3xl text-2xl'>
          Help children get better education
        </p>
        <p className='text-base text-zinc-500'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin.
        </p>
        <p className='text-base text-zinc-500'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
        </p>
        <p className='text-base text-zinc-500'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum.
        </p>
        <CommentForm />
        <CommentSection />
      </section>
      <div className='my-12 p-5 bg-gray-100 flex flex-col gap-5 md:gap-12 h-fit rounded-md lg:ml-12 xl:sticky xl:top-[120px]'>
        <LatestArticles />
        <TagsSection />
      </div>
    </div>
  );
};

export default SingleBlogPage;
