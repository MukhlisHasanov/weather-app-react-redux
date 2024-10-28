import { v4 } from "uuid"
import { useNavigate } from "react-router-dom"

import { APP_ROUTES } from "constants/routes"

import { AppLayoutProps } from "./types"
import {
  LayoutWrapper,
  AppHeader,
  HeaderLogo,
  LogoText,
  HeaderNav,
  HeaderLink,
  Main,
} from "./styles"

function AppLayout({ children }: AppLayoutProps) {
  const navigate = useNavigate()
  const goToHomePage = () => {
    navigate(APP_ROUTES.HOME)
  }
  const appLinks = {
    [APP_ROUTES.HOME]: "Home",
    [APP_ROUTES.WEATHERS]: "Weathers",
  }

  const headerLinks = Object.keys(appLinks).map((link: string) => {
    return (
      <HeaderLink
        key={v4()}
        style={({ isActive }) => ({
          fontWeight: isActive ? "700" : "normal",
        })}
        to={link}
      >
        {appLinks[link as keyof typeof appLinks]}
      </HeaderLink>
    )
  })

  return (
    <LayoutWrapper>
      <AppHeader>
        <HeaderLogo onClick={goToHomePage}>
          <LogoText>Weather App</LogoText>
        </HeaderLogo>
        <HeaderNav>{headerLinks}</HeaderNav>
      </AppHeader>
      <Main>{children}</Main>
    </LayoutWrapper>
  )
}
export default AppLayout