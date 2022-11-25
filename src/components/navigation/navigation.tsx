import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Navigation(): JSX.Element {
  return (
    <div className='grid grid-cols-[195px_1fr] items-center min-h-[70px] p-6 text-white bg-blue-800'>
      <Link className='font-bold text-xl' to={AppRoute.MainPage}>Live Search</Link>
      <div className='flex flex-wrap gap-4 justify-self-end'>
        <Link to={AppRoute.MainPage}>Main</Link>
        <Link to={AppRoute.FavoritesPage}>Favorites</Link>
      </div>
    </div>
  );
}

export { Navigation };
