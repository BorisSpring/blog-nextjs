'use client';
import React, { useEffect, useState } from 'react';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import { formUrlQuery } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import queryString from 'query-string';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const newUrl = queryString.stringifyUrl(
        {
          url: pathName,
          query: { page: 1, search },
        },
        { skipNull: true, skipEmptyString: true }
      );

      router.push(newUrl);
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  return (
    <div className='relative w-full'>
      <Search className='absolute top-1/2 left-2 -translate-y-1/2 size-6 text-zinc-500' />
      <Input
        placeholder='Search Articles'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='no-focus bg-white rounded-md pl-10 text-lg text-zinc-500 border focus:border-blue-primary-light transition'
      />
    </div>
  );
};

export default SearchBar;
