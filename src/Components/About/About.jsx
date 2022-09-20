import React from 'react'
import {
    Box,
 
    Flex,
    Heading,
    Image,

    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import styles from "./About.module.css"
  
  export default function About({colorMode, aboutRef}) {
   
    return (
      <Stack transitionDelay={'4s'} ref={aboutRef} paddingTop={'15px'} display={"flex"} gap={0}  
      backgroundImage={ 
       colorMode==="light" ? 'linear-gradient(to bottom, #303136, #393f54, #414d75, #485c96, #4e6bb9, #5470c7, #5b75d6, #6479e4, #6e73e0, #776ddb, #8067d6, #8860d0);-gradient(circle, #c1c8e4, #afbae6, #9dade7, #8a9fe8, #7592e9, #6f8ae8, #6981e6, #6479e4, #6e73e0, #776ddb, #8067d6, #8860d0)' :
     'linear-gradient(to right, #25274d, #2b2d52, #313356, #383a5b, #3e4060, #404565, #414a6b, #434f70, #3f5477, #3a597e, #335f84, #29648a)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'} w={'full'} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
         <Flex flex={1} justify='center' align={'center'}>
         
        
          <Image 
            alt={'Login Image'}
            boxSize='350px'
            borderRadius='full'
            objectFit={'cover'}
            src={
              'https://user-images.githubusercontent.com/104049398/190843442-025788f2-ef6d-417f-b728-6222df2505f8.JPG'
            }
          />

      
        
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}
       
          >
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Box justifyContent={'center'} gap={2} display={'flex'} >
              <Text
              color={colorMode==="light" ?   "black" : "white" }
                as={'span'}
                // position={'absolute'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',

                  zIndex: -1,
                }}>
                About 
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
              Me
              </Text>{' '}
              </Box>
            </Heading>
            <Text textAlign={'left'}  className={colorMode==="light"? styles.aboutme_light : styles.aboutme_dark} >
                    Aspiring Full-Stack Developer,
                    Skilled in both front-end and back-end web development.
                    I have worked on several different projects collaboratively and solely. 
                    I am a self-driven and passionate web developer skilled in JavaScript, React, and Redux and familiar with front-end frameworks. 
                    Also, worked on NodeJs, Express, MongoDB DataBase. 
                    Always eager to learn new technologies to enhance my skills and bring value to the organization.
            </Text>
            {/* <Stack direction={{ base: 'column', md: 'row' }} spacing={4}> */}
              {/* <Button 
              
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Create Project
              </Button> */}
              {/* <Button rounded={'full'}>How It Works</Button> */}
            {/* </Stack> */}
          </Stack>
        </Flex>
       
      </Stack>
    );
  }