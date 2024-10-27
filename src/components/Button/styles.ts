import styled from "@emotion/styled"

import { colors } from "styles/colors"

interface ButtonComponentStyleProps {
  $isDeleteVariant: boolean
  $isSearchButton: boolean
  $isStandardButton: boolean
}

export const ButtonComponent = styled.button<ButtonComponentStyleProps>`
  outline: none;
  width: 100%;
  height: 48px;
  border: none;
  background-color: ${({ $isDeleteVariant, disabled, $isSearchButton }) => {
    if (disabled) {
      return colors.GREY
    } else {
      if ($isDeleteVariant) {
        return colors.ERROR
      } else {
        if ($isSearchButton) {
          return colors.SEARCH_BLUE
        } else {
          return colors.TRANSPARENT
        }
      }
    }
  }};

border: ${({ $isStandardButton }) => {
    if ($isStandardButton) {
      return `1px solid ${colors.WHITE}`;
    } else {
        return `0px`;
    }
  }};


  /* background-color: transparent; */
  color: #ffffff;
  font-family: "Inter";
  font-size: 20px;
  font-weight: 200;
  text-align: center;
  border-radius: 50px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`