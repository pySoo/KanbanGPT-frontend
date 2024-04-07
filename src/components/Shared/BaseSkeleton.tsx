import { css } from '@emotion/react';

export default function BaseSkeleton() {
  return <div css={baseSkeletonStyle} />;
}

const baseSkeletonStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(245, 245, 245, 1) 0%,
    #ffffffae 10%,
    rgba(245, 245, 245, 1) 20%
  );
  animation: loading 1.5s infinite linear;

  @keyframes loading {
    0% {
      transform: translateX(0);
    }
    50%,
    100% {
      transform: translateX(100%);
    }
  }
`;
