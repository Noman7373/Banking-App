import { createSlice } from "@reduxjs/toolkit";

let allTransaction = [];

try {
  allTransaction = JSON.parse(localStorage.getItem("BankStore")) || [];
} catch (error) {
  console.error("Error parsing data from localStorage:", error);
}

const storeSlice = createSlice({
  name: "BankStore",
  initialState: {
    bankTransaction: allTransaction,
  },

  reducers: {
    submitTransaction(state, action) {
      let userTransaction = action.payload;

      state.bankTransaction.push({ ...userTransaction });
      try {
        localStorage.setItem(
          "BankStore",
          JSON.stringify(state.bankTransaction)
        );
      } catch (error) {
        console.error("Error saving to localStorage:", error);
      }
    },
  },
});

export const { submitTransaction } = storeSlice.actions;
export default storeSlice.reducer;
