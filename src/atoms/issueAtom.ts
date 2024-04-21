import { atom } from 'recoil';

import { localStorageKey } from '@/constants/localStorage';
import { IssueData, IssueStatus } from '@/types/issue';
import { localStorageEffect } from '@/utils/localStorage';

const defaultIssueData: IssueData = {
  [IssueStatus.TODO]: [],
  [IssueStatus.IN_PROGRESS]: [],
  [IssueStatus.DONE]: [],
};

export const issueAtom = atom<IssueData>({
  key: 'issueState',
  default: defaultIssueData,
  effects: [localStorageEffect<IssueData>(localStorageKey.issue)],
});
