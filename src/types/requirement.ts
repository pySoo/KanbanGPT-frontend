export type Requirement = {
  id: string;
  issueId: string;
  title: string;
  isCompleted: boolean;
  gpt?: string;
};

export type CreateRequireProps = Pick<Requirement, 'issueId' | 'title'>;

export type UpdateRequireProps = Omit<Requirement, 'issueId'>;
