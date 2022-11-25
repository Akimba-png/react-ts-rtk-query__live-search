import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User, SearchResponse } from '../../types/User';
import { ApiRoute } from '../../const';

const BASE_URL = 'https://api.github.com/';
const ITEMS_COUNT = 10;

export const searchApi = createApi({
  reducerPath: 'data/search',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], string>({
      query: (username) => ({
        url: ApiRoute.SearchUsers,
        params: {
          q: username,
          per_page: ITEMS_COUNT,
        },
      }),
      transformResponse: (response: SearchResponse<User>) => {
        return response.items;
      }
    })
  }),
});

export const { useGetUsersQuery } = searchApi;
