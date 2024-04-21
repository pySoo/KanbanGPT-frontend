import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { Panel, PanelGroup } from 'react-resizable-panels';

import { useGetSearchParams } from '@/hooks/useGetSearchParams';
import { useRequirement } from '@/hooks/useRequirement';
import useResize from '@/hooks/useResize';
import { theme } from '@/styles/theme';
import { Requirement } from '@/types/requirement';

import GPTPrompt from '../../Gpt/GptPrompt';
import ResizeHandle from '../../Shared/ResizeHandle';
import RequirementList from './RequirementList';

export default function RequirementSection() {
  const { width } = useResize();
  const panelDirection = width > theme.screens.md ? 'horizontal' : 'vertical';

  const { selectedIssueId } = useGetSearchParams();

  if (selectedIssueId == null) return;

  const [selectedRequireId, setSelectedRequireId] = useState<string>();
  const [selectedRequire, setSelectedRequire] = useState<Requirement>();
  const { getRequireByIssueId } = useRequirement();

  const requirementList = getRequireByIssueId({ issueId: selectedIssueId });

  const handleSelectId = (id?: string) => {
    setSelectedRequireId(id);
  };

  useEffect(() => {
    const filteredRequire = requirementList?.find((value) => value.id === selectedRequireId);
    setSelectedRequire(filteredRequire);
  }, [selectedRequireId, requirementList]);

  return (
    <section css={requirementSectionStyle}>
      <PanelGroup direction={panelDirection}>
        <Panel>
          <RequirementList
            issueId={selectedIssueId}
            requirements={requirementList}
            onSelectId={handleSelectId}
          />
        </Panel>
        <ResizeHandle direction={panelDirection} />
        <Panel>
          <GPTPrompt requirement={selectedRequire} />
        </Panel>
      </PanelGroup>
    </section>
  );
}

const requirementSectionStyle = css`
  width: 100%;
  display: flex;
  height: 100%;
`;
