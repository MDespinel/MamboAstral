import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import { Box, Text, VStack } from '@chakra-ui/react';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ nombre, stock }) => {

  const onAdd = (quantity) => {
    toast(`Agregaste ${quantity} unidades`);
  }

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      padding="6"
      width="300px"
      margin="auto"
    >
      <VStack spacing="4">
        <Text fontWeight="bold" fontSize="2xl">{nombre}</Text>
        <ItemCount stock={stock} valorInicial={1} onAdd={onAdd} />
        <ToastContainer />
      </VStack>
    </Box>
  );
}

export default ItemDetail;
