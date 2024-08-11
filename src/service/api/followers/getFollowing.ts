import axios from '@/service/axios/axios';

export interface GetFollowing {
  page: number;
  pageSize: number;
}

export default async function getFollows({ page, pageSize }: GetFollowing) {
  try {
    const response = await axios.get(
      `/users/friends?page=${page}&pageSize=${pageSize}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
