import styled from "@emotion/styled"

export const InputComponent = styled.input`
  width: 100%;
  height: 48px;
  border: 0px;
  border-radius: 40px;
  padding-left: 20px;
  outline: none;
  font-family: "Inter";
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  color: #ffffff;
  background-color: transparent;

  &::placeholder {
    color: #f7f7f7;
    font-size: 20px;
  }
`