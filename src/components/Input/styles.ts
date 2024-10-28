import styled from "@emotion/styled"

import { colors } from "styles/colors"

export interface InputComponentStyleProps {
  $error?: string | undefined
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const InputComponent = styled.input<InputComponentStyleProps>`
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
  color: #FFFFFF;
  background-color: transparent;


  &::placeholder {
    /* color: #f7f7f7; */
    font-size: 20px;
  }
`