import { Repo } from './types/Repo';

export const adaptRepoToClient = (repo: Repo) => ({
  id: repo.id,
  name: repo.name,
  forksCount: repo.forks_count,
  watchersCount: repo.watchers_count,
  htmlUrl: repo.html_url,
  description: repo.description,
});
