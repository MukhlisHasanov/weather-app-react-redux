export interface Weathers {
  id: string
  name: string
  temperature: string
  image: string
}

export interface TemporaryData {
  name: string
  temp: string
  iconURL: string
}

export interface WeatherSliceInitialState {
  data: Weathers[]
  error: undefined | string
  isFetching: boolean
  temporaryWeatherData: undefined | TemporaryData
}
