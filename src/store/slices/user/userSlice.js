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
      console.log('removeuser:::', action)
      console.log(state.list);
      action.payload.forEach(item => {
        // console.log(itemList.id, item)
        state.list = state.list.filter(itemList => itemList.id !== item )
      });
      console.log('state despues del for', state.list);
      // state.users.push(action.payload)
    },
    startLoadingUsers:(state)=> {
      state.startLoadingUsers = true
    },
    // getUsers: (state, action) => {
    //   return state.users
    // },
    // getUserConnected: (state, action) => {
    //   state.users.push(action.payload)
    // },
  },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser, startLoadingUsers } = usersSlice.actions
