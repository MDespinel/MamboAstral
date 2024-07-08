import React from 'react'
import { Image } from '@chakra-ui/react'
import img404 from '../../assets/Imagenes/eror-404.jpg'

const PageNotFound = () => {
  return (
    <div>
        <Image w={'100%'} src={img404} alt="404 not found" />
    </div>
  )
}

export default PageNotFound;