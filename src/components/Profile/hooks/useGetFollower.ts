import { useQuery } from '@tanstack/react-query';

import api from '@/service/api';

import { GetFollows } from '@/service/api/followers/getFollowers';

export default function useGetFollower(payload: GetFollows, type: string) {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => api.getFollows(payload),
    queryKey: ['getFollower', payload],
    enabled: type === 'followers',
  });

  return { data, isLoading, isError };
}
