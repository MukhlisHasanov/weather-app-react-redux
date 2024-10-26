export interface WeatherEntry {
  id: string;
  city: string;
  temperature: number;
}

export interface WeatherSliceInitialState {
  data: WeatherEntry[];
}

export const weatherInitialState: WeatherSliceInitialState = {
  data: [],
};