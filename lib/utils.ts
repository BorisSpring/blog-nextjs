import { type ClassValue, clsx } from 'clsx';
import queryString from 'query-string';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
  isFirst?: boolean;
}

export function formUrlQuery({ params, key, value, isFirst }: UrlQueryParams) {
  const queryUrl = queryString.parse(params);

  queryUrl[key] = value;

  if (isFirst) queryUrl.page = '1';

  return queryString.stringifyUrl(
    { url: window.location.pathname, query: queryUrl },
    { skipNull: true, skipEmptyString: true }
  );
}
