import Image from 'next/image';
import React from 'react';
import LightLogo from '../public/logoLight.png';
import { footerLinks } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className='flex flex-col-reverse  lg:p-10 border-t  justify-between items-center md:items-start md:flex-row  bg-blue-primary-dark p-5'>
      <div className='w-[263px]  h-[143px] flex flex-col text-center text-zinc-300 items-center justify-center gap-4'>
        <Image
          src={LightLogo}
          alt='logo'
          width={77}
          height={24}
          className='w-[77px] h-6 object-cover'
        />
        <p>Build a modern and creative website with crealand</p>
        <div className='flex gap-3'>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className='rounded-full size-8 bg-[#FC5A5A]' />
          ))}
        </div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
        {footerLinks.map(({ heading, links }) => {
          return (
            <div className='flex flex-col gap-2 w-[133px] m-auto my-4 md:mt-0'>
              <span className='font-bold text-[#959EAD] text-[20px]'>
                {heading}
              </span>
              {links.map((link) => (
                <div
                  className='group flex flex-col w-fit cursor-pointer'
                  key={link}
                >
                  <span className='text-[#959EAD] text-base font-medium'>
                    {link}
                  </span>
                  <div className='h-[1px] bg-[#959EAD] mx-auto w-0 transition-all duration-300 group-hover:w-full origin-center' />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
