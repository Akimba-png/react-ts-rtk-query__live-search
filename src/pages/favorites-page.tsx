import { RepoItem } from '../components/repo-item';
import { useAppSelector } from './../store/store';

function FavoritesPage(): JSX.Element {
  const favorites = useAppSelector((state) => state['favorite-reducer'].favorites);
  return (
    <main className='pt-[50px] h-[calc(100vh_-_79px)]'>
      <h1 className='mb-[40px] text-center font-bold text-2xl'>Избранные репозитории</h1>
      <section className='w-[540px] mx-auto'>
        {!favorites.length && <p>Нет избранных репозиториев</p>}
        <ul>
          {
            favorites.map((item) => <RepoItem repo={item}/>)
          }
        </ul>
      </section>
    </main>
  );
}

export { FavoritesPage };
