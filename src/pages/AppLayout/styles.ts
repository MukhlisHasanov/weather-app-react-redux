import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"
import { MainBackGround } from "assets"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
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

export const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0px 85px;
  gap: 10px;
  border-bottom: 1px solid #d2d2d2;
  background-color: linear-gradient(0deg, rgba(18, 45, 77, 0.5)),
    linear-gradient(0deg, rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(18px);
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
  color: #ffffff;
  line-height: 30px;
`

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 60px;
  height: 100%;
`

export const HeaderLink = styled(NavLink)`
  line-height: 24px;
  font-family: "Lato", sans-serif;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
  font-weight: normal;
  color: #ffffff;
  text-align: left;
`

export const Main = styled.main`
  display: flex;
  /* padding: 120px; */
  flex: 1;
  justify-content: center;
  color: white;
`