import React from "react"
import { Route } from "react-router-dom"
import { StoreLocations } from "./locations/StoreLocations"
import { EmployeeList } from "./employees/EmployeesList"
import { EmployeeForm} from "./employees/EmployeeForm"
import { Products } from "./products/Products"
import { CustomerList } from "./customers/CustomerList"



export const ApplicationView = () => {
    return (
        <>

            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/employees/create">
                <EmployeeForm />
            </Route>
            
            <Route exact path="/products">
                <Products />
            </Route>
            
            <Route exact path="/locations">
                <StoreLocations />
            </Route>
        </>
    )
}