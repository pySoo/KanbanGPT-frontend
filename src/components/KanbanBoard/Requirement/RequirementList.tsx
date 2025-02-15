import { css } from '@emotion/react';

import { Requirement } from '@/types/requirement';

import RequirementInput from './RequirementInput';
import RequirementItem from './RequirementItem';

type RequirementListProps = {
  issueId: string;
  requirements?: Requirement[] | null;
  onSelectId: (id?: string) => void;
};

export default function RequirementList({
  issueId,
  requirements,
  onSelectId,
}: RequirementListProps) {
  return (
    <ul css={requirementListStyle}>
      {requirements?.map((requirement) => (
        <RequirementItem key={requirement.id} requirement={requirement} onSelectId={onSelectId} />
      ))}
      <RequirementInput issueId={issueId} onSelectId={onSelectId} autoFocus />
    </ul>
  );
}

const requirementListStyle = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
  overflow: auto;
  padding-bottom: 10px;
`;
