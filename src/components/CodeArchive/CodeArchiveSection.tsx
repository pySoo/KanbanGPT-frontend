import { css } from '@emotion/react';

import { useRequirement } from '@/hooks/useRequirement';

import CodeArchiveInfo from './CodeArchiveInfo';
import CodeArchiveList from './CodeArchiveList';

export default function CodeArchiveSection() {
  const { requireList } = useRequirement();
  const requireListWithCode = requireList.filter((requirement) => requirement.gpt);

  return (
    <section css={codeArchiveListStyle}>
      {requireListWithCode.length === 0 && <CodeArchiveInfo />}
      {requireListWithCode.length > 0 && <CodeArchiveList requireList={requireListWithCode} />}
    </section>
  );
}

const codeArchiveListStyle = css`
  width: 100%;
  height: 100%;
  padding: 24px;
  padding-top: 10px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
