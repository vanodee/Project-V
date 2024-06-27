import { Box, Button, Grid, GridItem, HStack, Text, Image, VStack, Heading } from "@chakra-ui/react"
import HeroImage from '../assets/hero_image.webp'
import { ArrowForwardIcon } from "@chakra-ui/icons"

//IMPORT LOGOS
import Meta from '../assets/Meta.webp'
import Google from '../assets/Google.webp'
import Figma from '../assets/Figma.webp'
import Illustrator from '../assets/Illustrator.webp'
import JavaScript from '../assets/JavaScript.webp'
import Photoshop from '../assets/Photoshop.webp'
import ReactLogo from '../assets/React.webp'
import VScode from '../assets/VS Code.webp'
import WordPress from '../assets/WordPress.webp'



export default function Home() {

  const certifiedLogos = [
    {
      id: 1,
      logo: Google
    },
    {
      id: 2,
      logo: Meta
    },
  ];

  const toolkitLogos = [
    {
      id: 1,
      logo: ReactLogo
    },
    {
      id: 2,
      logo: JavaScript
    },
    {
      id: 3,
      logo: VScode
    },
    {
      id: 4,
      logo: WordPress
    },
    {
      id: 5,
      logo: Figma
    },
    {
      id: 6,
      logo: Photoshop
    },
    {
      id: 7,
      logo: Illustrator
    },
  ];


  return (
    <Box h={'100dvh'} >
      {/* HERO SECTION -----------------------------*/}
      <Box
        h={{base:'57dvh', md:'75dvh'}}
        display={'flex'}
        alignItems={'end'}
        justifyContent={'center'}
      >
        <Image
          src={HeroImage}
          h={{base:'40dvh', md:'60dvh'}}
        />
      </Box>

      {/* INFO SECTION -----------------------------*/}
      <Box
        h={{base:'43dvh', md:'25dvh'}}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Grid
          templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(8, 1fr)' }}
          w={{base:'500px', md:'700px', lg:'800px'}}
          gap={'1rem'}
          px={'1rem'}
          alignItems={'center'}
        >
          <GridItem
            colSpan={{ base: '1', md: '2' }}
            borderRadius={'20px'}
            bgColor='rgba(0, 0, 0, 0.5)'
            h='100%'
            py='0.5rem'
            alignContent={'center'}
          >
            <HStack
              justifyContent={'center'}
            >
              <Heading
                fontSize={{base:"0.7rem", lg:"1rem"}}
                color={'white'}
                textShadow='0px 2px rgba(0, 0, 0, 0.8)'
                transform='rotate(-90deg)'
                mx='-1.5rem'
              >
                CERTIFIED
              </Heading>

              <VStack>
                {
                  certifiedLogos.map((certifiedLogo) => (
                    <Image
                      key={certifiedLogo.id}
                      src={certifiedLogo.logo}
                      h={{ base: "1.5rem", lg: "2rem" }}
                    />
                  ))
                }
              </VStack>
            </HStack>
          </GridItem>

          <GridItem
            colSpan={{ base: '3' }}
            borderRadius={'20px'}
            bgColor='rgba(0, 0, 0, 0.5)'
            py="0.5rem"
            h='100%'
          >
            <Box
              h={'100%'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Heading
                fontSize={{ md: '1rem', lg: '1.3rem' }}
                color={'white'}
                textShadow='0px 2px rgba(0, 0, 0, 0.8)'
              >
                <ul>
                  <li>Front-End Dev</li>
                  <li>UI/UX Designer</li>
                  <li>Graphic Designer</li>
                </ul>
              </Heading>
            </Box>
          </GridItem>

          <GridItem
            colSpan={{ base: '4', md: '3' }}
            borderRadius={'20px'}
            bgColor='rgba(0, 0, 0, 0.5)'
            h='100%'
            py='1rem'
          >
            <Box
              h={'100%'}
              display={'flex'}
              flexWrap={'wrap'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              {
                toolkitLogos.map((toolkitLogo) => (
                  <Image
                    key={toolkitLogo.id}
                    src={toolkitLogo.logo}
                    h={{ base: "1.5rem", lg:"2rem" }}
                    px={{ base: '0.2rem', lg: '1rem' }}
                  />
                ))
              }
            </Box>
          </GridItem>

        </Grid>
      </Box>

    </Box>
  )
}
