import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define tip state as an object with name, description, desc, content, and date
export interface Tip {
    id: any;
    name: string;
    description: string;
}

// define initial state
const initialState: Tip = {
    id: "",
    name: "",
    description: "",
};

// create slice
export const activeTipSlice = createSlice({
    name: "activeTip",
    initialState,
    reducers: {
        // define action to change active tip

        // @ts-ignore
        changeActiveTip: (state, action: PayloadAction<Tip>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.description = action.payload.description;
        },
    },
});


// export actions
export const { changeActiveTip } = activeTipSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActiveTip = (state: RootState) => state.activeTip;

// export reducer
export default activeTipSlice.reducer;
