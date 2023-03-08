import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define facil state as an object with name, descs, desc, content, and date
export interface Facil {
    id: any;
    name: string;
    descs: {
        name: string;
        description: string;
    }[];
}

// define initial state
const initialState: Facil = {
    id: "",
    name: "",
    descs: [],
};

// create slice
export const activeFacilSlice = createSlice({
    name: "activeFacil",
    initialState,
    reducers: {
        // define action to change active facil

        // @ts-ignore
        changeActiveFacil: (state, action: PayloadAction<Facil>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.descs = action.payload.descs;
        },
    },
});


// export actions
export const { changeActiveFacil } = activeFacilSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActiveFacil = (state: RootState) => state.activeFacil;

// export reducer
export default activeFacilSlice.reducer;
