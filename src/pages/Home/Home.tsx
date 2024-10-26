import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"

import Input from "components/Input/Input"
import Button from "components/Button/Button"

import { APP_ROUTES } from "constants/routes"
import { useAppDispatch } from "store/hooks"
// import { employeeSliceActions } from "store/redux/AppSlice"

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
} from "./styles"
// import { EMPLOYEE_FORM_NAMES } from "./types"

function HomePage() {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  // const formik = useFormik({
  //   initialValues: {
  //     [EMPLOYEE_FORM_NAMES.NAME]: "",
  //   },

  //   onSubmit: values => {
  //     dispatch(employeeSliceActions.createEmployee(values))
  //     navigate(APP_ROUTES.WEATHERS)
  //   },
  // })

  //   return (
  //     <SearchForm onSubmit={formik.handleSubmit}>
  //       <InputContainer>
  //         <Input
  //           id="search-input"
  //           // name={EMPLOYEE_FORM_NAMES.NAME}
  //           placeholder="Enter city"
  //           // onChange={formik.handleChange}
  //           // value={formik.values.name}
  //           // error={formik.errors.name}
  //         />
  //       </InputContainer>
  // <SearchButtonContainer>
  // <Button type="submit" name="Search" />
  // </SearchButtonContainer>

  //     </SearchForm>

  //     <WeatherBar>
  //       <WeatherContainer>
  //         <WeatherCondition>
  //         <Temperature></Temperature>
  //         <City></City>
  //         </WeatherCondition>
  //         <Icons></Icons>
  //       </WeatherContainer>
  //       <ButtonContainer>
  //       <Button name="Save" onClick={}/>
  //       <Button name="Delete" onClick={} />
  //       </ButtonContainer>
  //     </WeatherBar>
  //   )

  return(
  <PageWrapper>
    <SearchForm>
      <InputContainer></InputContainer>
      <SearchButtonContainer>
        <Button type="submit" name="Search" isSearchButton/> 
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
        <Button name="Save"  />
        <Button name="Delete"  />
      </ButtonContainer>
    </WeatherBar>
  </PageWrapper>
  )
}

export default HomePage
