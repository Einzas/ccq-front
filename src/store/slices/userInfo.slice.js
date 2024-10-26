import { createSlice } from '@reduxjs/toolkit';
import { axiosCCQ } from '../../utils/configAxios';
const initialState = {
  token: '',
  user: null,
};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: JSON.parse(localStorage.getItem('userInfo')) ?? initialState,
  reducers: {
    setUserInfo: (state, action) => {
      const newState = { ...state, ...action.payload };
      localStorage.setItem('userInfo', JSON.stringify(newState));
      return newState;
    },
    logOut: (state) => {
      const newState = { ...state, ...initialState };
      localStorage.removeItem('userInfo');
      localStorage.removeItem('user_name');
      return newState;
    },
  },
});

export const { setUserInfo, logOut } = userInfoSlice.actions;

export const loginUser = (data) => (dispatch) => {
  axiosCCQ
    .post('auth/login', data)
    .then((response) => {
      dispatch(setUserInfo(response.data));
      window.location.href = '/dashboard';
    })
    .catch((error) => {
      console.log(error);
    });
};

export const registerUser = (data) => (dispatch) => {
  axiosCCQ
    .post('auth/signup', data)
    .then((response) => {
      dispatch(setUserInfo(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const loginOut = () => (dispatch) => {
  dispatch(logOut());
  window.location.href = '/login';
};

export default userInfoSlice.reducer;
