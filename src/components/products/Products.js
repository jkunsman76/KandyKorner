import React, { useEffect, useState } from "react"


export const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId")
                .then(res => res.json())
                .then(
                    (productsArray) => {
                        setProducts(productsArray)
                     }
                )
        },
        []
    )
    return (
        <>
        {
            products.map(
                (productObj) => {
                    
                    return <p key={`products--${productObj.id}`}>{productObj.name} {productObj.price.toLocaleString('en-US', {style: 'currency',currency: 'USD',})} {productObj.productType.type}</p>
                 }
            )
        }
        </>
    )
}