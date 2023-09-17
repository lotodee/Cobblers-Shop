import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Container = styled.div`
flex:1;
border:2px solid red;
margin:3px;
height:70vh; 
position:relative;
`
const Links = styled(Link)`
text-decoration:none;
color: inherit;
}
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
`
const Info = styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`

const Title = styled.h1`
color:#666362;
margin-bottom: 20px;
`

const Button = styled.button`
border:none;
padding: 10px;
background-color: white;
color:gray;
cursor: pointer;
font-weight: 600;
transition: all 0.5s ease;
&:hover{
  transform : scale(1.2);
  background-color:black;
  color:white;

}
`

const CategoryItem = ({item}) => {
  return (
    <Container>
    <Image src={item.img} />
    <Info>
      <Title>{item.title}</Title>
      <Links to="/productlist">
      <Button>SHOP NOW</Button>
      </Links>
    </Info>
  </Container>
  )
}

export default CategoryItem
