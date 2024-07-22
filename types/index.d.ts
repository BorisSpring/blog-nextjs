export interface TagWithCount {
  id: number;
  name: string;
  _count: {
    blogs: number;
  };
}
