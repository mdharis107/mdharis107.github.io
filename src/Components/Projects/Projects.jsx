import styles from "./ProjectCard.module.css"
import {
  SiJavascript,
} from "react-icons/si";
import {
  FaGitAlt,
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";

import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { useState } from "react";
import ProjectCard from "./ProjectsCard";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};


export default function Project({projectRef}) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  // const [slider, setSlider] = useState<Slider | null>(null);
  const [slider, setSlider] = useState(null);
  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "YOOX - Clone",
      link: "https://candid-starship-25c3ab.netlify.app/",
      url: "https://github.com/arulxavierax/Project-U2-YOOX",
      description:
        "A web application for buying at for men’s, women’s, and kids dresses.",
      language:[
        {
          html: <FaHtml5 />,
          css:<FaCss3Alt />,
          js:<SiJavascript />
        },
      ],
      project:
        "https://user-images.githubusercontent.com/104049398/190868426-c5f0734a-a469-4280-bbb7-e597a0c5a7cb.png",
      image:
        'linear-gradient(to bottom, #303136, #393f54, #414d75, #485c96, #4e6bb9, #5470c7, #5b75d6, #6479e4, #6e73e0, #776ddb, #8067d6, #8860d0);',
    },
    {
      title: "bewakoof - Clone",
      link: "https://jazzy-cocada-65d352.netlify.app/",
      url: "https://github.com/shubhrakantighosh/meanbuy",
      description:
        "A web application for buying at for men’s, women’s, and kids accessories.",
      // language: " Html , Css , Javascript",
      language:[
        {
          html: <FaHtml5 />,
          css:<FaCss3Alt />,
          js:<SiJavascript />
        },
      ],
      project:
        "https://user-images.githubusercontent.com/104049398/190868611-1d2472d8-e07f-4984-b16e-9d2ddde4e281.png",
      image:
        'linear-gradient(to bottom, #25274d, #2d294d, #342b4e, #3a2e4e, #3f304e, #473558, #503961, #593e6b, #664682, #734e9b, #7e57b5, #8860d0);',
    },
    {
      title: "Toggl-Track Clone",
      link: "https://toggl-track-by-gas-face-3608.netlify.app/",
      url: "https://github.com/abhijitnr/-gas-face-3608",
      description:
      "A web application for Time tracking for better work, not overwork.",
      // language: " Html , Css , Javascript",
      language:[
        {
          html: <FaHtml5 />,
          css:<FaCss3Alt />,
          js:<SiJavascript />,
          boots:<FaBootstrap/>
        },
      ],
      project:
        "https://user-images.githubusercontent.com/104049398/190869884-4e009c70-e1ef-473f-b4cc-09bb620b6454.png",
      image:
        'linear-gradient(to bottom, #25274d, #2d294d, #342b4e, #3a2e4e, #3f304e, #473558, #503961, #593e6b, #664682, #734e9b, #7e57b5, #8860d0);',
    },
  ];

  return (
    <Box
    ref={projectRef}
    // justify={'center'}
    // alignItems={'center'}
      position={'relative'}
      height={'700px'}
      width={'full'}
      // margin={'auto'}
      overflow={'hidden'}>


      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />


      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>


      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>


      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
          
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={card.image}>



            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px"  position="relative">
              {/* <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text>
              </Stack> */}
              <ProjectCard key={card.index} lang={card.language} picture={card.project} title={card.title} desc={card.description} deploy={card.link} live={card.url} />
            </Container>
          </Box>
        ))}


      </Slider>
    </Box>
  );
}