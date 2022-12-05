import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userConnected: null,
    authenticated: false
  },
  reducers: {
    login: (state, action) => {
      state.userConnected = action.payload
      state.authenticated = true;
    },
    logout: (state) => {
      state.userConnected = null;
      state.authenticated = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions
