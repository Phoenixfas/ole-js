import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from "../store";

// Define a type for the slice state
interface HeaderColorToggleState {
  value: boolean;
}

// Define the initial state using that type
const initialState: HeaderColorToggleState = {
  value: true,
};

export const headerColorToggleSlice = createSlice({
  name: "headerColorToggle",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleHeaderColor: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});


export const { toggleHeaderColor } = headerColorToggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectHeaderColorToggle = (state: RootState) => state.headerColorToggle.value;

export default headerColorToggleSlice.reducer;
