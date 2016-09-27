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
