import React from 'react'
import styles from "./Skills.module.css";
import {
  Box,
  VStack,
  Button,
  Divider,
  Grid,
  Heading,
  Text,
  Stack,
  Center,
} from '@chakra-ui/react';
import {
  SiChakraui,
  SiJavascript,
  SiNodedotjs,
  SiCss3,
  SiRedux,
} from "react-icons/si";
import {
  FaGitAlt,
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import {
  GrHeroku
} from "react-icons/gr";
import {
  BsGithub
} from "react-icons/bs";
import GitHubCalendar from "react-github-calendar"


export default function Skills({colorMode,skillsRef}) {

  const FrontEnd = [
    {
      name: "HTML",
      link: "https://html.com/html5/",
      icon: <FaHtml5 />,
      color: "red.600",
    },
    {
      name: "CSS",
      link: "https://www.w3.org/TR/CSS/#css",
      icon: <FaCss3Alt />,
      color: "green.400",
    },
    {
      name: "SCSS",
      link: "https://nodejs.org/en/",
      icon: <SiCss3 />,
      color: "red.500",
    },
    {
      name: "Bootstrap",
      link: "https://getbootstrap.com/",
      icon: <FaBootstrap />,
      color: "purple.400",
    },
    {
      name: "Javascript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: <SiJavascript />,
      color: "yellow.400",
    },
    {
      name: "React",
      link: "https://reactjs.org/",
      icon: <FaReact />,
      color: "blue.400",
    },
    {
      name: "Redux",
      link: "https://nodejs.org/en/",
      icon: <SiRedux />,
      color: "red.500",
    },
    {
      name: "Chakra UI",
      link: "https://chakra-ui.com/",
      icon: <SiChakraui />,
      color: "teal.400",
    },
    {
      name: "Git",
      link: "https://git-scm.com/",
      icon: <FaGitAlt />,
      color: "red.500",
    },
    {
      name: "NodeJs",
      link: "https://nodejs.org/en/",
      icon: <SiNodedotjs />,
      color: "green.500",
    },
    
    {
      name: "HeroKu",
      link: "https://nodejs.org/en/",
      icon: <GrHeroku />,
      color: "#79589f",
    },
    {
      name: "Github",
      link: "https://nodejs.org/en/",
      icon: <BsGithub />,
      color: "black",
    },
    
  ];

  // const BackEnd = [
  //   {
  //     name: "NodeJs",
  //     link: "https://nodejs.org/en/",
  //     icon: <SiNodedotjs />,
  //     color: "red.500",
  //   },
  // ]

  // const hosting = [
  //   {
  //     name: "Git",
  //     link: "https://git-scm.com/",
  //     icon: <FaGitAlt />,
  //     color: "red.500",
  //   },
  //   {
  //     name: "NodeJs",
  //     link: "https://nodejs.org/en/",
  //     icon: <SiNodedotjs />,
  //     color: "red.500",
  //   },
  //   {
  //     name: "Git",
  //     link: "https://git-scm.com/",
  //     icon: <FaGitAlt />,
  //     color: "red.500",
  //   },
  //   {
  //     name: "NodeJs",
  //     link: "https://nodejs.org/en/",
  //     icon: <SiNodedotjs />,
  //     color: "red.500",
  //   },
  // ]
  return (
    
    <Box ref={skillsRef}    backgroundImage={ 
      colorMode==="light" ? 'linear-gradient(to top, #303136, #393f54, #414d75, #485c96, #4e6bb9, #5470c7, #5b75d6, #6479e4, #6e73e0, #776ddb, #8067d6, #8860d0);-gradient(circle, #c1c8e4, #afbae6, #9dade7, #8a9fe8, #7592e9, #6f8ae8, #6981e6, #6479e4, #6e73e0, #776ddb, #8067d6, #8860d0)' :
    'linear-gradient(to right, #25274d, #2b2d52, #313356, #383a5b, #3e4060, #404565, #414a6b, #434f70, #3f5477, #3a597e, #335f84, #29648a)'
     }
     backgroundSize={'cover'}
     backgroundPosition={'center center'} 
     w={'full'} minH={'100vh'} 
      paddingBottom='1px' paddingTop={'10px'}
     >
      {/* <Divider mt={12} mb={12} /> */}
      {/* {colorMode==="light"? "": <Divider mt={12} mb={12} /> }  */}
      {/* <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        gap={4}> */}
        {/* <GridItem colSpan={1}> */}
          {/* <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700"> */}
            <Center > 
            <Heading mt={12} mb={6} color= {colorMode==="light" ? '#F7F9FB' : '#5ab9ea'} alignContent='center' width={'100px'} borderBottom={'2px solid #46344E'}>
            Skills
            </Heading>
            </Center>
            
            {/* </chakra.h2>
          </VStack> */}
        {/* </GridItem> */}
       
      {/* </Grid> */}
      <Divider  mt={12} mb={12}  />
      {/* <Center marginBottom={'10'}>
            <Heading alignContent='center'  >
            Front End
            </Heading>
      </Center> */}
      <Grid
      w={'100%'}
      margin='auto'
      justifyItems={'center'}
      
        templateColumns={{
          base: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={{ base: '1', sm: '2', md: '8' }}
        rowGap='10'>

{FrontEnd.map((t) => {
          return (
              <Button className={styles.anim}
              background='linear-gradient(to left, #33ccff 0%, #ff99cc 100%)'
              // transition='all 2s'
              variant={'outine'}
                   boxSize={'150px'} 
                   color='#F2F2F2'
                  _hover={{
                    color:"black",
                    background:'linear-gradient(to right, #33ccff 0%, #ff99cc 100%)'
                  }}  >
                    
                    <Stack justifyContent={"center"}
                alignItems={"center"}>

                 <Box fontSize={"50"} color={t.color}>
                  {t.icon}
                </Box>
                <Box>
                <Text fontSize={"20"}>{t.name}</Text>
                </Box>
                </Stack>
              </Button>
          );
        })}
        
      </Grid>
      
      
      <VStack margin={'auto'} gap={8} marginTop={'30px'} width={'60%'}  >
        <Heading color={colorMode==="light" ? '#F7F9FB' : '#5ab9ea'} >Git - Stats</Heading>
      <Center>
      <GitHubCalendar  color={colorMode==="light" ? 'grey' : '#5ab9ea'} username="mdharis107" />
      </Center>
      </VStack>
 
    </Box>
  );
}