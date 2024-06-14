import { Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProducts, getProductsByCategory } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'

const ItemListContainer = ({title}) => {
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  console.log(categoryId)


  useEffect(() => {
    setLoading(true)
    const dataProductos = categoryId ? getProductsByCategory(categoryId) : getProducts()

    dataProductos
      .then((data) => setProducts(data))
      .catch((error) => console.log(error))
      .finally(()=> setLoading(false))
      },[categoryId])
     
  console.log(products)
  return (
    <Flex direction={'column'} justify={'center'} align={'center'}> 
      <Heading color={'#9d5c63'} mt={10}>{title}</Heading>
      {
        loading ?  
        <Flex justify={'center'} align={'center'} h={'50vh'}>
          <PacmanLoader color="#2c5784" />
          </Flex>       
        : 
        <ItemList products={products} />
      }
    </Flex>
  )
}

export default ItemListContainer