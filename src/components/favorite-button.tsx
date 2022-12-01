import { Repo } from '../types/Repo';
import { useAppSelector, useAppDispatch } from './../store/store';
import { addToFavorites, removeFromFavorites } from './../store/reducers/favorite-slice';

type FavoriteButtonProps = {
  repo: Repo,
}
function FavoriteButton({repo}: FavoriteButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector((state) => state['favorite-reducer']).includes(repo);
  if (isFavorite) {
    return (
      <button
        className='px-[10px] py-[2px] border border-blue-500 rounded text-blue-500'
        onClick={() => dispatch(removeFromFavorites(repo))}
      >
        Удалить из избранного
      </button>
    );
  }
  return (
    <button
      className='px-[10px] py-[2px] border rounded bg-blue-500 text-white'
      onClick={() => dispatch(addToFavorites(repo))}
    >
      В избранное
    </button>
  );
}

export { FavoriteButton };
