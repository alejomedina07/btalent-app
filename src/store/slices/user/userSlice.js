import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    startLoadingUsers: false
  },
  reducers: {
    addUser: (state, action) => {
      state.list.push(action.payload)
    },
    removeUser: (state, action) => {
      action.payload.forEach(item => {
        state.list = state.list.filter(itemList => itemList.id !== item )
      });
    },
    startLoadingUsers:(state)=> {
      state.startLoadingUsers = true
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser, startLoadingUsers } = usersSlice.actions
