/*import { createAppSlice } from "store/createAppSlice"
// import { EmployeeSliceInitialState } from "./types"
import { v4 } from "uuid"
import { PayloadAction } from "@reduxjs/toolkit"
import { WeatherSliceInitialState } from "./types";
// import { EmployeeFormValues } from "pages/EmployeeApp/components/EmployeeForm/types"

const weatherInitialState: WeatherSliceInitialState = {
    data: [],
  };

 export const weatherAppSlice = createAppSlice(
   {
   name: "WEATHER",
   initialState: weatherInitialState,
   reducers: //(create) => (
   {
    addWeatherEntry: // create.reducer(
        addWeatherEntry: (state, action: PayloadAction<{ city: string; temperature: number }>) => {
            state.data.push({ ...action.payload, id: uuidv4() });
   //  (state, action: PayloadAction<{ city: string; temperature: number }>) => {
  //  state.data.push({ ...action.payload, id: uuidv4() });
}
    ),
    removeWeatherEntry: create.reducer(
        (state, action: PayloadAction<{ id: string }>) => {
          state.data = state.data.filter(
            (entry) => entry.id !== action.payload.id
          );
        }
      ),
    }),
    selectors: {
      getWeatherEntries: (state) => state.data,
    },
  });



  export const weatherAppActions = weatherAppSlice.actions;
  export const weatherAppSelectors = weatherAppSlice.selectors;
  */

  import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { WeatherSliceInitialState } from "./types";




const weatherInitialState: WeatherSliceInitialState = {
  data: [],
};

export const weatherAppSlice = createSlice({
  name: "WEATHER",

  initialState: weatherInitialState,
  reducers: {

    addWeatherEntry: (state, action: PayloadAction<{ city: string; temperature: number }>) => {
      state.data.push(
        { ...action.payload, id: uuidv4() }
    );
    },

    removeWeatherEntry:
     (state, action: PayloadAction<{ id: string }>) => {
      state.data = state.data.filter(


        (entry) => entry.id !== action.payload.id
      );
    },
  },


});

export const weatherAppActions = weatherAppSlice.actions;
export const weatherAppSelectors = {
  getWeatherEntries: (state: WeatherSliceInitialState) => state.data,
};
