import { css } from '@emotion/react';
import { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { useIssue } from '@/hooks/useIssue';
import { Issue, IssueStatus } from '@/types/issue';

import CreateIssueBtn from './Issue/CreateIssueBtn';
import IssueMemo from './Issue/IssueMemo';
import KanbanDraggable from './KanbanDraggable';

type KanbanDroppableProps = {
  status: IssueStatus;
  issueList?: Issue[];
};

export default function KanbanDroppable({ status, issueList }: KanbanDroppableProps) {
  const [isCreateIssue, setIsCreateIssue] = useState(false);

  const { createIssue } = useIssue();

  const handleCreateBtnClick = () => {
    setIsCreateIssue(true);
  };

  const handleIssueBlur = () => {
    setIsCreateIssue(false);
  };

  const handleCreateIssue = (title: string) => {
    createIssue({ status, title });
    handleIssueBlur();
  };

  return (
    <Droppable droppableId={status}>
      {(provided) => (
        <div ref={provided.innerRef} css={kanbanDroppableStyle} {...provided.droppableProps}>
          <CreateIssueBtn onClick={handleCreateBtnClick} />
          {issueList?.map((issue, index) => (
            <KanbanDraggable key={issue.id} issue={issue} index={index} />
          ))}
          {isCreateIssue && (
            <IssueMemo autoFocus onBlur={handleIssueBlur} onCreateIssue={handleCreateIssue} />
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

const kanbanDroppableStyle = css`
  position: relative;
  width: 100%;
`;
