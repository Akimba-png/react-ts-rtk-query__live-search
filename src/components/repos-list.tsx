import { useGetUserRepoQuery } from './../store/reducers/search-api';
import { RepoItem } from './../components/repo-item';

type RepoListProps = {
  username: string,
}

function ReposList({username}: RepoListProps): JSX.Element {
  const { data: userRepos, isLoading } = useGetUserRepoQuery(username, ({skip: !username.length}));
  return (
    <>
      { isLoading && <p>Loading...</p> }
      { userRepos && !userRepos.length && <p className='text-lg'>Нет доступных репозиториев</p> }
      { userRepos && !!userRepos.length && <ul className='max-h-[255px] overflow-y-auto border rounded'>
        {userRepos.map((repo) => <RepoItem repo={repo} key={repo.id} />)}
      </ul> }
    </>
  );
}

export { ReposList };
