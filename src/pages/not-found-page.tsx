import { Link } from 'react-router-dom';
import AppRoute from '../const';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <h1>Page not found</h1>
      <Link to={AppRoute.MainPage}>Back to Main Page</Link>
    </>
  );
}

export { NotFoundPage };
