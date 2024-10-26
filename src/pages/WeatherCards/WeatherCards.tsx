import {
  CardWrapper,
  CardLabel,
  CardItem,
  UsersNotFound,
  PageWrapper,
  ButtonControl,
  LabelName,
  CardsPosition,
} from "./styles"

import { useAppSelector, useAppDispatch } from "store/hooks"
// import {
//   employeeSliceSelectors,
//   employeeSliceActions,
// } from "store/redux/employeeApp/employeeSlice"
// import { Employee } from "store/redux/employeeApp/types"
import Button from "components/Button/Button"

function Weathers() {
  // const dispatch = useAppDispatch()

  // const deleteAllEmployees = () => {
  //   dispatch(employeeSliceActions.deleteAllEmployees())
  // }

  // const employeeInitialState = useAppSelector(employeeSliceSelectors.employees)
  // const employeeCards = employeeInitialState.map((employee: Employee) => {
  //   const deleteEmployee = () => {
  //     dispatch(employeeSliceActions.deleteEmployee({ id: employee.id }))
  //   }
  //   return (
  //     <PageWrapper>
  //       <CardWrapper>
  //         <CardLabel>
  //           <LabelName>Name:</LabelName>
  //           <CardItem></CardItem>
  //         </CardLabel>
  //         <CardLabel>
  //           <LabelName>Surname:</LabelName>
  //           <CardItem></CardItem>
  //         </CardLabel>
  //         <CardLabel>
  //           <LabelName>Age:</LabelName>
  //           <CardItem></CardItem>
  //         </CardLabel>
  //         <CardLabel>
  //           <LabelName>Job Position:</LabelName>
  //           <CardItem></CardItem>
  //         </CardLabel>
  //         <Button isDeleteVariant name="Delete" onClick={} />
  //       </CardWrapper>
  //     </PageWrapper>
  //   )
  // })
  return (
    <PageWrapper>
      <CardsPosition>CardPosition
        {/* {employeeInitialState.length > 0 ? (
          employeeCards
        ) : (
          <UsersNotFound>Users not found</UsersNotFound>
        )} */}
      </CardsPosition>

      {/* {employeeInitialState.length > 0 && (
        <ButtonControl>
          <Button
            isDeleteVariant
            name="Remove All Employees"
            onClick={deleteAllEmployees}
          />
        </ButtonControl>
      )} */}
    </PageWrapper>
  )
}

export default Weathers
