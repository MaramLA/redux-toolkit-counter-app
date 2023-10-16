import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./components/counter/counterSlice";
import counterSlice from "./components/counter/counterSlice";

export type RootState = {
    counterR:ReturnType<typeof counterSlice>
}

export const store = configureStore({
  reducer: {
    counterR: counterReducer,
  },
});
