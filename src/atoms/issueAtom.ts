import { atom } from 'recoil';

import { localStorageKey } from '@/constants/localStorage';
import { IssueDataType, IssueStatus } from '@/types/issue';
import { localStorageEffect } from '@/utils/localStorage';

const defaultIssueData: IssueDataType = {
  [IssueStatus.TODO]: [],
  [IssueStatus.IN_PROGRESS]: [],
  [IssueStatus.DONE]: [],
};

export const issueAtom = atom<IssueDataType>({
  key: 'issueState',
  default: defaultIssueData,
  effects: [localStorageEffect<IssueDataType>(localStorageKey.issue)],
});
