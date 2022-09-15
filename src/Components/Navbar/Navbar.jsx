import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  HStack,
  IconButton
} from '@chakra-ui/react';
import { MoonIcon, SunIcon,HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// const Links = ["Home","About",'Skills', 'Projects', 'Contact'];

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={''}>
//     {children}
//   </Link>
// );

export default function Navbar({aboutRef,skillsRef}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box pos='sticky' top='0' bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex position={'absoute'} h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton

            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        
        <HStack spacing={8} alignItems={'center'}>
           
            <HStack
              as={'nav'}
              spacing={8}
              display={{ base: 'none', md: 'flex' }}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              <Box  _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
              onClick={() => {
                aboutRef.current.scrollIntoView(
                    {
                        behavior: "smooth",
                    }
                )
                  }}>Home</Box>
              <Box _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
              onClick={() => {
                skillsRef.current.scrollIntoView(
                    {
                        behavior: "smooth",
                    }
                )
                  }}>About</Box>
              <Box  _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }} 
              >Skills</Box>
              <Box  _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
               >Projects</Box>
              <Box  _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
              >About</Box>
            </HStack>
          </HStack>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              

              <Menu>
              <Box
                as={Button}
                rounded={'full'}
                // variant={'link'}
                // cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </Box>
              {/* <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList> */}
            </Menu>
            </Stack>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
               <Box _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
              onClick={() => {
                aboutRef.current.scrollIntoView(
                    {
                        behavior: "smooth",
                    }
                )
                  }}>Home</Box>
              <Box _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
              onClick={() => {
                skillsRef.current.scrollIntoView(
                    {
                        behavior: "smooth",
                    }
                )
                  }}>Skills</Box>
              <Box>Home</Box>
              <Box>Home</Box>
              <Box>Home</Box>
            </Stack>
          </Box>
        ) : null}
      </Box>
      
    </>
  );
}