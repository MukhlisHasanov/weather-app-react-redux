import {
  CardWrapper,
  CardLabel,
  CardItem,
  UsersNotFound,
  PageWrapper,
  ButtonControl,
  LabelName,
  CardsPosition,
} from "./styles"

import { useAppSelector, useAppDispatch } from "store/hooks"
import {
  weatherSliceSelectors,
  weatherSliceActions,
} from "store/redux/WeatherAppSlice"
import { Weather } from "store/redux/types"

function Weathers() {
  const dispatch = useAppDispatch()

  const weatherInitialState = useAppSelector(weatherSliceSelectors.weathers)
  const weatherCards = weatherInitialState.map((weather: Weather) => {
    return (
      <PageWrapper>
        <CardWrapper>
          <CardLabel>
            <LabelName>City:</LabelName>
            <CardItem>{weather.name}</CardItem>
          </CardLabel>
          <CardLabel>
            <LabelName>Temp:</LabelName>
            <CardItem>{weather.temperature}</CardItem>
          </CardLabel>
          <CardLabel>
            <LabelName>IMG:</LabelName>
            <CardItem>{weather.image}</CardItem>
          </CardLabel>
          <CardLabel>
            <LabelName>ID:</LabelName>
            <CardItem>{weather.id}</CardItem>
          </CardLabel>
        </CardWrapper>
      </PageWrapper>
    )
  })
  return (
    <PageWrapper>
      <CardsPosition>{weatherCards}</CardsPosition>
    </PageWrapper>
  )
}

export default Weathers
