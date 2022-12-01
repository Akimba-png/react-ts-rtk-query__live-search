import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { searchApi } from './reducers/search-api';
import { favoriteSlice } from './reducers/favorite-slice';

export const store = configureStore({
  reducer: {
    [searchApi.reducerPath]: searchApi.reducer,
    [favoriteSlice.name]: favoriteSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(searchApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
