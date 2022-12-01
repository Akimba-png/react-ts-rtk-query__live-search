import { useGetUsersQuery } from './../store/reducers/search-api';
import { useDebounce } from './../hooks/use-debounce';
import { MouseEventHandler } from 'react';

type UsersListProps = {
  value: string,
  onUserNameClick: (login: string) => MouseEventHandler<HTMLLIElement> | undefined,
}

function UsersList({value, onUserNameClick}: UsersListProps): JSX.Element {
  const debounced = useDebounce(value);
  const { data: users, isLoading } = useGetUsersQuery(debounced, {
    skip: debounced.length < 3,
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {users && (
        <ul className='mb-[10px] max-h-[250px] overflow-y-auto border rounded'>
          {users.map((user) => {
            return (
              <li
                className='p-[4px] hover:bg-slate-100 cursor-pointer'
                key={user.id}
                onClick={onUserNameClick(user.login)}
              >
                {user.login}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export { UsersList };
