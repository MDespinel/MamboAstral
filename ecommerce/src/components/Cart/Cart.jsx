import { Button, Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Context from '../context/CartContext'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
    Flex
  } from '@chakra-ui/react'
  import { RiDeleteBin5Line } from "react-icons/ri";
  import {Link } from 'react-router-dom'

const Cart = () => {
    const { cart, removeItem, clearCart, getTotal, incrementarItem, decrementarItem } = useContext(Context)
    console.log('carrito', cart)
    if(cart.length === 0) {
        return (

            <Flex direction={'column'} justify={'center'} align={'center'}>
            <Heading>Todavía no agregaste productos al carrito</Heading>
            <Link to='/'>Ver productos</Link>
        </Flex>
    )
    }else {

  return (
    <TableContainer>
    <Table variant='striped' colorScheme='whiteAlpha'>
        <Thead>
        <Tr>
            <Th>Nombre</Th>
            <Th>Cantidad</Th>
            <Th></Th>
            <Th>Precio</Th>
            <Th>Subtotal</Th>
            <Th></Th>
        </Tr>
        </Thead>
        <Tbody>
            {
                cart.map((prod) => (
                    <Tr key={prod.id}>
                        <Td>{prod.nombre}</Td>
                        <Td>{prod.quantity}</Td>
                        <Td>
                            <Button onClick={() => decrementarItem(prod.id)}>-</Button>
                            <Button onClick={()=> incrementarItem(prod.id, prod.stock)}>+</Button>
                        </Td>
                        <Td>{prod.precio}</Td>
                        <Td>{prod.precio * prod.quantity}</Td>
                        <Td>
                            <Button onClick={()=>removeItem(prod.id)}>
                                <RiDeleteBin5Line />
                            </Button>
                        </Td>
                    </Tr>
        ))
        }
        </Tbody>
        <Tfoot>
        <Tr>
            <Th><Button onClick={() => clearCart()}>Vaciar carrito </Button></Th>
            <Th><Heading>{getTotal()}</Heading></Th>
            <Th><Link to='/Checkout'>Finalizar compra</Link></Th>
        </Tr>
        </Tfoot>
    </Table>
    </TableContainer>
  )
}

}

export default Cart