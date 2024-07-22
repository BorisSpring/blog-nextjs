'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export type Tag = {
  id: number;
  name: string;
  _count: {
    blogs: number;
  };
};

export const columns: ColumnDef<Tag>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='font-semibold text-zinc-700'
          onClick={() => column?.toggleSorting(column?.getIsSorted() === 'asc')}
        >
          Id
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='font-semibold text-zinc-700'
          onClick={() => column?.toggleSorting(column?.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
  },
  {
    accessorKey: '_count?.blogs',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className='font-semibold text-zinc-700'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Blog Count
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div>
        {row.original._count.blogs > 0 ? (
          row.original._count.blogs
        ) : (
          <span className='text-xs'>Have not any blogs yet!</span>
        )}
      </div>
    ),
  },
  {
    id: 'Actions',
    cell: ({ row }) => {
      const tag = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
            // onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
