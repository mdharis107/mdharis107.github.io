import {
    Stack,
    Flex,
    Button,
    Text,
    Box,
    VStack,
    useBreakpointValue,
    Center,
    Link,
    // useMediaQuery,
  } from '@chakra-ui/react';
  import { BsGithub} from 'react-icons/bs'
  import { BsLinkedin} from 'react-icons/bs'
 import styles from "./Home.module.css"

  
  export default function Home({homeRef,colorMode}) {
    // const [isLargerThan900] = useMediaQuery('(min-width: 900px)');

    // const Letters = ['Hi I am Mohamed Haris']
    return (  
      <Center  ref={homeRef}>
        {/* {isLargerThan900 ?  */}
        <Flex
        // ref={aboutRef} 
          w={'full'}
          h={'95vh'}
          background='fixed'
          backgroundImage={
            'url(https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)'
          }
          backgroundSize={'cover'}
          backgroundPosition={'center center'}>
          
          <VStack
          
          // border='1px red solid'
            w={'80%'}
            margin='auto'
            justify={'center'}
            // justifyContent=
            align='end'>
             

            {/* <Box margin='auto' marginLeft='800px'  border="1px solid red" > */}
           
            <Stack  align='center' maxW={'2xl'} spacing={6}>
                   
            <Text fontFamily='helvetica' className={styles.textStyle}>
                    
                      Hi, I'm Mohamed Haris
            </Text>
              <Text
              
                className={styles.variant}
                color={ colorMode==='dark'? 'dark' : 'white'}
                fontWeight={700}
                lineHeight={1.2}
                >
                Aspiring Full-Stack Web Developer 
              </Text>
              
              <Stack direction={'row'}  >
                <Box   >
               
                <Link    _hover={{textDecoration:"none"}} href='https://drive.google.com/file/d/1qMnwNd1uqkUwpb5eHR76eVI8HpTfsuMM/view?usp=sharing'  target='_blank' transition='all 2s'>
                <Button
                  textDecoration='none'
                  _hover={{
                transition:'all 5s',
                  textDecoration:'none',
                    color:"black",
                    background:'linear-gradient(to left, #33ccff 0%, #ff99cc 100%)'
                  }}

                 background='linear-gradient(to right, #33ccff 0%, #ff99cc 100%)' 
                transition='all 5s'
                  
                >RESUME</Button>
                </Link>
                
                </Box>

              </Stack>

              <Stack  maxW={'2xl'} spacing={10}  align='center'>
                <Box gap='5' display={'flex'}>
                  <Box>

                  <Button
                  transition='all 2s'
                   variant={'outine'} 
                   fontSize='30px' 
                   color='#C1C8E4'  
                  padding={'0'}

                  //  heigth="10px"
                  _hover={{
                    color:"black",
                    background:'linear-gradient(to right, #33ccff 0%, #ff99cc 100%)'
                  }}
                   >
                    <Link href='https://github.com/mdharis107'  target='_blank'>
                  <BsGithub   />
                    
                    </Link>
          
                  </Button>
                  </Box>
                  <Box>

                  <Button
                  transition='all 2s'
                   variant={'outine'} 
                   fontSize='30px' 
                   color='#C1C8E4'                
                  //  heigth="10px"
                  padding={'0'}
                  _hover={{
                    color:"black",
                    background:'linear-gradient(to right, #33ccff 0%, #ff99cc 100%)'
                  }}
                   >
                    <Link href='https://www.linkedin.com/in/mohamed-haris' target='_blank'>
                  <BsLinkedin   />              
                    </Link>
          
                  </Button>
                  </Box>

                </Box>
                
              
            </Stack>

            </Stack  >
                
           

            {/* </Box> */}
          </VStack>

        </Flex>

      </Center>
      
    );
  }


