import { css } from '@emotion/react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRecoilValue } from 'recoil';

import deleteStateAtom from '@/atoms/deleteStateAtom';
import { devEnvironmentAtom } from '@/atoms/devEnvironmentAtom';
import { useRequirement } from '@/hooks/useRequirement';
import { theme, ThemeType } from '@/styles/theme';
import { Requirement } from '@/types/requirement';
import { copyText, generateSearchPrompt } from '@/utils/gpt';

import GPTGenerateCodeBtn from '../../Gpt/GPTGenerateCodeBtn';
import DeleteHoverBtn from '../../Shared/Button/DeleteHoverBtn';
import HoverIcon from '../../Shared/Icons/HoverIcon';
import SearchIcon from '../../Shared/Icons/SearchIcon';
import DeleteConfirmToast from '../../Shared/Toast/DeleteConfirmToast';

type RequirementControlBtnProps = {
  requirement: Requirement;
  onSelectId: (id?: string) => void;
};

export default function RequirementControlBtn({
  requirement,
  onSelectId,
}: RequirementControlBtnProps) {
  const devState = useRecoilValue(devEnvironmentAtom);
  const isDelete = useRecoilValue(deleteStateAtom(requirement.id));

  const { deleteRequire } = useRequirement();

  const handleSearch = () => {
    const text = generateSearchPrompt({
      framework: devState.framework,
      language: devState.language,
      title: requirement.title,
    });

    copyText({
      text,
      toastMessage: '요구사항을 복사했어요!',
      isRequirement: true,
    });
  };

  const handleDelete = () => {
    toast.warn(<DeleteConfirmToast id={requirement.id} />);
  };

  useEffect(() => {
    if (isDelete) {
      deleteRequire({ id: requirement.id });
    }
  }, [isDelete]);

  return (
    <div css={requirementItemBtnStyle(theme)}>
      <HoverIcon
        aria-label="generate-code-btn"
        icon={<GPTGenerateCodeBtn requirement={requirement} onSelectId={onSelectId} />}
      />
      <HoverIcon
        aria-label="requirement-search-btn"
        className="requirement-search-btn"
        icon={<SearchIcon size={18} />}
        onClick={handleSearch}
      />
      <DeleteHoverBtn
        aria-label="requirement-delete-btn"
        className="requirement-delete-btn"
        onClick={handleDelete}
        iconSize={18}
      />
    </div>
  );
}

const requirementItemBtnStyle = (theme: ThemeType) => css`
  display: flex;
  gap: 2px;
  padding: 2px 5px;
  color: ${theme.colors.green};

  .requirement-search-btn {
    color: ${theme.colors.beige};
  }

  .requirement-delete-btn {
    width: 28px;
    height: 28px;
  }
`;
