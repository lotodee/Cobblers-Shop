import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlined  from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useState } from 'react';
import { useCart } from 'react-use-cart';
import { popularProducts } from '../data';
import { globalArray } from '../data';
const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;`

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;`

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;

background-color: #f5fbfd;
position: relative;

&:hover ${Info}{
    opacity: 1;
  };

 
  
  
`

const Image = styled.img
` 
height: 95%;
width:95%;
z-index: 2;
object-fit:cover;
`


const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
&:hover {
  background-color: #e9f5f5;
  transform: scale(1.1);
  
`

const Fav = styled.div`
color:${(props)=>(props.click ?  `red` : `black`) };
`

const Product = ({item }) => {


    const [click , setClicked] = useState(false)
  return (
    <Container>
    <Circle />
    <Image src={item.img}/>
    <Info>
      <Icon>
        <ShoppingCartOutlined onClick={()=>{handleAddtoCart() ; console.log(globalArray);}} />
      </Icon>
      <Icon>
   

        <SearchOutlinedIcon  />
      </Icon>
      <Icon>
        <Fav click={click} onClick={()=>{setClicked(!click)}}  >
        <FavoriteBorderOutlinedIcon  />
        </Fav>
      </Icon>
    </Info>
  </Container>
  )
}

export default Product
