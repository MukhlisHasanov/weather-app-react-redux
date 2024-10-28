import Button from "components/Button/Button"

import { WeatherIconRain } from "assets"
import {
  PageWrapper,
  WeatherBar,
  MainBarBlock,
  WeatherContainer,
  WeatherCondition,
  Temperature,
  City,
  Icons,
  IconImg,
  ButtonContainer,
  StandardButton,
  Error,
  ErrorDetails,
} from "./styles"

import { useAppSelector, useAppDispatch } from "store/hooks"
import {
  weatherSliceActions,
  weatherSliceSelectors,
} from "store/redux/weatherAppSlice"
import { Weathers } from "store/redux/types"

function Weather() {
  const dispatch = useAppDispatch()

  const deleteAllWeatherCards = () => {
    dispatch(weatherSliceActions.deleteAllWeatherCards())
  }
  const { data } = useAppSelector(weatherSliceSelectors.weathers)

  const weatherCards = data.map((weather: Weathers) => {
    const deleteWeatherCard = () => {
      dispatch(weatherSliceActions.deleteWeatherCard({ id: weather.id }))
    }
    return (
      <WeatherBar>
        <MainBarBlock>
          <WeatherContainer>
            <WeatherCondition>
              <Temperature>{weather.temp}</Temperature>
              <City>{weather.name}</City>
            </WeatherCondition>
            <Icons>
              <IconImg src={weather.iconURL} alt=" Weather Icon"></IconImg>
              <IconImg src={weather.iconURL} alt=" Weather Icon"></IconImg>
              <IconImg src={weather.iconURL} alt=" Weather Icon"></IconImg>
            </Icons>
          </WeatherContainer>
        </MainBarBlock>
        <ButtonContainer>
          <StandardButton>
            <Button
              name="Delete"
              isStandardButton
              onClick={deleteWeatherCard}
            />
          </StandardButton>
        </ButtonContainer>
      </WeatherBar>
    )
  })

  return (
    <PageWrapper>
      {data.length > 0 ? weatherCards : <></>}

      <ButtonContainer>
        <Button
          name=" Delete all cards"
          onClick={deleteAllWeatherCards}
          isBlueButton
        />
      </ButtonContainer>
    </PageWrapper>
  )
}

export default Weather
