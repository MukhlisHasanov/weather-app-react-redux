import styled from "@emotion/styled"

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const SearchForm = styled.div`
  display: flex;
  flex-direction: row;
  height: 48px;
  width: 710px;
  gap: 14px;
`

export const InputContainer = styled.div`
  display: flex;
  height: 48px;
  width: 550px;
  /* padding: 12px; */
  /* gap: 10px; */
  font-size: 44px;
  text-align: left;
  border: 1px solid #ffffff;
  border-radius: 40px;
  backdrop-filter: blur(16px);
`

export const SearchButtonContainer = styled.div`
  height: 48px;
  width: 146px;
`

export const WeatherBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 220px;
  width: 709px;
  padding: 30px;
  margin-top: 120px;
  border-radius: 20px;
  background: linear-gradient(
    133.66deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  backdrop-filter: blur(8px);
`

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const WeatherCondition = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Temperature = styled.div`
  width: 100%;
  height: 69px;
  font-family: "Inter";
  font-size: 57px;
  font-weight: 500;
  line-height: 70px;
  text-align: left;
  color: #ffffff;
`

export const City = styled.div`
  width: 100%;
  height: 23px;
  font-family: "Inter";
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  text-align: left;
  color: #ffffff;
`

export const Icons = styled.div``

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* padding: 8px; */
  justify-content: space-evenly;
`

export const StandardButton = styled.div`
  height: 48px;
  width: 146px;
`
