import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AdaptedRepo } from '../../types/Repo';

type InitialState = {
  favorites: AdaptedRepo[],
};

const initialState: InitialState = {
  favorites: [] as AdaptedRepo[],
};

export const favoriteSlice = createSlice({
  name: 'favorite-reducer',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<AdaptedRepo>) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter((repo) => repo.id !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
