import { Box } from '@chakra-ui/react';
import { px } from 'framer-motion';
import React from 'react'
import { TiShoppingCart } from "react-icons/ti";

const CartWidget = () => {
  return (
    <Box m={'10'} color={'white'}>
      <TiShoppingCart />
    </Box>
  )
}

export default CartWidget