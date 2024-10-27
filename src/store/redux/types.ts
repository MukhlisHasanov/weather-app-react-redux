export interface Weather {
  id: string
  name: string
  temperature: string
  image: string
}

export interface WeatherSliceInitialState {
  [x: string]: any
  data: Weather[]
  error: undefined | string
  isFetching: boolean
}
