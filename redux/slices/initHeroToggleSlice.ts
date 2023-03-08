import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
const persistConfig = {
  key: "initHeroToggle",
  storage,
  whitelist: ["value"],
};

export const { toggleInitHero } = initHeroToggleSlice.actions;

const persistedMySlice = persistReducer(persistConfig, initHeroToggleSlice.reducer);

export default persistedMySlice;
