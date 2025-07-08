import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Data } from "../types/data";

const initialState: Data = {
  address: "",
  location: "",
  timezone: "",
  isp: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setIPData: (_, action: PayloadAction<Data>) => {
      return action.payload;
    },
  },
});

export const { setIPData } = dataSlice.actions;

export default dataSlice.reducer;
