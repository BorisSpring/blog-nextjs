interface AddOrUpdateTagParams {
  name: string;
  id?: number | undefined;
}

interface DeleteTagParams {
  id: number;
}

interface createCategoryOrUpdateParams {
  name: string;
  id?: number;
}

interface SearchParams {
  searchParams: { [key: string]: string | undefined };
}

interface findAllTagsWithSortAndPaginateParams {
  page: number;
  sortBy?: string | undefined;
}

interface DeleteCategoryParams {
  id: number;
}

interface findCategoryWithSortAndPaginateParams {
  page?: number | undefined;
  sortBy?: string | undefined;
}
