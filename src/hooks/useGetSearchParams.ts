import { useSearchParams } from 'react-router-dom';

import { params } from '@/constants/params';

export const useGetSearchParams = () => {
  const [searchParams] = useSearchParams();
  const selectedIssueId = searchParams.get(params.selectedIssueId);

  return { selectedIssueId };
};
