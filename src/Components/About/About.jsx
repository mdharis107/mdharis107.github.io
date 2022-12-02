import React from 'react'
import {
    Box,
 
    Flex,
    Heading,
    Image,

    List,

    ListIcon,

    ListItem,

    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import styles from "./About.module.css"
  import ScrollAnimation from "react-animate-on-scroll"
  import 'animate.css'
  import {AiOutlineCaretRight} from "react-icons/ai"
  
  export default function About({colorMode, aboutRef}) {
   
    return (
      <Stack transitionDelay={'4s'} ref={aboutRef} paddingTop={'15px'} display={"flex"}   
      backgroundImage={ 
       colorMode==="light" ? 'linear-gradient(to bottom, #303136, #393f54, #414d75, #485c96, #4e6bb9, #5470c7, #5b75d6, #6479e4, #6e73e0, #776ddb, #8067d6, #8860d0);-gradient(circle, #c1c8e4, #afbae6, #9dade7, #8a9fe8, #7592e9, #6f8ae8, #6981e6, #6479e4, #6e73e0, #776ddb, #8067d6, #8860d0)' :
     'linear-gradient(to right, #25274d, #2b2d52, #313356, #383a5b, #3e4060, #404565, #414a6b, #434f70, #3f5477, #3a597e, #335f84, #29648a)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'} w={'full'} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
         <Flex flex={1} justify='center' align={'center'}>
         
        <ScrollAnimation animateIn='animate__zoomIn' animateOnce> 
          <Image 
            alt={'Login Image'}
            boxSize='350px'
            borderRadius='full'
            objectFit={'cover'}
            src={
              'https://user-images.githubusercontent.com/104049398/190843442-025788f2-ef6d-417f-b728-6222df2505f8.JPG'
            }
          />
</ScrollAnimation>
      
        
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}
       
          >

          <Stack spacing={6} w={'full'} maxW={'lg'}>
          <ScrollAnimation animateIn='animate__bounceInLeft' animateOnce duration={1.5}>

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
            </ScrollAnimation>
                <ScrollAnimation animateOnce animateIn='animate__fadeInRightBig' duration={'1.5'}>
            <Text  textAlign={'left'}  className={colorMode==="light"? styles.aboutme_light : styles.aboutme_dark} >
            
            {/* <ul>
              <th>Aspiring Full-Stack Developer</th> 
              <li> Skilled in both Front-end and Back-end web development.</li>
              <li>I have worked on several projects collaboratively and solely.</li>
              <li>I am a self-driven and skilled in JavaScript, React and Redux and also familiar with front-end frameworks.</li>
              <li>I have also worked on NodeJs, Express, and MongoDB DataBase. </li>
            </ul> */}
                   Aspiring Full-Stack Developer, skilled in both front-end and back-end web development. 
                   I have worked on several projects collaboratively and solely. 
                   I love to work on exciting projects that test my ability. 
                   I am self-driven and skilled in JavaScript, React, and Redux, and also familiar with front-end frameworks. 
                   I have also worked on NodeJs, Express, and MongoDB DataBase.
                    I look forward to a position where I can enhance my coding and problem-solving ability. 
                   
            </Text>
            </ScrollAnimation>
          
          </Stack>
        </Flex>
       
      </Stack>
    );
  }