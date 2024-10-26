import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"
import { MainBackGround } from "assets"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  background-color: #faf9ff;
  border-bottom: 1px solid black;
  padding: 20px 40px;
  box-shadow: 0px 4px 4px 0px #00000040;
`

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  line-height: 30px;
  cursor: pointer;
`

export const LogoText = styled.span`
  font-family: "Inter";
  font-size: 24px;
  font-weight: 700;
  text-align: left;
`

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 100%;
`

export const HeaderLink = styled(NavLink)`
  font-size: 28px;
  font-family: "Lato", sans-serif;
  text-decoration: none;
  font-weight: normal;
  color: #000000;
`

export const Main = styled.main`
  display: flex;
  padding: 120px;
  flex: 1;
  justify-content: center;
  color: white;
  background-position: center;
  background-image: linear-gradient(
      0deg,
      rgba(29, 32, 45, 0.3),
      rgba(29, 32, 45, 0.3)
    ),
    url(${MainBackGround});
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
