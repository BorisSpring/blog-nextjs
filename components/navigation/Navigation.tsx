'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import logo from '../../public/logo.png';
import { navigationLinks } from '@/lib/constants';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import MobileNav from './MobileNav';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 48) {
        setIsScrolled(true);
      } else if (window.scrollY < 48) {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'flex justify-between items-center p-2 transition-all duration-500 px-4 md:p-4 md:px-10 lg:px-16',
        isScrolled && 'fixed bg-blue-primary-light w-full z-50'
      )}
    >
      <Image
        alt='logo'
        src={logo}
        height={24}
        width={90}
        className={cn(
          'w-[90px] h-[24px] object-contain',
          isScrolled && 'invert'
        )}
      />
      <div className='hidden md:flex  gap-7 transition'>
        {navigationLinks.map(({ path, label }) => (
          <div className='flex group flex-col w-fit'>
            <Link
              href={path}
              className={cn(
                'text-blue-primary-light w-fit hover:text-blue-primary-light/90 transition text-xl',
                isScrolled && 'text-white hover:text-gray-100'
              )}
            >
              {label}
            </Link>
            <div className='h-[1px] mx-auto origin-center w-0 group-hover:w-full transition-all duration-300 bg-blue-primary-light' />
          </div>
        ))}
        <SignedIn>
          <button
            className={cn(
              'text-blue-primary-light flex items-center w-fit hover:text-blue-primary-light/90 transition text-xl',
              isScrolled && 'text-white hover:text-gray-100'
            )}
          >
            <div className='flex group flex-col w-fit mr-2'>
              <Link
                href='/dashboard'
                className={cn(
                  'text-blue-primary-light w-fit hover:text-blue-primary-light/90 transition text-xl',
                  isScrolled && 'text-white hover:text-gray-100'
                )}
              >
                DashBoard
              </Link>
              <div className='h-[1px] mx-auto origin-center w-0 group-hover:w-full transition-all duration-300 bg-blue-primary-light' />
            </div>
            <UserButton
              afterSwitchSessionUrl='/'
              appearance={{
                elements: {
                  avatarBox: 'size-6',
                },
                variables: {
                  colorPrimary: '#1565D8',
                },
              }}
            />
          </button>
        </SignedIn>
        <SignedOut>
          <button
            className={cn(
              'text-blue-primary-light w-fit hover:text-blue-primary-light/90 transition text-xl',
              isScrolled && 'text-white hover:text-gray-100'
            )}
          >
            <SignInButton />
          </button>
        </SignedOut>
      </div>
      <MobileNav isScrolled={isScrolled} />
    </nav>
  );
};

export default Navigation;
