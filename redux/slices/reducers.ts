import { combineReducers } from "@reduxjs/toolkit";
import initHeroToggleReducer from "./initHeroToggleSlice";
import tipModalToggleReducer from "./tipModalToggleSlice";
import picModalToggleReducer from "./picModalToggleSlice"
import activeTipReducer from "./activeTipSlice";
import activePicReducer from "./activePicSlice";
import headerColorToggleReducer from "./headerColorToggleSlice";
import activeFacilReducer from "./activeFacilSlice";
import facilModalToggleReducer from "./facilModalToggleSlice";

export const rootReducer = combineReducers({
  initHeroToggle: initHeroToggleReducer,
  tipModalToggle: tipModalToggleReducer,
  picModalToggle: picModalToggleReducer,
  activeTip: activeTipReducer,
  activePic: activePicReducer,
  headerColorToggle: headerColorToggleReducer,
  activeFacil: activeFacilReducer,
  facilModalToggle: facilModalToggleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
