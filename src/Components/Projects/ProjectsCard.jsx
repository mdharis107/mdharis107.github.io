import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
    Link,
    Avatar,
    Divider,
  } from '@chakra-ui/react';
  import styles from "./ProjectCard.module.css"
  
  const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
  export default function ProjectCard({index,lang,picture,title,desc,deploy,live}) {
    // console.log(lang)
    return (
        <Center py={50}>
        <Box
          maxW={'645px'}
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
            h={'240px'}
              src={
                picture
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
      {title}
    </Heading>
    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
      {desc}
    </Text>
    </Stack>
    
    <Stack marginTop={'2'}  direction={'column'} align={'center'}>
    
        <Box>
        <Text fontWeight={800} fontSize={'xl'}>
        Tech stack
        </Text>
         {lang.map((ele)=>{
            return (
                <Box key={ele.html} marginTop={'2'}  display={"flex"} gap={'8'}>
                    <Box>
                    <Button
                    boxSize={'50px'}
                        fontSize={'20px'}
                        color={'red'}
                  >{ele.html}</Button>
                    </Box>
                    
                    <Button
                    color="green"
                    fontSize={'20px'}
                       boxSize={"50px"} >{ele.css}</Button>
                    <Button
                    color="yellow.400"
                   
                    fontSize={'20px'}
                       boxSize={"50px"} >{ele.js}</Button>
                    {/* {ele.boots && <Button 
                    ransition='all 2s'
                    fontSize={'20px'}
                    boxSize={'50px'}
                    color="purple"
                      _hover={{
                        background:'linear-gradient(to right, #33ccff 0%, #ff99cc 100%)'
                      }}>{ele.boots}</Button>} */}
                </Box>
            )
        })}
    
        </Box>
        <Divider mt={12} mb={12}  />

      <Box gap={8} display={'flex'}>
        <Box>
            <Link href={deploy} _hover={{textDecoration:"none" }} target='_blank'>
        
            <Button className={styles.btn} w={'100px'} >LIVE</Button>
            </Link>
            
        </Box>
        <Box>
        <Link href={live} _hover={{textDecoration:"none" }} target='_blank'>
        
        <Button className={styles.btn} w={'100px'}>GITHUB</Button>
        </Link>
        </Box>
      </Box>

    </Stack>
        </Box>
      </Center>
    );
  }
