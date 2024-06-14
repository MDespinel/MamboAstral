import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Text, ButtonGroup, Button, Divider, Heading, Center, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({nombre, precio, img, id}) => {
  return (
    <Card maxW='sm' border='10' borderColor='#252525' borderRadius='3px' boxShadow='2xl'>
      <CardBody bg={'#584b53'}>
        <Image
          src={img}
          alt={nombre}
          borderRadius='md'
          boxSize='100%'
          objectFit='cover' 
          w={'300px'}
          h='300px' 
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md' color={'#ce8147'}>{nombre}</Heading>
          <Text color='#ce8147' fontSize='2xl'>
            ${precio}
          </Text>
        </Stack>
      </CardBody>
      <Center height='2px' bg={'#243F4D'}>
      </Center>
      <Divider color={'#243F4D'}  />
      <CardFooter>
        <Flex spacing='2' justifyContent={'center'} align={'center'} w={'100%'}>
          <Button 
            variant='solid' 
            bg={'#243F4D'} 
            color={'#fff'}
            _hover={{ bg: '#3E6478', color: '#fff' }}
            >
              <Link to={`/producto/${id}`}>
                Ver detalle
              </Link>
          </Button>

        </Flex>
      </CardFooter>
    </Card>
  )
}

export default Item