import GlobalStyles from "styles/GlobalStyles"
import { Route, Routes } from "react-router-dom"

import Layout from "pages/Layout/Layout"
import Home from "pages/Home/Home"
import Weathers from "pages/Weathers/Weathers"

import { APP_ROUTES } from "constants/routes"

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route
            path={APP_ROUTES.HOME}
            element={<Home />}
          />
          <Route
            path={APP_ROUTES.WEATHERS}
            element={<Weathers />}
          />
          <Route
            path={APP_ROUTES.NOT_FOUND}
            element="Page Is Not Found"
          />
        </Routes>
      </Layout>
    </>
  )
}
export default App
