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
          p={{ base: "5%", md: "2%" }}
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
          >
            <Text
              fontSize="1rem"
            >
              My name is Stevano Dikedi Peters, and I am a passionate Developer/Designer with a focus on Front-End Development, UI/UX, and Brand Identity Design. My work is driven by a deep appreciation for creativity and a keen interest in all design-related subjects. I thrive on tackling projects that demand innovative problem-solving, aiming to create purposeful and actionable solutions that align with the vision and goals of my clients or the companies I work with, while always keeping the end user in mind.
              <br />
              <br />
              Effective communication and collaboration are at the heart of my design process. I actively engage with clients and project teams throughout every phase, ensuring that the final solution not only meets but exceeds expectations. I am always on the lookout for opportunities to enhance my skills and explore new areas of learning, staying at the forefront of the ever-evolving design industry.
              <br />
              <br />
              When I'm not immersed in the world of design, I channel my creativity into music production, exploring new sonic landscapes and crafting unique compositions. I also find inspiration in video games, whether through team-based experiences like <em>"Apex Legends"</em> and <em>"The Finals"</em> or narrative-driven adventures like <em>"CyberPunk 2077"</em> and <em>"Control."</em>
              <br />
              <br />
              In summary, I am a dedicated digital designer with a passion for creativity and problem-solving. Specializing in Front-End Development, UI/UX, and Brand Identity Design, I strive to deliver functional and professional solutions that exceed expectations. By fostering open communication and embracing a multidisciplinary approach, I consistently create impactful designs that resonate with clients and users alike.


            </Text>
          </Box>

        </VStack>

      </Stack>

    </Box>
  )
}
