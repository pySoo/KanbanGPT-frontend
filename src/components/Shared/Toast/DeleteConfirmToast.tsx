import { css } from '@emotion/react';
import { useSetRecoilState } from 'recoil';

import deleteStateAtom from '@/atoms/deleteStateAtom';
import { theme, ThemeType } from '@/styles/theme';

type DeleteConfirmToastProps = {
  id: string;
};

export default function DeleteConfirmToast({ id }: DeleteConfirmToastProps) {
  const setDelete = useSetRecoilState(deleteStateAtom(id));

  const handleClick = () => {
    setDelete(true);
  };

  return (
    <div css={deleteConfirmToastStyle(theme)}>
      <p>정말 삭제하시겠어요?</p>
      <button aria-label="delete-btn" onClick={handleClick}>
        삭제하기
      </button>
    </div>
  );
}

const deleteConfirmToastStyle = (theme: ThemeType) => css`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    padding: 5px 10px;
    background: white;
    border-radius: 8px;
    font-weight: 500;
    color: ${theme.colors.midGray};
  }
`;
