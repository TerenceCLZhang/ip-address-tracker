import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import addressReducer from "./addressSlice";
import errorReducer from "./errorSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    address: addressReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
