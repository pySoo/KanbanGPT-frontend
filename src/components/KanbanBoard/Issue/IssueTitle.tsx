import { css } from '@emotion/react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRecoilValue } from 'recoil';

import deleteStateAtom from '@/atoms/deleteStateAtom';
import { useIssue } from '@/hooks/useIssue';
import { Issue } from '@/types/issue';

import DeleteHoverBtn from '../../Shared/Button/DeleteHoverBtn';
import DeleteConfirmToast from '../../Shared/Toast/DeleteConfirmToast';
import IssueInput from './IssueInput';

type IssueTitleProps = {
  issue?: Issue;
  autoFocus?: boolean;
  onBlur?: () => void;
  onCreateIssue?: (title: string) => void;
};

export default function IssueTitle({ issue, autoFocus, onBlur, onCreateIssue }: IssueTitleProps) {
  const isDelete = useRecoilValue(deleteStateAtom(issue?.id));

  const { deleteIssue } = useIssue();

  const handleIssueDelete = () => {
    if (!issue) return;
    toast.warn(<DeleteConfirmToast id={issue.id} />);
  };

  useEffect(() => {
    if (isDelete && issue?.id) {
      deleteIssue({ id: issue.id, status: issue.status });
    }
  }, [isDelete]);

  return (
    <div css={issueTitleStyle}>
      <IssueInput
        issue={issue}
        autoFocus={autoFocus}
        onBlur={onBlur}
        onCreateIssue={onCreateIssue}
      />
      {issue && <DeleteHoverBtn onClick={handleIssueDelete} />}
    </div>
  );
}

const issueTitleStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding-bottom: 10px;
  gap: 6px;
  min-height: 38px;
`;
