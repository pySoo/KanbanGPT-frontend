import { Draggable } from 'react-beautiful-dnd';

import { Issue } from '@/types/issue';

import IssueMemo from './Issue/IssueMemo';

type KanbanDraggableProps = {
  issue: Issue;
  index: number;
};

export default function KanbanDraggable({ issue, index }: KanbanDraggableProps) {
  return (
    <Draggable key={issue.id} draggableId={issue.id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <IssueMemo issue={issue} />
        </div>
      )}
    </Draggable>
  );
}
