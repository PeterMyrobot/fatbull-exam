import { useQuery } from '@tanstack/react-query';

import api from '@/service/api';

import { GetFollowing } from '@/service/api/followers/getFollowing';

export default function useGetFollower(payload: GetFollowing, type: string) {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => api.getFollowing(payload),
    queryKey: ['getFollowing', payload],
    enabled: type === 'following',
  });

  return { data, isLoading, isError };
}
