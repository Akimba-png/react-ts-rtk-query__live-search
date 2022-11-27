import { useGetUserRepoQuery } from './../store/reducers/search-api';

type RepoListProps = {
  username: string,
}

function ReposList({username}: RepoListProps): JSX.Element {
  const { data: userRepos, isLoading } = useGetUserRepoQuery(username, ({skip: !username.length}));
  return (
    <>
    { isLoading && <p>Loading...</p> }
    { userRepos && <ul className="max-h-[250px] overflow-y-auto border rounded">
      {userRepos.map((repo) => (
        <li key={repo.id}>
          <a href={repo.html_url} target="_blank">
            {repo.name}
          </a>
        </li>
      ))}
    </ul> }
    </>
  );
}

export { ReposList };
