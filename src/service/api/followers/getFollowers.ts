import axios from '@/service/axios/axios';

export interface GetFollows {
  page: number;
  pageSize: number;
}

export default async function getFollows({ page, pageSize }: GetFollows) {
  try {
    const response = await axios.get(
      `/users/all?page=${page}&pageSize=${pageSize}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
