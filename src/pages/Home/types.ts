export enum WEATHER_INPUT_FORM_NAMES {
  NAME = "city-name",
}

export interface WeatherFormValues {
  id: string
  name: string
  main: string
  weather: string
}
