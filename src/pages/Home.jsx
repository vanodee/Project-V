import { Box, Button, Grid, GridItem, HStack, Text, Image, VStack, Heading, Img } from "@chakra-ui/react"
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
    <Box as="main" h={'100vh'} >
      {/* HERO SECTION -----------------------------*/}
      <Box
        h={{base:'57vh', md:'75vh'}}
        display={'flex'}
        alignItems={'end'}
        justifyContent={'center'}
      >
        <Image
          src={HeroImage}
          h={{base:'45vh', md:'60vh'}}
        />
      </Box>

      {/* INFO SECTION -----------------------------*/}
      <Box
        h={{base:'43vh', md:'25vh'}}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Grid
          templateColumns={{ sm: 'repeat(4, 1fr)', md: 'repeat(8, 1fr)' }}
          w={{sm:'500px', md:'700px', lg:'800px'}}
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
                size={'sm'}
                color={'white'}
                textShadow='0px 2px rgba(0, 0, 0, 0.8)'
                transform='rotate(-90deg)'
                mx='-2rem'
              >
                CERTIFIED
              </Heading>

              <VStack>
                {
                  certifiedLogos.map((certifiedLogo) => (
                    <Image
                      key={certifiedLogo.id}
                      src={certifiedLogo.logo}
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
                    px={{ base: '0.2rem', md: '0.5rem', lg: '1rem' }}
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
