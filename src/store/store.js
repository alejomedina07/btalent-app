import { configureStore } from '@reduxjs/toolkit'

import { usersSlice } from './slices/user/userSlice.js';
import { authSlice } from './slices/auth/authSlice.js';


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    users: usersSlice.reducer
  },
})