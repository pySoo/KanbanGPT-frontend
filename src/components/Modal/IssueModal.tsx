import { css } from '@emotion/react';

import { useGetSearchParams } from '@/hooks/useGetSearchParams';
import { useIssue } from '@/hooks/useIssue';
import { useModal } from '@/hooks/useModal';
import { theme, ThemeType } from '@/styles/theme';
import { ModalType } from '@/types/modal';

import IssueInfo from '../KanbanBoard/Issue/IssueInfo';
import RequirementSection from '../KanbanBoard/Requirement/RequirementSection';

export default function IssueModal() {
  const { getIssueById } = useIssue();
  const { closeModal } = useModal();

  const { selectedIssueId } = useGetSearchParams();

  if (selectedIssueId == null) {
    closeModal({ type: ModalType.ISSUE });
    return null;
  }

  const currentIssue = getIssueById({ id: selectedIssueId });

  if (currentIssue === null) return null;

  return (
    <div css={issueModalStyle(theme)}>
      <IssueInfo issue={currentIssue} />
      <section className="requirement-section">
        <RequirementSection />
      </section>
    </div>
  );
}

const issueModalStyle = (theme: ThemeType) => css`
  width: calc(100vw - 80px);
  height: calc(100vh - 112px);
  background: #fff;
  border-radius: 10px;
  overflow: hidden;

  .requirement-section {
    padding: 0px 20px 0 20px;
    height: calc(100% - 70px);
    overflow: auto;
  }

  @media (max-width: ${theme.screens.sm}px) {
    width: calc(100vw - 40px);
  }
`;
