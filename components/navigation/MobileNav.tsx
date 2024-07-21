'use client';
import { navigationLinks } from '@/lib/constants';
import { cn } from '@/lib/utils';
import React from 'react';
import logo from '../../public/logo.png';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  isScrolled: boolean;
}

const MobileNav = ({ isScrolled }: Props) => {
  return (
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
  );
};

export default MobileNav;
