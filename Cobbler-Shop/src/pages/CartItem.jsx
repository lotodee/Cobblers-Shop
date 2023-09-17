import React from 'react'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { popularProducts} from "../data";
import {useCart} from "react-use-cart"
const Product = styled.div`
  display: flex;
  justify-content: space-between;

`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
 
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;

`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;

`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const CartItem = ({item}) => {
  
  return (
    <>
    <Product>
              <ProductDetail>
                <Image src={item.img}/>
                <Details>
                  <ProductName>
                    <b>Product:</b> {item.name}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>{item.productId}
                  </ProductId>
                  <ProductColor color={item.color} />
                  <ProductSize>
                    <b>Size:</b> {item.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>0</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>${item.price}</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
           </>
  )
}

export default CartItem
