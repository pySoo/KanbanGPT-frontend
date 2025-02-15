import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import { useRequirement } from '@/hooks/useRequirement';
import { Requirement } from '@/types/requirement';

import CheckLottie from '../../Shared/CheckLottie';
import CheckCircleIcon from '../../Shared/Icons/CheckCircleIcon';
import EmptyCircleIcon from '../../Shared/Icons/EmptyCircleIcon';

type RequirementCheckToggle = {
  requirement: Requirement;
};

export default function RequirementCheckToggle({ requirement }: RequirementCheckToggle) {
  const { updateRequire } = useRequirement();

  const [isClicked, setIsClicked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChecked = () => {
    !isClicked && setIsClicked(true);
    setIsChecked(!isChecked);
    updateRequire({ ...requirement, isCompleted: !isChecked });
  };

  useEffect(() => {
    setIsChecked(requirement.isCompleted);
  }, [requirement]);

  return (
    <div css={requirementCheckToggle} onClick={handleToggleChecked}>
      {!isClicked && (isChecked ? <CheckCircleIcon /> : <EmptyCircleIcon />)}
      {isClicked && (isChecked ? <CheckLottie /> : <EmptyCircleIcon />)}
    </div>
  );
}

const requirementCheckToggle = css`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
