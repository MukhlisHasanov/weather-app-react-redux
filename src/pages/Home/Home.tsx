import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup"

import Input from "components/Input/Input"
import Button from "components/Button/Button"

import { APP_ROUTES } from "constants/routes"
import { useAppDispatch, useAppSelector } from "store/hooks"
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

  // const errorMessage = () => {
  //   dispatch(weatherSliceActions.getWeather({}))
  // }

  const saveWeatherCard = () => {
    dispatch(weatherSliceActions.saveTemporaryWeatherData())
    navigate(APP_ROUTES.WEATHER)
  }

  const deleteTemporaryWeatherCard = () => {
    dispatch(weatherSliceActions.deleteTemporaryWeatherData())
  }

  const deleteError = () => {
    navigate(APP_ROUTES.HOME)
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
      {temporaryWeatherData?.name !== undefined ? (
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
                <IconImg
                  src={temporaryWeatherData?.iconURL}
                  alt=" Weather Icon"
                ></IconImg>
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
      ) : (<></>
        // <WeatherBar>
        //   <MainBarBlock>
        //     <Error>API Error</Error>
        //     <ErrorDetails>error message</ErrorDetails>
        //   </MainBarBlock>
        //   <ButtonContainer>
        //     <StandardButton>
        //       <Button name="Delete" isStandardButton onClick={deleteError} />
        //     </StandardButton>
        //   </ButtonContainer>
        // </WeatherBar>
      )}
    </PageWrapper>
  )
}

export default HomePage
