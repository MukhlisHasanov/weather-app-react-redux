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
} from "store/redux/WeatherAppSlice"

import {
  PageWrapper,
  SearchForm,
  InputContainer,
  SearchButtonContainer,
  WeatherBar,
  WeatherContainer,
  WeatherCondition,
  Temperature,
  City,
  Icons,
  ButtonContainer,
  StandardButton,
} from "./styles"
import { WEATHER_INPUT_FORM_NAMES } from "./types"
function HomePage() {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const validationSchema = Yup.object().shape({
    [WEATHER_INPUT_FORM_NAMES.NAME]: Yup.string().required(
      "City name is required filed",
    ),
  })

  const formik = useFormik({
    initialValues: {
      [WEATHER_INPUT_FORM_NAMES.NAME]: "",
    },
    validationSchema,
    validateOnMount: false,
    validateOnChange: false,

    onSubmit: values => {
      dispatch(
        weatherSliceActions.getWeather({
          name: values[WEATHER_INPUT_FORM_NAMES.NAME],
        }),
      )
      navigate(APP_ROUTES.WEATHERS)
    },
  })

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
            error={formik.values[WEATHER_INPUT_FORM_NAMES.NAME]}
          />
        </InputContainer>
        <SearchButtonContainer>
          <Button type="submit" name="Search" isSearchButton />
        </SearchButtonContainer>
      </SearchForm>
      <WeatherBar>
        <WeatherContainer>
          <WeatherCondition>
            <Temperature>18.0</Temperature>
            <City>Colrado</City>
          </WeatherCondition>
          <Icons>Icons</Icons>
        </WeatherContainer>
        <ButtonContainer>
          <StandardButton>
            <Button name="Save" isStandardButton />
          </StandardButton>
          <StandardButton>
            <Button name="Delete" isStandardButton />
          </StandardButton>
        </ButtonContainer>
      </WeatherBar>
    </PageWrapper>
  )
}

export default HomePage
