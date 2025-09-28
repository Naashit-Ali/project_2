import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
  isLogin: false,
  fcmToken: null,
  user: null,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    SaveFcmToken(state, action) {
      state.fcmToken = action.payload;
    },
    saveLoginUserData(state, action) {
      state.isLogin = true;
      state.accessToken = action.payload.data.token;
      state.user = action.payload.data.user;
    },
    saveUserData(state, action) {
      state.user = action.payload;
    },
    LogoutUserData(state, action) {
      state.isLogin = false;
      state.accessToken = '';
      state.user = null;
    },
  },
});

export const {
  SaveFcmToken,
  saveLoginUserData,
  saveUserData,
  LogoutUserData,
} = authSlice.actions;

export default authSlice.reducer;
