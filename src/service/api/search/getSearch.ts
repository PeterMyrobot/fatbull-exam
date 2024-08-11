import axios from '@/service/axios/axios';
import { TGetSearchResponse } from './types';

export interface GetSearch {
  page: number;
  pageSize: number;
  keyword?: string;
}

export default async function getFollows({
  page,
  pageSize,
  keyword,
}: GetSearch): Promise<TGetSearchResponse | null> {
  try {
    const response = await axios.get(
      `/users/all?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
