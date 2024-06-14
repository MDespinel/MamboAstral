import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Link as ChakraLink
  } from '@chakra-ui/react'
  import logo from '../../assets/Imagenes/Logo.png'
  import { FaChevronDown } from "react-icons/fa"
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Flex 
        h={'30vh'} 
        w={'100%'} 
        justify={'space-between'} 
        align={'center'} 
        backgroundColor={'#252525'}
        >
        <ChakraLink as={Link} width={'30%'} to='/'>
          <Image w={'60%'} src={logo}/>
        </ChakraLink>
        <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />}>
                Categorías
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to='/categorias/SahumeriosTibetanos'>Sahumerios Tibetanos</Link>
              </MenuItem>
              <MenuItem>
                <Link to='/categorias/SahumeriosTibetanosPremium'>Sahumerios Tibetanos Premium</Link>
              </MenuItem>
              <MenuItem>
                <Link to='/categorias/Conos'>Conos Cascadas</Link>
              </MenuItem>
              <MenuItem>
                <Link to='/categorias/KitTibetanos'>Kits</Link>
              </MenuItem>
            </MenuList>
        </Menu>
        <CartWidget />
    </Flex>
  )
}

export default NavBar