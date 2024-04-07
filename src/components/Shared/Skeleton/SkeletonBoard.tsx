import { css } from '@emotion/react';

import BaseSkeleton from './BaseSkeleton';

export default function SkeletonBoard() {
  return (
    <ul css={wrapperStyle}>
      {Array.from({ length: 3 }).map(() => (
        <li css={skeletonBoardStyle}>
          <BaseSkeleton />
        </li>
      ))}
    </ul>
  );
}

const wrapperStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  gap: 16px;
  overflow: auto;
  padding: 24px;
  padding-top: 10px;
  margin-top: 40px;
`;

const skeletonBoardStyle = css`
  position: relative;
  width: 100%;
  min-width: 280px;
  min-height: 185px;
  overflow: hidden;
  border-radius: 8px;
  background-color: rgba(245, 245, 245);
`;
