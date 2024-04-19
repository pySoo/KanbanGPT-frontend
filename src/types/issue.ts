export type IssueData = Record<IssueStatus, Issue[]>;

export enum IssueStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export type Issue = {
  status: IssueStatus;
  id: string;
  title: string;
};

export type UpdateIssueProps = Issue;
export type CreateIssueProps = Omit<Issue, 'id'>;
export type DeleteIssueProps = Omit<Issue, 'title'>;
