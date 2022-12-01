import { Repo } from '../types/Repo';
import { FavoriteButton } from './favorite-button';

type RepoItemProps = {
  repo: Repo,
}

function RepoItem({repo}: RepoItemProps): JSX.Element {
  return (
    <li className='mb-[4px] p-[4px] pb-[6px] border'>
      <a className='mb-[6px] block' href={repo.html_url} target='_blank'>
        <h2 className='mb-[2px] text-lg font-bold'>{repo.name}</h2>
        <p>
          Forks: <span className='font-bold'>{repo.forks_count}</span>
          &nbsp;
          Watchers: <span className='font-bold'>{repo.watchers_count}</span>
        </p>
        <p className='italic'>{repo.description}</p>
      </a>
      <FavoriteButton repo={repo} />
    </li>
  );
}

export { RepoItem }
