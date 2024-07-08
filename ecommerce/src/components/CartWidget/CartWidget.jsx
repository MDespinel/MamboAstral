import { Box } from '@chakra-ui/react';
import { px } from 'framer-motion';
import React, { useContext } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import Context from '../context/CartContext';
import { Link } from 'react-router-dom';
const CartWidget = () => {
  const{ getQuantity } = useContext(Context)

  return (
    <Box m={'10'} color={'white'}>
      <Link to= '/cart'><TiShoppingCart /></Link>
      <span>{getQuantity()> 0 && getQuantity()} </span>
    </Box>
  )
}

export default CartWidget