// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from "../store";

// Define a type for the slice state
interface InitHeroToggleState {
  value: boolean;
}

// Define the initial state using that type
const initialState: InitHeroToggleState = {
  value: true,
};

export const initHeroToggleSlice = createSlice({
  name: "initHeroToggle",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleInitHero: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

// setup redux-persist to only persist the value of the slice
// const persistConfig = {
//   key: "initHeroToggle",
//   storage,
//   whitelist: ["value"],
// };

export const { toggleInitHero } = initHeroToggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectinitHeroToggle = (state: RootState) => state.initHeroToggle.value;

export default initHeroToggleSlice.reducer;
