import { css } from '@emotion/react';

import { theme, ThemeType } from '@/styles/theme';

import HoverIcon from '../../Shared/Icons/HoverIcon';
import PlusIcon from '../../Shared/Icons/PlusIcon';

export default function CreateIssueBtn({ ...props }: React.ComponentProps<'button'>) {
  return (
    <button aria-label="create-issue-btn" css={createIssueBtnStyle(theme)} {...props}>
      <HoverIcon icon={<PlusIcon size={16} />} />
      <span className="create-issue-title">Add Issues</span>
    </button>
  );
}

const createIssueBtnStyle = (theme: ThemeType) => css`
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 3px;
  color: ${theme.colors.darkBeige};

  .create-issue-title {
    font-weight: 500;
  }
`;
