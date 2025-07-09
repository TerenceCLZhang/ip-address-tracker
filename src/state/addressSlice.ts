import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  address: "",
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
  },
});

export const { setAddress } = addressSlice.actions;

export default addressSlice.reducer;
