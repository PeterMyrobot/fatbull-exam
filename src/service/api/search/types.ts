export type TResult = {
  id: string;
  name: string;
  username: string;
  avater: string;
  isFollowing: boolean;
};

export type TGetSearchResponse = {
  total: number;
  totalPage: number;
  page: number;
  pageSize: number;
  data: TResult[];
};
