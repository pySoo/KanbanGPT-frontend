import { css } from '@emotion/react';

import { theme, ThemeType } from '@/styles/theme';
import { Requirement } from '@/types/requirement';

import CodeBlock from '../Gpt/CodeBlock';
import Label from '../Shared/Label';

type CodeArchiveItemProps = {
  requirement: Requirement;
};

export default function CodeArchiveItem({ requirement }: CodeArchiveItemProps) {
  return (
    <li css={codeArchiveItemStyle(theme)}>
      <div className="archive-requirement-title">
        <Label>요구사항</Label>
        <p className="title">{requirement.title}</p>
      </div>
      {requirement.gpt && (
        <div className="archive-code-block">
          <CodeBlock code={requirement.gpt} />
        </div>
      )}
    </li>
  );
}

const codeArchiveItemStyle = (theme: ThemeType) => css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .archive-requirement-title {
    display: flex;
    gap: 10px;

    .title {
      font-size: 1.2rem;
      font-weight: 600;
      color: ${theme.colors.green};
    }
  }

  .archive-code-block {
    display: flex;
    overflow: hidden;
  }
`;
