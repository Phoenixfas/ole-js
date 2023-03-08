import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define tour state as an object with name, image, desc, content, and date
export interface Tour {
    id: any;
    name: any;
    mainName: any;
    description: any;
    image: any;
    activities: any;
    nb: any;
    included: any;
    notIncluded: any;
}

// define initial state
const initialState: Tour = {
    id: "",
    name: "",
    mainName: "",
    description: "",
    image: "",
    activities: "",
    nb: "",
    included: "",
    notIncluded: "",
};

// create slice
export const activeTourSlice = createSlice({
    name: "activeTour",
    initialState,
    reducers: {
        // define action to change active tour

        // @ts-ignore
        changeActiveTour: (state, action: PayloadAction<Tour>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.mainName = action.payload.mainName;
            state.description = action.payload.description;
            state.image = action.payload.image;
            state.activities = action.payload.activities;
            state.nb = action.payload.nb;
            state.included = action.payload.included;
            state.notIncluded = action.payload.notIncluded;
        },
    },
});


// export actions
export const { changeActiveTour } = activeTourSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectActiveTour = (state: RootState) => state.activeTour;

// export reducer
export default activeTourSlice.reducer;
