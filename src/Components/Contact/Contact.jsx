import React, { useRef } from 'react'
// import styles from "./Contactme.module.css"
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
 
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub,BsLinkedin, BsPerson } from 'react-icons/bs';
// import { EmailIcon } from '@chakra-ui/icons';
import emailjs from '@emailjs/browser';
import ScrollAnimation from 'react-animate-on-scroll';

// function Alerting(){
//   <Alert status='success'>
//   <AlertIcon />
//   There was an error processing your request
// </Alert>
// }

export default function Contact({colorMode, contactRef}) {

  const form = useRef();

  const sendEmail =(e)=>{
    e.preventDefault()
    emailjs.sendForm('service_csxvaan', 'template_syzvtf6', form.current, 'EeyZQXDhvxaep2cZO')
      .then((result) => {
          console.log(result.text);
         
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      // Alerting()
      alert('Mail sent')
  }
  

  return (
    // https://images.unsplash.com/photo-1653289755854-a41949e96282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
    <Container ref={contactRef} paddingTop={'20px'} w={'full'} pb={5}
    h={'full'}
    background='fixed'
    backgroundImage={ colorMode==="light"?
      'url(https://images.unsplash.com/photo-1653289755854-a41949e96282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)' :
     'url(https://images.unsplash.com/photo-1530819568329-97653eafbbfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80)'
    }
    backgroundSize={'cover'}
    backgroundPosition={'center center'} maxW="full" mt={0} centerContent overflow="hidden">
      <ScrollAnimation animateIn='animate__bounceInDown' animateOnce duration={1.5}>
      <Flex>
      {/* #02054B */}
        <Box
          bg={colorMode==="light"? "linear-gradient(to left, #c1c8e4, #b8c9e8, #aec9ea, #a3cbec, #96cced, #8dcbed, #83caec, #79c9eb, #71c5eb, #69c1ea, #62bdea, #5ab9ea)" : "linear-gradient(to right, #25274d, #2b2d52, #313356, #383a5b, #3e4060, #404565, #414a6b, #434f70, #3f5477, #3a597e, #335f84, #29648a)"}
          color={colorMode==="light"? "#1a202c" : "white"}
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact me</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color={colorMode==="light"? "#424656":"silver"}>
                    Fill up the form to contact Me
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }} >
                    <VStack pl={0} spacing={3} align={'flex-start'}>
                      <Button
                        size="md"
                        height="48px"
                        width="250px"
                        variant="ghost"
                        color={colorMode==="light"? "#1a202c" : "white"}
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                        +91-9080855112
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="250px"
                        variant="ghost"
                        color={colorMode==="light"? "#1a202c" : "white"}
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                        mdharishz786@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="250px"
                        variant="ghost"
                        color={colorMode==="light"? "#1a202c" : "white"}
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                        Salem, Tamil Nadu
                      </Button>
                    </VStack>
                  </Box>
                
                  <HStack
                  
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    
                    <IconButton
                    as={'a'}
                    href="https://www.facebook.com/mohamed.haris.92351"
                    target={'_blank'}
                    // transition='all 1s'
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<MdFacebook size="30px" />}
                    />
                   
                    <IconButton
                    as={'a'}
                    href="https://github.com/mdharis107"
                    target={'_blank'}
                    // transition='all 0.5s'
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsGithub size="28px" />}
                    />
                   
                   <IconButton
                   as={'a'}
                   href='https://www.linkedin.com/in/mohamed-haris'
                   target={'_blank'}
                      aria-label="linkdin"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsLinkedin size="28px" />}
                    />
                  </HStack>
                
                </Box>
              </WrapItem>
             
              <WrapItem>
                <Box bg={colorMode==="light"? "white" : "#424656"} borderRadius="lg">
                  <Box m={8} color={colorMode==="light"?"#0B0E3F": "white"}>
                    <form  ref={form} onSubmit={sendEmail} >
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" name="user_name" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="email" name="user_email" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                        name="message"
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                         type="submit" value="Send"
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          transition="0.3s ease-in-out"
                          _hover={{
                            transform: 'scale(1.10)', 
                            bg:"black",
                          color:"#0D74FF"     
                          }}
                          >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                    </form>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
      </ScrollAnimation>
    </Container>
  );
}


