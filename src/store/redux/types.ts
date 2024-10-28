export interface Weathers {
  id: string
  name: string
  temp: string
  iconURL: string
}

export interface TemporaryData {
  name: string
  temp: string
  iconURL: string
}

export interface WeatherSliceInitialState {
  data: Weathers[]
  error: undefined | ErrorMessage
  isFetching: boolean
  temporaryWeatherData: undefined | TemporaryData
}

export interface ErrorMessage {
  cod: string
  message: string
}
