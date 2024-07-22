import TagForm from '@/components/forms/TagForm';
import { columns } from '@/components/tables/tags/columns';
import { DataTable } from '@/components/ui/data-table';
import { findAllTagsWithSortAndPaginate } from '@/lib/actions/tag.action';
import { TagWithCount } from '@/types';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import React from 'react';

const TagsPage = async ({ searchParams }: SearchParams) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [Number(searchParams.page || 1), searchParams?.sortBy],
    queryFn: () =>
      findAllTagsWithSortAndPaginate({
        page: Number(searchParams.page || 1),
        sortBy: searchParams?.sortBy,
      }),
  });

  const data = queryClient.getQueryData<{
    tags: TagWithCount[];
    count: number;
  }>([Number(searchParams.page || 1), searchParams?.sortBy]);

  return (
    <div className='h-screen overflow-y-auto md:ml-[60px] p-3 md:p-5   w-full'>
      <h1 className='text-lg md:text-3xl text-zinc-700 font-semibold mx-auto w-fit md:-translate-x-[30px] my-4'>
        Tags
      </h1>
      <TagForm />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <DataTable
          totalCount={data?.count || 0}
          placeholder='Filter By Name'
          filterBy='name'
          data={data?.tags || []}
          columns={columns}
        />
      </HydrationBoundary>
    </div>
  );
};

export default TagsPage;
