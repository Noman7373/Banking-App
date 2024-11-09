import { createSlice } from "@reduxjs/toolkit";

let allTransactionS = JSON.parse(localStorage.getItem("BankStore")) || [];
const storeSlice = createSlice({
  name: "BankStore",
  initialState: {
    bankTransaction: allTransactionS,
  },

  reducers: {
    submitTransaction(state, action) {
      let userTransation = action.payload;
      let existTransaction = state.bankTransaction.find(
        (payment) => payment.title === userTransation.title
      );
      if (existTransaction) {
        existTransaction.amount += userTransation.amount;
      } else {
        state.bankTransaction.push({ ...userTransation });
      }
      localStorage.setItem("BankStore", JSON.stringify(state.bankTransaction));
    },
  },
});

export const { submitTransaction } = storeSlice.actions;
export default storeSlice.reducer;
