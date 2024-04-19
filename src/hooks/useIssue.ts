import { produce } from 'immer';
import { useRecoilState } from 'recoil';

import { issueAtom } from '@/atoms/issueAtom';
import { requirementAtom } from '@/atoms/requirementAtom';
import {
  CreateIssueProps,
  DeleteIssueProps,
  Issue,
  IssueData,
  IssueStatus,
  UpdateIssueProps,
} from '@/types/issue';
import { Requirement } from '@/types/requirement';
import { createUniqueId } from '@/utils/uniqueId';

export function useIssue() {
  const [issueData, setIssueData] = useRecoilState<IssueData>(issueAtom);
  const [requireData, setRequireData] = useRecoilState<Requirement[]>(requirementAtom);

  const createIssue = ({ status, title }: CreateIssueProps) => {
    const id = createUniqueId();
    setIssueData(
      produce(issueData, (draftIssue) => {
        draftIssue[status].push({ status, id, title });
      }),
    );
  };

  const updateIssue = ({ id, status, title }: UpdateIssueProps) => {
    setIssueData(
      produce(issueData, (draftIssue) => {
        const issueIndex = draftIssue[status].findIndex((issue) => issue.id === id);
        if (issueIndex > -1) {
          draftIssue[status][issueIndex].title = title;
        }
      }),
    );
  };

  const deleteIssue = ({ id, status }: DeleteIssueProps) => {
    setIssueData(
      produce(issueData, (draftIssue) => {
        const issueIndex = draftIssue[status].findIndex((issue) => issue.id === id);
        if (issueIndex > -1) {
          draftIssue[status].splice(issueIndex, 1);
        }
      }),
    );

    setRequireData(
      produce(requireData, (draftRequire) => {
        return draftRequire.filter((require) => require.issueId !== id);
      }),
    );
  };

  const getIssueById = ({ id }: { id: Issue['id'] }) => {
    for (let status in issueData) {
      const issue = issueData[status as keyof IssueData].find((issue) => issue.id === id);
      if (issue) return issue;
    }
    return undefined;
  };

  const reorderIssue = ({
    status,
    sourceIndex,
    destinationIndex,
  }: {
    status: IssueStatus;
    sourceIndex: number;
    destinationIndex: number;
  }) => {
    setIssueData(
      produce(issueData, (draftIssue) => {
        const [removed] = draftIssue[status].splice(sourceIndex, 1);
        draftIssue[status].splice(destinationIndex, 0, removed);
      }),
    );
  };

  const moveIssue = ({
    sourceStatus,
    destinationStatus,
    sourceIndex,
    destinationIndex,
  }: {
    sourceStatus: IssueStatus;
    destinationStatus: IssueStatus;
    sourceIndex: number;
    destinationIndex: number;
  }) => {
    setIssueData(
      produce(issueData, (draftIssue) => {
        let [removed] = draftIssue[sourceStatus].splice(sourceIndex, 1);
        removed.status = destinationStatus;
        draftIssue[destinationStatus].splice(destinationIndex, 0, removed);
      }),
    );
  };

  return {
    issueData,
    setIssueData,
    createIssue,
    updateIssue,
    deleteIssue,
    getIssueById,
    reorderIssue,
    moveIssue,
  };
}
