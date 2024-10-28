import GlobalStyles from "styles/GlobalStyles"
import { Route, Routes } from "react-router-dom"

import AppLayout from "pages/AppLayout/AppLayout"
import Home from "pages/Home/Home"
import Weather from "pages/Weather/Weather"

import { APP_ROUTES } from "constants/routes"

function App() {
  return (
    <>
      <GlobalStyles />
      <AppLayout>
        <Routes>
          <Route path={APP_ROUTES.HOME} element={<Home />} />
          <Route path={APP_ROUTES.WEATHER} element={<Weather />} />
          <Route path={APP_ROUTES.NOT_FOUND} element="Page Is Not Found" />
        </Routes>
      </AppLayout>
    </>
  )
}
export default App
