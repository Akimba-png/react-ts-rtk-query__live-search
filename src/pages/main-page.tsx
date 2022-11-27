import { useState, ChangeEvent } from 'react';
import { UsersList } from './../components/users-list';
import { ReposList } from './../components/repos-list';

function MainPage(): JSX.Element {

  const [ search, setSearch ] = useState<string>('');
  const [ username, setUsername ] = useState<string>('');
  const [ isUserListOpen, setUserListStatus ] = useState<boolean>(false);
  const [ isRepoListOpen, setRepoListStatus ] = useState<boolean>(false);

  const searchChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearch(evt.target.value);
    if (evt.target.value.length === 0) {
      setRepoListStatus(false);
      setUserListStatus(false);
    } else {
      setUserListStatus(true);
    }
  };

  const usernameClickHandler = (username: string) => () => {
    setUsername(username);
    setRepoListStatus(true);
  };

  return (
    <main className='pt-[50px] h-[calc(100vh_-_79px)]'>
      <h1 className='mb-[40px] text-center font-bold text-2xl'>User search service</h1>
      <section className='w-[540px] mx-auto'>
        <form className='mb-2'>
          <label className='flex items-center gap-2'>
            search here:
            <input
              className='grow py-1 px-2 h-[42px] rounded border bg-slate-100 text-gray-500'
              type='text'
              placeholder='type something'
              value={search}
              onChange={searchChangeHandler}
           />
          </label>
        </form>
        { isUserListOpen && <UsersList value={search} onUserNameClick={usernameClickHandler} />}
        { isRepoListOpen && <ReposList username={username} />}
      </section>
    </main>
  );
}

export { MainPage };
