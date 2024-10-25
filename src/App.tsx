import GlobalStyles from "styles/GlobalStyles"


import { APP_ROUTES } from "constants/routes"




//CONSULTATIONS

function App() {
  return (
    <>
      <GlobalStyles />
      {/* HOMEWORKS */}
      {/* <Homework_15 /> */}
      {/* <Homework_16 /> */}
      {/* <Homework_17 /> */}
      {/* // LESSONS */}
      {/* <Lesson_16 /> */}
      {/* <Lesson_17 /> */}
      {/* //CONSULTATIONS */}
      <EmployeeLayout>
        <Routes>
          <Route
            path={APP_EMPLOYEE_ROUTES.CREATE_EMPLOYEE}
            element={<EmployeeForm />}
          />
          <Route
            path={APP_EMPLOYEE_ROUTES.EMPLOYEES}
            element={<EmployeeCard />}
          />
          <Route
            path={APP_EMPLOYEE_ROUTES.NOT_FOUND}
            element="Page Is Not Found"
          />
        </Routes>
      </EmployeeLayout>
    </>
  )
}
export default App
