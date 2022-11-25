import { useGetUsersQuery } from './../store/reducers/search-api';

function MainPage(): JSX.Element {
  const { data } = useGetUsersQuery('Akimba');
  return (
    <h1>Main Page</h1>
  );
}

export { MainPage }
