import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    username: "",
    password: "",
  },
  accountsLogin: [
    {
      id: 1,
      username: "admin",
      password: "123",
      action: { create: true, delete: true, update: true },
    },
  ],
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    dataCurrentAccount: (state, action) => {
      state.currentAccount.username = action.payload.username;
      state.currentAccount.password = action.payload.password;
    },
    createDataAccount: (state, action) => {
      if (
        state.accountsLogin.filter(
          (data) =>
            data.username === action.payload.username &&
            data.password === action.payload.password
        ).length === 0
      ) {
        state.accountsLogin.push(action.payload);
      }
    },
    decentralizationActionCreate: (state, action) => {
      const account = state.accountsLogin.find(
        (data) => data.id === action.payload.id
      );
      account.action.create = action.payload.value;
    },
    decentralizationActionDelete: (state, action) => {
      const account = state.accountsLogin.find(
        (data) => data.id === action.payload.id
      );
      account.action.delete = action.payload.value;
    },
    decentralizationActionUpdate: (state, action) => {
      const account = state.accountsLogin.find(
        (data) => data.id === action.payload.id
      );
      account.action.update = action.payload.value;
    },
    deleteDataAccount: (state, action) => {
      const newState = state.accountsLogin.filter(
        (data) => data.id !== action.payload
      );
      state.accountsLogin = newState;
    },
  },
});

export const {
  dataCurrentAccount,
  createDataAccount,
  decentralizationActionCreate,
  decentralizationActionDelete,
  decentralizationActionUpdate,
  deleteDataAccount,
} = loginSlice.actions;

export default loginSlice.reducer;
