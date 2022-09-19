import styles from "./Project.module.css"
import {
  SiJavascript,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";



import React from 'react';

import {
  Box,
  Stack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Button,
  Image,
  Divider,
  Center
} from '@chakra-ui/react';


function PriceWrapper({ children }) {

  // const cards = [
  //   {
  //     title: "YOOX - Clone",
  //     link: "https://candid-starship-25c3ab.netlify.app/",
  //     url: "https://github.com/arulxavierax/Project-U2-YOOX",
  //     description:
  //       "A web application for buying at for men’s, women’s, and kids dresses.",
  //     language:[
  //       {
  //         html: <FaHtml5 />,
  //         css:<FaCss3Alt />,
  //         js:<SiJavascript />
  //       },
  //     ],
  //     project:
  //       "https://user-images.githubusercontent.com/104049398/190868426-c5f0734a-a469-4280-bbb7-e597a0c5a7cb.png",
  //     image:
  //       'linear-gradient(to bottom, #303136, #393f54, #414d75, #485c96, #4e6bb9, #5470c7, #5b75d6, #6479e4, #6e73e0, #776ddb, #8067d6, #8860d0);',
  //   },
  //   {
  //     title: "bewakoof - Clone",
  //     link: "https://jazzy-cocada-65d352.netlify.app/",
  //     url: "https://github.com/shubhrakantighosh/meanbuy",
  //     description:
  //       "A web application for buying at for men’s, women’s, and kids accessories.",
  //     // language: " Html , Css , Javascript",
  //     language:[
  //       {
  //         html: <FaHtml5 />,
  //         css:<FaCss3Alt />,
  //         js:<SiJavascript />
  //       },
  //     ],
  //     project:
  //       "https://user-images.githubusercontent.com/104049398/190868611-1d2472d8-e07f-4984-b16e-9d2ddde4e281.png",
  //     image:
  //       'linear-gradient(to bottom, #25274d, #2d294d, #342b4e, #3a2e4e, #3f304e, #473558, #503961, #593e6b, #664682, #734e9b, #7e57b5, #8860d0);',
  //   },
  //   {
  //     title: "Toggl-Track Clone",
  //     link: "https://toggl-track-by-gas-face-3608.netlify.app/",
  //     url: "https://github.com/abhijitnr/-gas-face-3608",
  //     description:
  //     "A web application for Time tracking for better work, not overwork.",
  //     // language: " Html , Css , Javascript",
  //     language:[
  //       {
  //         html: <FaHtml5 />,
  //         css:<FaCss3Alt />,
  //         js:<SiJavascript />,
  //         boots:<FaBootstrap/>
  //       },
  //     ],
  //     project:
  //       "https://user-images.githubusercontent.com/104049398/190869884-4e009c70-e1ef-473f-b4cc-09bb620b6454.png",
  //     image:
  //       'linear-gradient(to bottom, #25274d, #2d294d, #342b4e, #3a2e4e, #3f304e, #473558, #503961, #593e6b, #664682, #734e9b, #7e57b5, #8860d0);',
  //   },
  // ];
  
  return (
    <Box
    
      mb={4}
      
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
      transform="scale(1.0)"
      transition="0.3s ease-in-out"
      _hover={{
        transform: 'scale(1.05)',
       boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;"
      }}
      cursor='pointer'
      >
      {children}
    </Box>
  );
}

export default function Project({colorMode,projectRef}) {

  // linear-gradient(to right, #25274d, #2b2d52, #313356, #383a5b, #3e4060, #404565, #414a6b, #434f70, #3f5477, #3a597e, #335f84, #29648a)

  return (
    <Box ref={projectRef}  py={5} backgroundImage={colorMode==="light" ? "linear-gradient(to bottom, #303136, #3c4250, #43556c, #466988, #437ea5, #4b8fb4, #54a1c2, #5fb3d0, #80c3d5, #9fd3dc, #bfe3e5, #def2f1)":
    " linear-gradient(to right, #25274d, #2b2d52, #313356, #383a5b, #3e4060, #404565, #414a6b, #434f70, #3f5477, #3a597e, #335f84, #29648a)"}
    backgroundSize={'cover'}
    backgroundPosition={'center center'} 
    w={'full'} minH={'100vh'}
     >
      <VStack spacing={2} textAlign="center">
        <Heading mt={12} mb={6} color= {colorMode==="light" ? '#F7F9FB' : '#5ab9ea'} alignContent='center' width={'140px'} borderBottom={'2px solid #46344E'}>
          Projects
        </Heading>

        
      </VStack>
      <Divider mt={6} mb={6}  />
      <Stack
      p={10}
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>

        <PriceWrapper >
          <Box
            maxW={'400px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            <Box
              // h={'280px'}
              bg={'gray.100'}
              mt={-6}
              mx={-6}
              mb={6}
              pos={'relative'}>
              <Image
              transform="scale(1.0)"
              width="100%"
              transition="0.3s ease-in-out"
              _hover={{
                transform: 'scale(1.05)',
              }}

              h={'240px'}
                src={
                'https://user-images.githubusercontent.com/104049398/190868426-c5f0734a-a469-4280-bbb7-e597a0c5a7cb.png'
                }
                layout={'fill'}
              />
            </Box>
                    
    <Stack pt={0} align={'center'}>
    <Heading
  color={'green.500'}
                textTransform={'uppercase'}
                fontWeight={700}
                letterSpacing={1.1} fontSize={'2xl'} fontFamily={'body'} >
        YOOX - Clone
      </Heading>
      <Text color={'gray.500'} fontSize={'16'}>
      A clothing online shopping web application for men, women and kids
      </Text>
      </Stack>
      
      <Stack marginTop={'2'}  direction={'column'} align={'center'}>
      
          <Box>
          <Text fontWeight={800} fontSize={'xl'}>
          Tech stack
          </Text>
                <Box marginTop={'2'}  display={"flex"} gap={'8'}>
                    
                    <Box>
                      <Button
                      boxSize={'50px'}
                          fontSize={'20px'}
                          color={'red'}>
                      <FaHtml5 />
                    </Button>
                      </Box>
                      
                      <Button
                      color="green"
                      fontSize={'20px'}
                        boxSize={"50px"} >
                          <FaCss3Alt />
                      </Button>
                      <Button
                      color="yellow.400"
                    
                      fontSize={'20px'}
                        boxSize={"50px"} >
                          <SiJavascript />
                        </Button>
                      <Button 
                      ransition='all 2s'
                      fontSize={'20px'}
                      boxSize={'50px'}
                      color="purple"
                        // _hover={{
                        //   background:'linear-gradient(to right, #33ccff 0%, #ff99cc 100%)'
                        // }}
                        >
                          <FaBootstrap/>
                          
                        </Button>
                  </Box>
          </Box>

          <Divider mt={12} mb={12}  />

        <Box gap={8} display={'flex'}>
          <Box  >
                <Button className={colorMode==="light"? styles.btn_light : styles.btn_dark} as={'a'} href="https://candid-starship-25c3ab.netlify.app/" _hover={{textDecoration:"none" }} target='_blank' w={'100px'} >LIVE</Button>
          </Box>
          
          <Box>
          <Button className={colorMode==="light"? styles.btn_light : styles.btn_dark} as={'a'} href="https://github.com/arulxavierax/Project-U2-YOOX" _hover={{textDecoration:"none" }} target='_blank'  w={'100px'}>GITHUB</Button>    
          </Box>
        </Box>

      </Stack>
          </Box>
        </PriceWrapper>

        <PriceWrapper>
          <Box
            maxW={'400px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            <Box
              // h={'280px'}
              bg={'gray.100'}
              mt={-6}
              mx={-6}
              mb={6}
              pos={'relative'}>
              <Image
              transform="scale(1.0)"
              width="100%"
              transition="0.3s ease-in-out"
              _hover={{
                transform: 'scale(1.05)',
              }}
              h={'240px'}
                src='https://user-images.githubusercontent.com/104049398/190868611-1d2472d8-e07f-4984-b16e-9d2ddde4e281.png
                '
                layout={'fill'}
              />
            </Box>
                    
    <Stack pt={0} align={'center'}>
    <Heading
  color={'green.500'}
                textTransform={'uppercase'}
                fontWeight={700}
                letterSpacing={1.1} fontSize={'2xl'} fontFamily={'body'} >
        bewakoof - Clone
      </Heading>
      <Text color={'gray.500'} fontSize={'16'} >
      Online shopping web application clothing for the latest fashion and accessory trends
      </Text>
      </Stack>
      
      <Stack marginTop={'2'}  direction={'column'} align={'center'}>
      
          <Box>
          <Text fontWeight={800} fontSize={'xl'}>
          Tech stack
          </Text>
                <Box marginTop={'2'}  display={"flex"} gap={'8'}>
                    
                    <Box>
                      <Button
                      boxSize={'50px'}
                          fontSize={'20px'}
                          color={'red'}>
                      <FaHtml5 />
                    </Button>
                      </Box>
                      
                      <Button
                      color="green"
                      fontSize={'20px'}
                        boxSize={"50px"} >
                          <FaCss3Alt />
                      </Button>
                      <Button
                      color="yellow.400"
                    
                      fontSize={'20px'}
                        boxSize={"50px"} >
                          <SiJavascript />
                        </Button>
                      
                  </Box>
          </Box>

          <Divider mt={12} mb={12}  />

        <Box gap={8} display={'flex'}>
          <Box>
                <Button className={colorMode==="light"? styles.btn_light : styles.btn_dark} as={'a'} href="https://jazzy-cocada-65d352.netlify.app/" _hover={{textDecoration:"none" }} target='_blank' w={'100px'} >LIVE</Button>
          </Box>
          
          <Box>
          <Button className={colorMode==="light"? styles.btn_light : styles.btn_dark} as={'a'} href="https://github.com/11-DEEPAK-KUMAR-11/Bewakoof_website
  " _hover={{textDecoration:"none" }} target='_blank'  w={'100px'}>GITHUB</Button>    
          </Box>
        </Box>

      </Stack>
          </Box>
        </PriceWrapper>

        <PriceWrapper>
        <Box
          maxW={'400px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}>
          <Box
            // h={'280px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}>
            <Image
            transform="scale(1.0)"
            width="100%"
            transition="0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.05)',
            }}
            h={'240px'}
              src='https://user-images.githubusercontent.com/104049398/190869884-4e009c70-e1ef-473f-b4cc-09bb620b6454.png'
              layout={'fill'}
            />
          </Box>
                  
  <Stack pt={0} align={'center'}>
  <Heading
 color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={700}
              letterSpacing={1.1} fontSize={'2xl'} fontFamily={'body'} >
      Toggl-Track Clone
    </Heading>
    <Text color={'gray.500'} fontSize={'16'} >
    A web application for Time tracking for better work, not overwork.
    </Text>
    </Stack>
    
    <Stack marginTop={'2'}  direction={'column'} align={'center'}>
    
        <Box>
        <Text fontWeight={800} fontSize={'xl'}>
        Tech stack
        </Text>
               <Box marginTop={'2'}  display={"flex"} gap={'8'}>
                  
                   <Box>
                    <Button
                    boxSize={'50px'}
                        fontSize={'20px'}
                        color={'red'}>
                    <FaHtml5 />
                  </Button>
                    </Box>
                    
                    <Button
                    color="green"
                    fontSize={'20px'}
                       boxSize={"50px"} >
                        <FaCss3Alt />
                    </Button>
                    <Button
                    color="yellow.400"
                   
                    fontSize={'20px'}
                       boxSize={"50px"} >
                        <SiJavascript />
                       </Button>
                </Box>
        </Box>

        <Divider mt={12} mb={12}  />

      <Box gap={8} display={'flex'}>
        <Box>
              <Button className={colorMode==="light"? styles.btn_light : styles.btn_dark} as={'a'} href="https://toggl-track-by-gas-face-3608.netlify.app/" _hover={{textDecoration:"none" }} target='_blank' w={'100px'} >LIVE</Button>
        </Box>
        
        <Box>
        <Button className={colorMode==="light"? styles.btn_light : styles.btn_dark} as={'a'} href="https://github.com/abhijitnr/-gas-face-3608" _hover={{textDecoration:"none" }} target='_blank'  w={'100px'}>GITHUB</Button>    
        </Box>
      </Box>

    </Stack>
        </Box>
        </PriceWrapper>

      </Stack>
      {/* <Center>
      <Box width={'60%'}  >
    
      </Box>
      </Center> */}
    </Box>
  );
}