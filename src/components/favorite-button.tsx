import { AdaptedRepo } from '../types/Repo';
import { useAppSelector, useAppDispatch } from './../store/store';
import { addToFavorites, removeFromFavorites } from './../store/reducers/favorite-slice';

type FavoriteButtonProps = {
  repo: AdaptedRepo,
}
function FavoriteButton({repo}: FavoriteButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state['favorite-reducer'].favorites);
  const isFavorite = favorites.some((favRepo) => favRepo.id === repo.id)

  if (isFavorite) {
    return (
      <button
        className='px-[10px] py-[2px] border border-blue-500 rounded text-blue-500'
        onClick={() => dispatch(removeFromFavorites(repo.id))}
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
