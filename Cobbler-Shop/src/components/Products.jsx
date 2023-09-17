import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import CartItem from '../pages/CartItem'
import Product from './Product'
import { useCart } from "react-use-cart";
const Container = styled.div`
display:flex;
padding:20px;
flex-wrap: wrap;

`
const Products = () => {
 

  return (
    <Container>
      {popularProducts.map(item=>{
    return(
      <>
            <Product item={item} key={item.id} />
           
       </>
    )
      })}
    </Container>
  )
}

export default Products
