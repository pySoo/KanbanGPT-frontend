import { css } from '@emotion/react';

import { theme, ThemeType } from '@/styles/theme';
import { Requirement } from '@/types/requirement';

import CodeBlock from './CodeBlock';
import GPTAPIKeyInfo from './Information/GPTAPIKeyInfo';
import GPTSearchInfo from './Information/GPTSearchInfo';

type DisconnectedPromptProps = {
  requirement?: Requirement;
};

export default function DisconnectedPrompt({ requirement }: DisconnectedPromptProps) {
  return (
    <div css={disconnectedPromptStyle(theme)}>
      {requirement?.gpt ? (
        <CodeBlock code={requirement.gpt} />
      ) : (
        <>
          <GPTAPIKeyInfo />
          <GPTSearchInfo requirement={requirement} />
        </>
      )}
    </div>
  );
}

const disconnectedPromptStyle = (theme: ThemeType) => css`
  display: flex;
  flex-direction: column;
  gap: 30px;

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .text-green {
    color: ${theme.colors.green};
  }

  .text-beige {
    color: ${theme.colors.beige};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;
