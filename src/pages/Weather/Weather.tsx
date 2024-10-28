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
} from "./styles"

import { useAppSelector, useAppDispatch } from "store/hooks"
import { weatherSliceSelectors } from "store/redux/WeatherAppSlice"
import { Weathers } from "store/redux/types"

function Weather() {
  // const dispatch = useAppDispatch()

  // const weatherInitialState = useAppSelector(weatherSliceSelectors.weathers)
  // const weatherCards = weatherInitialState.map((weather: Weathers) => {
  //   return (
  //     <PageWrapper>
  //       <WeatherContainer>
  //         <CardLabel>
  //           <LabelName>City:</LabelName>
  //           <CardItem>{weather.name}</CardItem>
  //         </CardLabel>
  //         <CardLabel>
  //           <LabelName>Temp:</LabelName>
  //           <CardItem>{weather.temperature}</CardItem>
  //         </CardLabel>
  //         <CardLabel>
  //           <LabelName>IMG:</LabelName>
  //           <CardItem>{weather.image}</CardItem>
  //         </CardLabel>
  //         <CardLabel>
  //           <LabelName>ID:</LabelName>
  //           <CardItem>{weather.id}</CardItem>
  //         </CardLabel>
  //       </WeatherContainer>
  //     </PageWrapper>
  //   )
  // })
  //   return (
  //     <PageWrapper>
  //       <CardsPosition>{weatherCards}</CardsPosition>
  //     </PageWrapper>
  //   )
  // }

  return (
    <PageWrapper>
      <WeatherBar>
        <MainBarBlock>
          <WeatherContainer>
            <WeatherCondition>
              <Temperature>18.0</Temperature>
              <City>Colrado</City>
            </WeatherCondition>
            <Icons>
              <IconImg src={WeatherIconRain} alt=" Weather Icon"></IconImg>
            </Icons>
          </WeatherContainer>
        </MainBarBlock>
        <ButtonContainer>
          <StandardButton>
            <Button name="Save" isStandardButton />
          </StandardButton>
          <StandardButton>
            <Button name="Delete" isStandardButton />
          </StandardButton>
        </ButtonContainer>
      </WeatherBar>

      <ButtonContainer>
        <Button
          name=" Delete all cards"
          // onClick={}
          isBlueButton
        />
      </ButtonContainer>
    </PageWrapper>
  )
}

export default Weather
