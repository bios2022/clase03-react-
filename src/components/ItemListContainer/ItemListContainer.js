import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({bienvenida}) => {
    const [products, setProducts] = useState([])
    
    useEffect(()=>{
        getProducts().then(products => {
            setProducts(products)
        })
    }, [])
       
    return(
        <>
            <h1>{bienvenida}</h1>
            <ItemList products={products} />
        </>
    )
}
export default ItemListContainer