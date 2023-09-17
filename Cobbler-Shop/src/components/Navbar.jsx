import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { mobile } from '../responsive';
import {Link} from "react-router-dom"
// import CartContext from '../CartContext.jsx';
// import { useContext } from 'react';
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Links = styled(Link)`
text-decoration:none;
color: inherit;
}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
border: none !important ;


  &:focus {
   outline:none;
  }

  ${mobile({ width: "50px" })}

`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {

  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                  <SearchIcon style={{color:`grey` , fontSize:16}} />
            </SearchContainer>
            
        </Left>
        <Center>
          <Links to="/">
            <Logo>
                CobblerS
            </Logo>
          </Links>
        </Center>
        <Right>
          <Links to="/register">
        <MenuItem>REGISTER</MenuItem>
        </Links>
        <Links to="login">
          <MenuItem>SIGN IN</MenuItem>
          </Links>
          <MenuItem>
          <Links to="/cart">
          <Badge badgeContent={0} color="primary">
              <ShoppingCartIcon />
            </Badge>
            </Links>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
