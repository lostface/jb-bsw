// TODO Repository.Id would be possible?
export type RepositoryId = number;

export interface Repository {
  id: RepositoryId;
  name: string;
  fullName: string;
  htmlUrl: string;
  description: string;
  stargazersCount: number;
  watchersCount: number;
  language: string;
  forksCount: number;
  openIssuesCount: number;
}

// TODO Issue.Id would be possible?
export type IssueId = number;

export interface Issue {
  id: IssueId;
  number: number;
  title: string;
  htmlUrl: string;
  userLogin: string;
  labels: string[];
  state: string;
  comments: number;
  createdAt: string;
}
