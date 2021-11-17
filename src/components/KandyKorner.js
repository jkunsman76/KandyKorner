import React from "react"
import { StoreLocations } from "./locations/StoreLocations"
import { EmployeeList } from "./employees/EmployeesList"
import { Products } from "./products/Products"


export const KandyKorner = () => {
    return (
        <>
        <h1>Kandy Korner</h1>
        <h2>Store Locations</h2>
        <StoreLocations />
        <h2>Kandy</h2>
        <Products />
        <h2>Employee List</h2>
         <EmployeeList />
         </>
    )
}