import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface TipModalToggleState {
  value: boolean;
}

// Define the initial state using that type
const initialState: TipModalToggleState = {
  value: false,
};

export const tipModalToggleSlice = createSlice({
  name: "tipModalToggle",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleTipModal: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleTipModal } = tipModalToggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTipModalToggle = (state: RootState) => state.tipModalToggle.value;

export default tipModalToggleSlice.reducer;
