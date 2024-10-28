import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup"

import Input from "components/Input/Input"
import Button from "components/Button/Button"

import { APP_ROUTES } from "constants/routes"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { WeatherIconRain } from "assets"
import {
  weatherSliceActions,
  weatherSliceSelectors,
} from "store/redux/weatherAppSlice"

import {
  PageWrapper,
  SearchForm,
  InputContainer,
  SearchButtonContainer,
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
import { WEATHER_INPUT_FORM_NAMES } from "./types"
function HomePage() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { data, error, isFetching, temporaryWeatherData } = useAppSelector(
    weatherSliceSelectors.weathers,
  )

  const formik = useFormik({
    initialValues: {
      [WEATHER_INPUT_FORM_NAMES.NAME]: "",
    },

    onSubmit: values => {
      dispatch(
        weatherSliceActions.getWeather({
          name: values[WEATHER_INPUT_FORM_NAMES.NAME],
        }),
      )
    },
  })

  const saveWeatherCard = () => {
    dispatch(weatherSliceActions.saveTemporaryWeatherData(temporaryWeatherData))
    navigate(APP_ROUTES.WEATHER)
  }

  const deleteTemporaryWeatherCard = () => {
    dispatch(weatherSliceActions.deleteTemporaryWeatherData())
  }

  return (
    <PageWrapper>
      <SearchForm onSubmit={formik.handleSubmit}>
        <InputContainer>
          <Input
            id="search-city"
            name={WEATHER_INPUT_FORM_NAMES.NAME}
            placeholder="Enter city"
            onChange={formik.handleChange}
            value={formik.values[WEATHER_INPUT_FORM_NAMES.NAME]}
          />
        </InputContainer>
        <SearchButtonContainer>
          <Button type="submit" name="Search" isBlueButton />
        </SearchButtonContainer>
      </SearchForm>
      <WeatherBar>
        <MainBarBlock>
          <WeatherContainer>
            <WeatherCondition>
              <Temperature>{temporaryWeatherData?.temp}</Temperature>
              <City>{temporaryWeatherData?.name}</City>
            </WeatherCondition>
            <Icons>
              <IconImg
                src={temporaryWeatherData?.iconURL}
                alt=" Weather Icon"
              ></IconImg>
            </Icons>
          </WeatherContainer>
        </MainBarBlock>
        <ButtonContainer>
          <StandardButton>
            <Button name="Save" isStandardButton onClick={saveWeatherCard} />
          </StandardButton>
          <StandardButton>
            <Button
              name="Delete"
              isStandardButton
              onClick={deleteTemporaryWeatherCard}
            />
          </StandardButton>
        </ButtonContainer>
      </WeatherBar>

      <WeatherBar>
        <MainBarBlock>
          <Error>API Error</Error>
          <ErrorDetails>Something went wrong with API data</ErrorDetails>
        </MainBarBlock>
        <ButtonContainer>
          <StandardButton>
            <Button name="Delete" isStandardButton />
          </StandardButton>
        </ButtonContainer>
      </WeatherBar>
    </PageWrapper>
  )
}

export default HomePage
