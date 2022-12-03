import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AdaptedRepo } from '../../types/Repo';
import { StorageApi } from '../../utils';

type InitialState = {
  favorites: AdaptedRepo[],
};

const initialState: InitialState = {
  favorites: StorageApi.getItem() as AdaptedRepo[],
};

export const favoriteSlice = createSlice({
  name: 'favorite-reducer',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<AdaptedRepo>) => {
      state.favorites.push(action.payload);
      StorageApi.setItem(state.favorites);
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter((repo) => repo.id !== action.payload);
      StorageApi.setItem(state.favorites);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
