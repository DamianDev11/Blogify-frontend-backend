import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
    posts:null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAllPosts:(state,action) =>{
      state.posts = action.payload;
    },
    clearAuth: (state) => {
      state.token = null;
      state.user = null;
      state.posts =null;
    },
  },
});



export const { setToken, setUser,setAllPosts, clearAuth } = authSlice.actions;
export const selectToken = (state) => state.auth.token;
export const selectUser = (state) => state.auth.user;
export const selectAllPosts = (state) => state.auth.posts;

export default authSlice.reducer;
