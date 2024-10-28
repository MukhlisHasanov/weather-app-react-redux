import { createAppSlice } from "store/createAppSlice"
import { v4 } from "uuid"
import { PayloadAction } from "@reduxjs/toolkit"
import { ErrorMessage, WeatherSliceInitialState } from "./types"
import { WeatherFormValues } from "pages/Home/types"
import { WEATHER_INPUT_FORM_NAMES } from "pages/Home/types"

export const weatherInitialState: WeatherSliceInitialState = {
  data: [],
  error: undefined,
  isFetching: false,
  temporaryWeatherData: undefined,
}

export const weatherSlice = createAppSlice({
  name: "WEATHER",
  initialState: weatherInitialState,
  reducers: create => ({
    getWeather: create.asyncThunk<WeatherFormValues, { name: string }>(
      async ({ name }, { rejectWithValue }) => {
        const APP_ID = "9ebdcf15d86c960f135c3ffd7e10de48"
        const WEATHER_API_URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${APP_ID}`

        const response = await fetch(WEATHER_API_URL)

        const result = await response.json()

        if (response.ok) {
          return result
        } else {
          rejectWithValue(result)
        }
      },
      {
        pending: (state: WeatherSliceInitialState) => {
          state.isFetching = true
          state.error = undefined
        },
        fulfilled: (
          state: WeatherSliceInitialState,
          action: PayloadAction<any>,
        ) => {
          const iconId = action.payload.weather[0].icon
          const iconURL = `http://openweathermap.org/img/w/${iconId}.png`

          state.temporaryWeatherData = {
            name: action.payload.name,
            temp: action.payload.main.temp,
            iconURL: iconURL,
          }
          state.isFetching = false
        },
        rejected: (
          state: WeatherSliceInitialState,
          action: PayloadAction<ErrorMessage>,
        ) => {
          if (state.error !== undefined) {
            state.error = {
              cod: action.payload.cod,
              message: action.payload.message,
            }
          }
          state.error = undefined
          state.isFetching = false
        },
      },
    ),

    saveTemporaryWeatherData: create.reducer(
      (state: WeatherSliceInitialState) => {
        if (state.temporaryWeatherData !== undefined) {
          state.data = [
            ...state.data,
            { ...state.temporaryWeatherData, id: v4() },
          ]
          state.temporaryWeatherData = undefined
        }
      },
    ),

    deleteTemporaryWeatherData: create.reducer(
      (state: WeatherSliceInitialState) => {
        state.temporaryWeatherData = undefined
      },
    ),

    deleteWeatherCard: create.reducer(
      (
        state: WeatherSliceInitialState,
        action: PayloadAction<{ id: string }>,
      ) => {
        state.data = state.data.filter(
          weatherCard => weatherCard.id !== action.payload.id,
        )
      },
    ),
    deleteAllWeatherCards: create.reducer(() => weatherInitialState),
  }),

  selectors: {
    weathers: (state: WeatherSliceInitialState) => state,
  },
})

export const weatherSliceActions = weatherSlice.actions
export const weatherSliceSelectors = weatherSlice.selectors
