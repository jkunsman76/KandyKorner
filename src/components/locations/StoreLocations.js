import React, { useEffect, useState } from "react"


export const StoreLocations = () => {
    const [locations, setLocations] = useState([])
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
    return (
        <>
        {
            locations.map(
                (locationObj) => {
                    if (locationObj.mobile === false){
                    return <p key={`location--${locationObj.id}`}>{locationObj.address}</p>
                    } else {
                        return <p key={`location--${locationObj.id}`}>Mobile Candy Cart</p>
                    }
                 }
            )
        }
        </>
    )
}