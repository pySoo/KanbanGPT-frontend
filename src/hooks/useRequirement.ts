import { produce } from 'immer';
import { useRecoilState } from 'recoil';

import { requirementAtom } from '@/atoms/requirementAtom';
import { CreateRequireProps, Requirement, UpdateRequireProps } from '@/types/requirement';
import { createUniqueId } from '@/utils/uniqueId';

export function useRequirement() {
  const [requireList, setRequireList] = useRecoilState<Requirement[]>(requirementAtom);

  const createRequire = ({ issueId, title }: CreateRequireProps) => {
    const id = createUniqueId();
    setRequireList(
      produce(requireList, (draftRequire) => {
        draftRequire.push({
          issueId,
          id,
          title,
          isCompleted: false,
        });
      }),
    );
  };

  const updateRequire = ({ id, title, isCompleted, gpt }: UpdateRequireProps) => {
    setRequireList(
      produce(requireList, (draftRequire) => {
        const requireToUpdate = draftRequire.find((require) => require.id === id);
        if (requireToUpdate) {
          requireToUpdate.title = title ?? requireToUpdate.title;
          requireToUpdate.isCompleted = isCompleted ?? requireToUpdate.isCompleted;
          requireToUpdate.gpt = gpt ?? requireToUpdate.gpt;
        }
      }),
    );
  };

  const deleteRequire = ({ id }: { id: Requirement['id'] }) => {
    setRequireList(
      produce(requireList, (draftRequire) => {
        return draftRequire.filter((require) => require.id !== id);
      }),
    );
  };

  const getRequireByIssueId = ({ issueId }: { issueId?: Requirement['issueId'] }) => {
    if (!issueId) return null;
    return requireList.filter((require) => require.issueId === issueId);
  };

  return {
    requireList,
    createRequire,
    updateRequire,
    deleteRequire,
    getRequireByIssueId,
  };
}
