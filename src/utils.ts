import { AdaptedRepo, Repo } from './types/Repo';
import { FAVORITE_KEY } from './const';

export const adaptRepoToClient = (repo: Repo) => ({
  id: repo.id,
  name: repo.name,
  forksCount: repo.forks_count,
  watchersCount: repo.watchers_count,
  htmlUrl: repo.html_url,
  description: repo.description,
});

export class StorageApi {
  static getItem() {
    return JSON.parse(localStorage.getItem(FAVORITE_KEY) ?? '[]');
  }

  static setItem(items: AdaptedRepo[]) {
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(items));
  }
}
