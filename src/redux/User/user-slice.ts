import { createSlice } from "@reduxjs/toolkit";

interface User {
  user: string;
  email: string;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    //primeira action
    login: (state, action) => {
      state.user = action.payload;
    },
    //segunda action
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
