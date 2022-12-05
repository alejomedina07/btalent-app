import { startLoadingUsers } from './userSlice.js';


export const getUsers = () => {
  return async ( dispatch, getState)=> {
    dispatch( startLoadingUsers() )
  }
}