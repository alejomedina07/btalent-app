import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
// import { getUsers } from '../slices/user/thunks.js';


export const userApi = createApi({

  reducerPath: 'users',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api'
  }),

  endpoints( build ) {
    getUsers: build.query({
      query: ()=> `/users`
    })
  }

})



export const { useGetUsersQuery } = userApi;

