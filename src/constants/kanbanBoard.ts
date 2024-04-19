import { theme } from '@/styles/theme';
import { IssueStatus } from '@/types/issue';

export const kanbanBoardTitleData = [
  {
    status: IssueStatus.TODO,
    title: 'To do',
    labelColor: theme.colors.primary,
  },
  {
    status: IssueStatus.IN_PROGRESS,
    title: 'In progress',
    labelColor: theme.colors.green,
  },
  {
    status: IssueStatus.DONE,
    title: 'Done',
    labelColor: theme.colors.darkGreen,
  },
];

export const kanbanBoardList = [
  {
    title: 'To do',
    labelColor: theme.colors.todo,
    issues: [
      { id: '1', title: 'issue1' },
      { id: '2', title: 'issue2' },
    ],
  },
  { title: 'In progress', labelColor: theme.colors.inProgress },
  { title: 'Done', labelColor: theme.colors.done },
];
