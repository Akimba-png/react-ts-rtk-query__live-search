import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/navigation/navigation';
import { MainPage } from './pages/main-page';
import { FavoritesPage } from './pages/favorites-page';
import { NotFoundPage } from './pages/not-found-page';
import { AppRoute } from './const';

function App(): JSX.Element {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={AppRoute.MainPage} element={<MainPage />} />
        <Route path={AppRoute.FavoritesPage} element={<FavoritesPage />} />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
