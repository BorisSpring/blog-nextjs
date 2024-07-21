'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';

import logo from '../../public/logo.png';
import { navigationLinks } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const pathName = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
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
        {navigationLinks.map(({ path, label }) => {
          const isCurrentPath = pathName === path;
          return (
            <div className='flex group flex-col w-fit'>
              <Link
                href={path}
                className={cn(
                  'text-blue-primary-light w-fit hover:text-blue-primary-light/90 transition text-2xl',
                  isScrolled && 'text-white hover:text-gray-100'
                )}
              >
                {label}
              </Link>
              <div className='h-[1px] mx-auto origin-center w-0 group-hover:w-full transition-all duration-300 bg-blue-primary-light'></div>
            </div>
          );
        })}
      </div>
      <div className='md:hidden flex'>
        <Sheet>
          <SheetTrigger>
            <MenuIcon className={cn('size-8', isScrolled && 'text-white')} />
          </SheetTrigger>
          <SheetContent side='left' className=''>
            <SheetHeader>
              <Image
                alt='logo'
                src={logo}
                height={24}
                width={90}
                className='w-[90px] h-[24px] object-contain mb-10'
              />
              <div className='overflow-y-auto justify-center flex flex-col gap-5'>
                {navigationLinks.map(({ path, label }) => {
                  const isCurrentPath = pathName === path;
                  return (
                    <div className='flex group flex-col w-fit' key={path}>
                      <Link
                        href={path}
                        className={cn(
                          'text-blue-primary-light w-fit hover:text-blue-primary-light/90 transition text-2xl font-semibold'
                        )}
                      >
                        {label}
                      </Link>
                      <div className='h-[1px] origin-center w-0 group-hover:w-full transition-all duration-300 bg-blue-primary-light'></div>
                    </div>
                  );
                })}
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
