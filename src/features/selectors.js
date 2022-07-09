import { createSelector } from "@reduxjs/toolkit";

export const currentAccountSelector = (state) => state.login.currentAccount;
export const accountsListSelector = (state) => state.login.accountsLogin;

// select ra obj trong accountsListSelector trung voi currentAccountSelector
export const currentObjAccountSelector = createSelector(
  currentAccountSelector,
  accountsListSelector,
  (currentAccount, accountList) => {
    return accountList.find(
      (data) =>
        data.username === currentAccount.username &&
        data.password === currentAccount.password
    );
  }
);

export const dataManagerSelector = (state) => state.manager.managerStudent;
