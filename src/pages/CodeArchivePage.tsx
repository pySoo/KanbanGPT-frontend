import { css } from '@emotion/react';

import CodeArchiveSection from '@/components/CodeArchive/CodeArchiveSection';
import { theme, ThemeType } from '@/styles/theme';

export default function CodeArchivePage() {
  return (
    <div css={codeArchiveStyle(theme)}>
      <h1 className="code-archive-title">CODE ARCHIVE</h1>
      <CodeArchiveSection />
    </div>
  );
}

const codeArchiveStyle = (theme: ThemeType) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  color: ${theme.colors.text};

  .code-archive-title {
    font-size: 1.6rem;
    margin-bottom: 10px;
    font-weight: 700;
    color: ${theme.colors.done};

    :hover {
      color: ${theme.colors.primary};
    }
  }
`;
