import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { SiLinktree } from "react-icons/si"
  import {BsGithub,BsLinkedin} from "react-icons/bs"
//   import { MdFacebook } from "react-icons/md"
//   import { ReactNode } from 'react';
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        
        rounded={'full'}
        w={8}
        h={8}
        target="_blank"
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer({colorMode}) {
    return (
      <Box
      
      bg={colorMode==="light"? "linear-gradient(to left, #c1c8e4, #b8c9e8, #aec9ea, #a3cbec, #96cced, #8dcbed, #83caec, #79c9eb, #71c5eb, #69c1ea, #62bdea, #5ab9ea)" : "linear-gradient(to right, #25274d, #2b2d52, #313356, #383a5b, #3e4060, #404565, #414a6b, #434f70, #3f5477, #3a597e, #335f84, #29648a)"}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={3}
          
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2022 Designed and bulit by Mohamed Haris with ❤️</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Github'} href={'https://github.com/mdharis107'}>
              <BsGithub />
            </SocialButton>
            <SocialButton label={'Linktree'} href={'https://linktr.ee/mdharis107'}>
              <SiLinktree />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://instagram.com/haris_husler?igshid=YmMyMTA2M2Y='}>
              <FaInstagram />
            </SocialButton>
            {/* <SocialButton label={'Twitter'} href={'#'}>
              <BsLinkedin />
            </SocialButton>
            <SocialButton label={'Twitter'} href={'#'}>
              <MdFacebook />
            </SocialButton> */}
          </Stack>
        </Container>
      </Box>
    );
  }