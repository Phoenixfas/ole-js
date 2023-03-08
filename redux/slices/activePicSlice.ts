import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define pic state as an object with location, image, desc, content, and date
export interface Pic {
    id: any;
    location: string;
    image: string;
}

// define initial state
const initialState: Pic = {
    id: "",
    location: "",
    image: "",
};

// create slice
export const activePicSlice = createSlice({
    name: "activePic",
    initialState,
    reducers: {
        // define action to change active pic

        // @ts-ignore
        changeActivePic: (state, action: PayloadAction<Pic>) => {
            state.id = action.payload.id;
            state.location = action.payload.location;
            state.image = action.payload.image;
        },
    },
});


// export actions
export const { changeActivePic } = activePicSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActivePic = (state: RootState) => state.activePic;

// export reducer
export default activePicSlice.reducer;
