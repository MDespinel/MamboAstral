import { Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'
import { collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../../config/firebase'

const ItemListContainer = ({title}) => {
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading] = useState(true)
 
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    const getData = async()=>{
      const coleccion = collection(db, 'productos')
      
      const queryRef = !categoryId ?
      coleccion
      :
      query(coleccion, where('categoria', '==', categoryId))

      const response = await getDocs(queryRef)

      const productos = response.docs.map((doc) =>{
        const newItem ={
          ...doc.data(),
          id: doc.id
        }
        return newItem
      })
      setProducts(productos)
      setLoading(false)
    }

    getData()     
 },[categoryId])
     
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