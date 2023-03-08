import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface PicModalToggleState {
  value: boolean;
}

// Define the initial state using that type
const initialState: PicModalToggleState = {
  value: false,
};

export const picModalToggleSlice = createSlice({
  name: "picModalToggle",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    togglePicModal: (state) => {
      state.value = !state.value;
    },
  },
});

export const { togglePicModal } = picModalToggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPicModalToggle = (state: RootState) => state.picModalToggle.value;

export default picModalToggleSlice.reducer;
