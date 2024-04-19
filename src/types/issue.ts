export type IssueDataType = Record<IssueStatus, Issue[]>;

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

export type IssueDispatchType = {
  updateIssue: (updated: Issue[]) => void;
};

export type updateIssueProps = {
  id: string;
  status: IssueStatus;
  title: string;
};

export type createIssueProps = {
  status: IssueStatus;
  title: string;
};
