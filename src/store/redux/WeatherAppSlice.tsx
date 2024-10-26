import { createAppSlice } from "store/createAppSlice"
import { v4 } from "uuid"
import { PayloadAction } from "@reduxjs/toolkit"
import { WeatherSliceInitialState } from "./types"

export const weatherInitialState: WeatherSliceInitialState = {
  data: [],
  error: undefined,
  isFetching: false,
}

export const weatherSlice = createAppSlice({
  name: "WEATHER",
  initialState: weatherInitialState,
  reducers: create => ({
    getWeather: create.asyncThunk(
      async (_, { rejectWithValue }) => {
        const WEATHER_API_URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${APP_ID}`

        const response = await fetch(WEATHER_API_URL)

        const result = await response.json()

        if (response.ok) {
          return result
        } else {
          rejectWithValue(result)
        }
      },
      {
        pending: (state: WeatherSliceInitialState, action) => {
          ;(state.isFetching = true), (state.error = undefined)
        },
        fulfilled: (state: WeatherSliceInitialState, action) => {
          state.data = [
            ...state.data,
            {
              id: v4(),
              name: action.payload,
              city: action.payload,
              temperature: action.payload,
              image: action.payload,
            },
          ]
          state.isFetching = false
        },
        rejected: (state: WeatherSliceInitialState) => {
          state.error = ""
          state.isFetching = false
        },
      },
    ),
    deleteWeatherCard: create.reducer(
      (
        state: WeatherSliceInitialState,
        action: PayloadAction<{ id: string }>,
      ) => {
        state.data = state.data.filter(
          weatherInitialState => weatherInitialState.id !== action.payload.id,
        )
      },
    ),
    deleteAllWeatherCards: create.reducer(() => weatherInitialState),
  }),

  selectors: {
    weather: (state: WeatherSliceInitialState) => {
      return state.data
    },
  },
})

export const weatherSliceAction = weatherSlice.actions
export const weatherSliceSelectors = weatherSlice.selectors
