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
          h={isPortrait ? "55%" : "100%"}
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
          p={{ base: "5%", md: "2%" }}
          h={isPortrait ? "45%" : "100%"}
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
          >
            <Text
              fontSize="1rem"
            >
              Stevano Peters is a passionate digital designer with a focus on UI/UX and Brand Identity Design. My work is driven by a deep appreciation for creativity and a keen interest in all design-related subjects. I thrive on functional design projects that require innovative problem-solving to create purposeful and actionable solutions.
              As a designer, my ultimate goal is to deliver designs that align with the vision and goals of my clients or the company I work with, while keeping their end users in mind. I believe in the power of effective communication and collaboration, and I actively engage with clients and project teams throughout the design process. By fostering open lines of communication, I ensure that the final design solution not only meets but exceeds expectations.
              When I'm not immersed in the world of design, I channel my creative energy into various other outlets. I am a music producer, constantly exploring new sonic landscapes and crafting unique compositions. Additionally, I enjoy creating online content to share my knowledge and insights with a wider audience. Video games, particularly Apex Legends, provide me with a recreational escape and a source of inspiration for my design work. I am always seeking opportunities to level up my existing skills and dive into new areas of learning, expanding my expertise and staying at the forefront of the ever-evolving design industry.
              In summary, I am a dedicated digital designer who is driven by a passion for creativity and problem-solving. With a focus on UI/UX and Brand Identity Design, I strive to deliver functional and professional design solutions that exceed expectations. By fostering open communication and embracing a multidisciplinary approach, I consistently create impactful designs that resonate with clients and users alike.
            </Text>
          </Box>

        </VStack>

      </Stack>

    </Box>
  )
}
