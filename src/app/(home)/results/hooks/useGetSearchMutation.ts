import { useMutation } from '@tanstack/react-query';

import api from '@/service/api';

import { GetSearch } from '@/service/api/search/getSearch';

export default function useGetSearchMutation(
  onSuccess: (data: any) => void,
  onError: (error: any) => void,
) {
  return useMutation<unknown, unknown, GetSearch>({
    mutationFn: async (params: GetSearch) => api.getSearch(params),
    onSuccess,
    onError,
  });
}
