import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";


export const EmployeeForm = () => {
    const [locations, setLocations] = useState([])
    const history = useHistory()
    const [employee, update] = useState({
        name:"",
        locationId:0,
        manager:false,
        fullTime:false,
        hourlyRate:0
    });

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then(
                    (locationArray) => {
                        setLocations(locationArray)
                    }
                )
        },
        []
    )

    const saveEmployee = (event) => {
        event.preventDefault()

        const newEmployee = {
            name:employee.name,
            locationId: parseInt(employee.locationId),
            manager: employee.manager,
            fullTime: employee.fullTime,
            hourlyRate: parseInt(employee.hourlyRate),
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees",fetchOption)
        .then(() => {
            history.push("/employees")
        })

        
    }
//! not html.... is jsx vvvvvvv

return (
    <form className="employeeForm">
        <h2 className="employeeForm__title">New Employee</h2>
        <fieldset>
            <div className="employeeForm-group">
                <label htmlFor="name">Name: </label>
                <input
                    onChange={(event) => {
                        const copy = { ...employee }
                        copy.name = event.target.value
                        update(copy)
                    }}
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Employee Name Here"
                />
            </div>
            <div className="location__dropdown">
                <label htmlFor="location">Location: </label>
                <select 
                    onChange={(event) => {
                        const copy = { ...employee }
                        copy.locationId = event.target.value
                        update(copy)
                    }
                }>
                <option value="0">Choose a Location...</option>
                    {
                        locations.map(location => {
                            return <option className="locationId"
                            value= {location.id}
                            key={`locationLocation--${location.id}`}>{location.address}
                            </option>     
                        })
                    }
                </select>
            </div>
            <div className="form-group">
                    <label htmlFor="manger">Check for a Manager Position:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.manager = event.target.checked
                                update(copy)
                            }}
                        name="manager"
                        type="checkbox"/>
                </div>
                <div className="form-group">
                    <label htmlFor="fullTime">Check for a Full-Time Position:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.fullTime = event.target.checked
                                update(copy)
                            }}
                        name="fullTime"
                        type="checkbox"/>
                </div>
                <div className="employeeForm-group">
                <label htmlFor="hourlyRate">Hourly Rate: </label>
                <input
                    onChange={(event) => {
                        const copy = { ...employee }
                        copy.hourlyRate = event.target.value
                        update(copy)
                    }}
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Pay Rate"
                />
                </div>
                    </fieldset>
        <button className="btn btn-primary" onClick={saveEmployee}>
            Save Employee
        </button>
    </form>
)
}