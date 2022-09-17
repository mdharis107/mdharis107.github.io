
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
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

export default function Navbar({homeRef,aboutRef,skillsRef,colorMode,toggleColorMode}) {
  // const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
    {/* background-image: linear-gradient(to right, #c1c8e4, #b8c9e8, #aec9ea, #a3cbec, #96cced, #8dcbed, #83caec, #79c9eb, #71c5eb, #69c1ea, #62bdea, #5ab9ea); */}
    {/* radial-gradient(circle, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1) */}
      <Box w={'100%'} position='sticky' top={0} zIndex={999}  bg={useColorModeValue('linear-gradient(to left, #c1c8e4, #b8c9e8, #aec9ea, #a3cbec, #96cced, #8dcbed, #83caec, #79c9eb, #71c5eb, #69c1ea, #62bdea, #5ab9ea)', 'linear-gradient(to right, #25274d, #2b2d52, #313356, #383a5b, #3e4060, #404565, #414a6b, #434f70, #3f5477, #3a597e, #335f84, #29648a);')} px={4}>
        <Flex   h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton

            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        
        <HStack spacing={8} alignItems={'center'}>
           <Box color='white' fontWeight={700}>Mohamed Haris</Box>
            <HStack
              as={'nav'}
              spacing={8}
              display={{ base: 'none', md: 'flex' }}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              <Box _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
              onClick={() => {
                homeRef.current.scrollIntoView(
                    {
                        behavior: "smooth",
                    }
                )
                  }}>Home</Box>
              <Box _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
              onClick={() => {
                aboutRef.current.scrollIntoView(
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
              >Contact</Box>
            </HStack>
          </HStack>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              
              <Menu>
              <Box
                // as={Button}
                cursor={'pointer'}
                rounded={'full'}
                // variant={'link'}
                // cursor={'pointer'}
                minW={0}>
                <Avatar
                boxSize='40px'
                  size={'sm'}
                  src='https://user-images.githubusercontent.com/104049398/190843442-025788f2-ef6d-417f-b728-6222df2505f8.JPG'
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
          <Box pb={4} display={{ md: 'none' }} >
            <Stack as={'nav'} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
               <Box _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
              onClick={() => {
                homeRef.current.scrollIntoView(
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
              <Box>Skills</Box>
              <Box>Projects</Box>
              <Box>Contact</Box>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}