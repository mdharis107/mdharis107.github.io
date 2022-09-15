import {
    Stack,
    Flex,
    Button,
    Text,
    Box,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
 
  
  export default function About({aboutRef}) {
    return (
        
      <Flex
      ref={aboutRef} 
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} spacing={6}>
            <Box color={'white' } textAlign='left' border="1px solid red" >
dfdsfs
            </Box>
            <Text
            //   color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor
            </Text>
            <Stack direction={'row'}>
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                Show me more
              </Button>
              
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }
