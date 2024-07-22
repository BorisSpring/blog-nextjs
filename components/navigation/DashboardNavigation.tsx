'use client';
import { dashboardLinks } from '@/lib/constants';
import { Role } from '@prisma/client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, MenuIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
interface Props {
  role: Role;
}

const DashboardNavigation = ({ role }: Props) => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const renderLinks = () =>
    dashboardLinks
      .filter((link) => link.role === role || link.role === Role.GUEST)
      .map((link) => {
        const isActive = pathName === link.role;
        return (
          <li
            key={link.path}
            className={cn(
              'flex items-center space-x-3 transition-all  md:hover:bg-zinc-500  duration-200 hover:bg-blue-100  px-2 py-1.5 rounded-md'
              // isActive && 'bg-blue-200 md:bg-zinc-500'
            )}
          >
            <Link href={link.path} className='flex items-center space-x-2'>
              <link.icon className='w-5 h-5 text-blue-primary-light md:text-white' />
              <span
                className={cn(
                  'text-blue-primary-light origin-left text-nowrap transition duration-200 md:text-white font-medium text-lg',
                  isOpen && 'opacity-100 w-fit h-auto',
                  !isOpen && 'w-0 h-0 opacity-0'
                )}
              >
                {link.label}
              </span>
            </Link>
          </li>
        );
      });

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Menu className='size-5 text-blue-primary-light md:hidden' />
        </SheetTrigger>
        <SheetContent side='left' className='w-[275px]'>
          <SheetHeader>
            <ul className='flex flex-col gap-3 mt-10'>{renderLinks()}</ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <div
        className={cn(
          'px-3 bg-zinc-700 w-[60px] fixed  overflow-x-hidden hidden md:block shadow-md h-full py-10 overflow-y-auto scrollbar-thin scrollbar-track-zinc-500',
          isOpen ? 'animate-slide-in' : 'animate-slide-out'
        )}
      >
        <ul className={cn('md:flex flex-col gap-3 ')}>
          <li
            className={cn(
              'flex items-center space-x-3  transition px-2 py-1.5 rounded-md'
            )}
          >
            <button onClick={() => setIsOpen((prev) => !prev)}>
              <MenuIcon className='size-6 text-white' />
            </button>
          </li>
          {renderLinks()}
        </ul>
      </div>
    </>
  );
};

export default DashboardNavigation;
