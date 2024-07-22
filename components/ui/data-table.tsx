'use client';
import * as React from 'react';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  ColumnFiltersState,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  placeholder: string;
  filterBy: string;
  totalCount: number;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  placeholder,
  filterBy,
  totalCount,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const searchParams = useSearchParams();
  const router = useRouter();
  const [pagination, setPagination] = useState({
    pageIndex: (Number(searchParams?.get('page')) || 1) - 1,
    pageSize: 5,
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      sorting,
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    manualPagination: true,
    rowCount: totalCount,
    pageCount: Math.ceil(totalCount / pagination.pageSize),
    autoResetPageIndex: true,
    onPaginationChange: setPagination,
  });

  React.useEffect(() => {
    const page = Number(searchParams?.get('page')) || 1;
    setPagination((prev) => ({ ...prev, pageIndex: page - 1 }));
  }, [searchParams]);

  const handlePrevNextPage = (type: string) => {
    const newPageIndex =
      type === 'prev' ? pagination.pageIndex - 1 : pagination.pageIndex + 1;
    setPagination((prev) => ({ ...prev, pageIndex: newPageIndex }));
    const query = queryString.parse(searchParams.toString());
    query.page = String(newPageIndex + 1);
    const url = queryString.stringifyUrl(
      { url: window.location.pathname, query },
      { skipEmptyString: true, skipNull: true }
    );
    router.replace(url);
  };

  return (
    <div>
      <div className='flex items-center py-4'>
        <Input
          placeholder={placeholder}
          value={(table.getColumn(filterBy)?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn(filterBy)?.setFilterValue(event.target.value)
          }
          className='max-w-sm no-focus'
        />
      </div>
      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className='flex items-center justify-end space-x-2 py-4'>
        <Button
          variant='outline'
          size='sm'
          onClick={() => handlePrevNextPage('prev')}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant='outline'
          size='sm'
          onClick={() => handlePrevNextPage('next')}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
