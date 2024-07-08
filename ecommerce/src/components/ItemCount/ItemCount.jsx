import React, { useState } from 'react'
import { Button, ButtonGroup, Flex } from '@chakra-ui/react'

const ItemCount = ({stock, initialValue, onAdd, maxAvailable}) => {
    const [ count, setCount ] = useState(initialValue)
    

    const incrementar = () => {
        count < maxAvailable && setCount(count + 1)
    }

    const decrementar = () => {
        count > initialValue && setCount(count - 1) 
    }

  return (
    <Flex>
        <Button colorScheme='blue'onClick={decrementar}>-</Button>
        {count}
        <Button colorScheme='blue' onClick={incrementar}>+</Button>
        <Button onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </Flex>
  )
}

export default ItemCount