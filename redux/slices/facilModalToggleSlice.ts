import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface FacilModalToggleState {
  value: boolean;
}

// Define the initial state using that type
const initialState: FacilModalToggleState = {
  value: false,
};

export const facilModalToggleSlice = createSlice({
  name: "facilModalToggle",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleFacilModal: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleFacilModal } = facilModalToggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectFacilModalToggle = (state: RootState) => state.facilModalToggle.value;

export default facilModalToggleSlice.reducer;
