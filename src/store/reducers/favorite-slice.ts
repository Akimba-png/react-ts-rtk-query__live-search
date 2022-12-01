import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Repo } from '../../types/Repo';

type InitialState = Repo[];
const initialState = [] as InitialState

export const favoriteSlice = createSlice({
  name: 'favorite-reducer',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Repo>) => [...state, action.payload ],
    removeFromFavorites: (state, action: PayloadAction<Repo>) => state.filter((e) => e.id !== action.payload.id),
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
