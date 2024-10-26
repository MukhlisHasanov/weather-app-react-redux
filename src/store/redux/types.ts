export interface Weather {
  id: string
  name: string
  city: string
  temperature: string
  image: string
}

export interface WeatherSliceInitialState {
  data: Weather[]
  error: undefined | string
  isFetching: boolean
}
