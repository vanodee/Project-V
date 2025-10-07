import {
  Box,
  Heading,
  Stack,
  VStack,
  Text,
  useMediaQuery
} from "@chakra-ui/react"
import ImageCarousel from "../components/ImageCarousel";



export default function About() {

  const [isPortrait] = useMediaQuery("(orientation: portrait)");

  return (
    <Box
      display="flex"
      alignItems='flex-start'
      justifyContent='center'
      h='100dvh'
      pt={{
        base: "10dvh",
        md: (isPortrait ? "" : "15dvh"),
        // lg:"10dvh"
      }}
    >
      <Stack
        spacing={0}
        direction={isPortrait ? "column" : "row"}
        h="95%"
        maxH={isPortrait ? "" : "800px"}
        w="95%"
        maxW={{
          base: "700px",
          md: (isPortrait ? "" : "95%"),
          lg: (isPortrait ? "800px" : "95%"),
          xl: (isPortrait ? "900px" : "1440px")
        }}
        // bg="pink"
      >
        <Box
          display="flex"
          alignItems='center'
          justifyContent='center'
          h={isPortrait ? "50%" : "100%"}
          w={isPortrait ? "100%" : "55%"}
          // bg="blue"
        >
          <ImageCarousel />
        </Box>

        <VStack
          spacing="1rem"
          // bgGradient='linear(to-br, rgba(0,0,0,0.45), rgba(0,0,0,0.85))'
          bgColor='rgba(0, 0, 0, 0.7)'
          backdropFilter='auto'
          backdropBlur='15px'
          borderRadius="1rem"
          p={{ base: "5%", md: "3%" }}
          h={isPortrait ? "50%" : "100%"}
          w={isPortrait ? "100%" : "45%"}
          color="white"
          // textShadow="0px 2px rgba(0, 0, 0, 0.8)"
        >
          <Heading
            fontSize={{
              base: "1.5rem",
              md: (isPortrait && "2rem"),
              lg: "2.5rem"
            }}
          >
            NICE TO MEET YOU...
          </Heading>

          <Box
            overflow="hidden"
            overflowY="scroll"
            sx={{
                "&::-webkit-scrollbar": {
                  display: "none", // Hide the scrollbar
                },
              }}
          >
            <Text
              fontSize="1rem"
            >
              I'm Stevano Peters, a passionate Developer and Designer with a focus on Front-End Development, UI/UX, and Brand Identity Design. I bring ideas to life at the intersection of creativity and functionality, crafting digital experiences that not only look great but feel intuitive and deliver measurable results.
              <br />
              <br />
              With over 5 years of experience, I've had the privilege of designing and developing for startups, agencies, and global brands; leading web design projects for Pretsl (via Peanut Technologies), and building clean, scalable, and user-focused websites using React, Webflow, WordPress, and Toast's POS Website Builder.
              <br />
              <br />
              I thrive on collaboration and clear communication, working closely with clients and teams to translate complex goals into actionable, human-centered solutions. Every project I take on is driven by a single question: <em>"How can this design make someone's experience smoother, smarter, or more meaningful?"</em>. 
              <br />
              <br />
              Beyond design, I'm a music producer and creative explorer, constantly inspired by rhythm, storytelling, and visual worlds. Whether I'm designing a brand system, prototyping an interface, or producing a beat, my process is rooted in experimentation, problem-solving, and the pursuit of impact.
              <br />
              <br />
              In essence, I'm a multidisciplinary digital creative who believes great design lives where logic meets emotion. I'm always open to new challenges, collaborations, and opportunities to build products that connect with people and push ideas forward.


            </Text>
          </Box>

        </VStack>

      </Stack>

    </Box>
  )
}
