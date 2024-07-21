import { Hash } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface Props {
  id: string;
  name: string;
}
const Tag = ({ id = '1', name = 'java' }: Props) => {
  return (
    <Link
      href={`/tags/${id}/${name}`}
      className='rounded-md px-3 py-1 w-fit hover:text-white/90 cursor-pointer hover:bg-blue-500 transition bg-blue-600 text-white flex items-center justify-center'
    >
      <p className='font-semibold flex  items-center'>
        <Hash className='size-4 mr-0.5' />
        {name}
      </p>
    </Link>
  );
};

export default Tag;
