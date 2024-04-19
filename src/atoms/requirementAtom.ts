import { atom } from 'recoil';

import { localStorageKey } from '@/constants/localStorage';
import { Requirement } from '@/types/requirement';
import { localStorageEffect } from '@/utils/localStorage';

export const requirementAtom = atom<Requirement[]>({
  key: 'requirementState',
  default: [],
  effects: [localStorageEffect<Requirement[]>(localStorageKey.requirement)],
});
