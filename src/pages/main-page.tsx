import { useGetUsersQuery } from './../store/reducers/search-api';

function MainPage(): JSX.Element {
  const { data } = useGetUsersQuery('Akimba');
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
           />
          </label>
        </form>
        <ul className='max-h-[420px] overflow-y-auto border rounded'>
          <li className='p-[4px] hover:bg-slate-100 cursor-pointer'>test</li>
        </ul>
      </section>
    </main>
  );
}

export { MainPage };
