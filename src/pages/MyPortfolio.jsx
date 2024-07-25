import {
  Box,
  Heading,
  Button,
  Link as ChakraLink,
  IconButton,
  Image,
  Stack,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  Grid,
  GridItem,
  useMediaQuery
} from "@chakra-ui/react";
import { Link, useLoaderData } from "react-router-dom"
import { ArrowBackIcon } from "@chakra-ui/icons";
import ProjectFooter from "../components/ProjectFooter";



export default function MyPortfolio() {

  const [isPortrait] = useMediaQuery("(orientation: portrait)");
  const projectImages = useLoaderData()



  // Repetitive CSS -------------------------------------------------------------
  const sectionImage = {
    h: (isPortrait ? "100dvw" : "100dvh"),
    w: "100dvw",
    objectFit: "cover"
  }
  const subSectionImageContainer = {
    w: "100dvw",
    maxW: "1200px",
    px: { base: "1.5rem", md: "2rem" },
    fontStyle: "italic",
    textAlign: "center",
    // bg: "red"
  }
  const subSectionImage = {
    w: "100%",
    borderRadius: "0.5rem",
    objectFit: "contain",
  }
  const sectionHeader = {
    pt: "7rem",
    w: "100dvw",
    maxW: "1440px",
    px: { base: "1.5rem", md: "2rem" },
    fontSize: { base: "1.8rem", md: "2rem", lg: "3rem" },
    fontWeight: "bold"
  }
  const twoColumnContainer = {
    flexDirection: { base: "column", md: "row" },
    w: "100dvw",
    maxW: "1200px",
    px: { base: "1.5rem", md: "2rem" },
    // bg: "red"
  }
  const subSectionHeader = {
    w: { base: "100%", md: "50%" },
    fontSize: { base: "1.5rem", lg: "2rem" }
  }
  const twoColumnText = {
    w: { base: "100%", md: "50%" },
    fontSize: {base: "1rem", lg: "1.2rem"},
    fontWeight: "bold",
    // bg: "pink"
  }
  const oneColumnText = {
    w: "100dvw",
    maxW: "1200px",
    px: { base: "1.5rem", md: "2rem" },
    fontSize: { base: "1rem", lg: "1.2rem" },
    fontWeight: "bold",
    alignItems: "flex-start",
    // bg: "orange"
  }
  // ------------------------------------------------------------------------------



  return (
    <Box
      h="100dvh"
      bg="white"
      bgGradient='linear(to-br, rgba(255,255,255,0.3), rgba(0,0,0,0.5))'
      overflow="hidden"
    >
      <VStack
        h="100dvh"
        bg="rgba(255, 255, 255, 0.3)"
        spacing="5rem"
        justifyContent="flex-start"
        overflowY="scroll"
        overflowX="hidden"
      >
        <VStack   //HERO TEXT -------------------------------------------------------
          h="60dvh"
          w="100dvw"
          maxW="1440px"
          px={{ base: "1.5rem", md: "2rem" }}
          pt="15dvh"
          alignItems="flex-start"
          justifyContent="center"
          // bg="red"
        >
          <Text
            fontSize="1.2rem"
            fontWeight="bold"
          >
            Stevano Peters | Official Website
          </Text>

          <Heading
            maxW="1000px"
            fontSize={{ base: "2rem", md: "2.5rem", lg: "4rem" }}
            fontWeight="bold"
          >
            SHOWCASING BRILLIANCE:
            <br />
            A DYNAMIC PORTFOLIO OF INNOVATION AND DESIGN.
          </Heading>
        </VStack>


        <Image //SECTION IMAGE ------------------------------------------------------------------
          src="https://via.placeholder.com/800x400?text=Hero+Image"
          // src={projectImages.heroImage}
          sx={sectionImage}
        />


        <Stack  //2 COLUMN TEXT ------------------------------------------------------------------
          sx={twoColumnContainer}
        >
          <Heading
            sx={subSectionHeader}
          >
            Project Objectives/Goals
          </Heading>

          <Text
            sx={twoColumnText}
          >
            As a multi-faceted individual skilled in front-end development, UI/UX design, brand identity, and general graphic design, I needed to present myself as an expert in these related fields. The objective of this portfolio website was to professionally display and describe the projects I have completed across these disciplines.
          </Text>
        </Stack>


        <Stack  //2 COLUMN TEXT WITH LIST ------------------------------------------------------------------
          sx={twoColumnContainer}
        >
          <Heading
            sx={subSectionHeader}
          >
            My Role
          </Heading>

          <VStack
            sx={twoColumnText}
          >
            <Text>
              I was responsible for designing and developing the Stevano Peters portfolio website, taking the project from concept to completion. My contributions included:
              <br />
              <br />
            </Text>

            <UnorderedList spacing={4}>
              <ListItem>
                UI/UX Design: <em>Creating a unique and professional representation of my personal brand.</em>
              </ListItem>
              <ListItem>
                Front-End Development: <em>Implementing the design using React JS.</em>
              </ListItem>
              <ListItem>
                Brand Identity: <em>Developing a new logo and visual identity.</em>
              </ListItem>
              <ListItem>
                Database Integration: <em>Hosting heavier elements separately and calling them via endpoints to enhance user experience.</em>
              </ListItem>
            </UnorderedList>

          </VStack>

        </Stack>


        <Stack  //2 COLUMN TEXT ------------------------------------------------------------------
          sx={twoColumnContainer}
        >
          <Heading
            sx={subSectionHeader}
          >
            Technologies
          </Heading>

          <Text
            sx={twoColumnText}
          >
            React JS, Figma, Photoshop, Illustrator, Google App Scripts.
          </Text>
        </Stack>


        <VStack  //IMAGE ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src="https://via.placeholder.com/800x400?text=Animation"
            // src={projectImages.splashImage}
            sx={subSectionImage}
          />
        </VStack>


        <Heading  //SECTION TITLE ------------------------------------------------------------------
          sx={sectionHeader}
        >
          CHALLENGES MET WITH CREATIVE SOLUTIONS
        </Heading>


        <Image //SECTION IMAGE ------------------------------------------------------------------
          src="https://via.placeholder.com/800x400?text=Section+Hero"
          // src={projectImages.researchHero}
          sx={sectionImage}
        />


        <Stack  //2 COLUMN TEXT ------------------------------------------------------------------
          sx={twoColumnContainer}
        >
          <Heading
            sx={subSectionHeader}
          >
            Brand Representation
          </Heading>

          <Text
            sx={twoColumnText}
          >
            The first task was Creating a unique and professional representation of my personal brand "Stevano Peters".
            <br />
            <br />
            I Designed a new logo inspired by electronic circuitry and futuristic dashboard UIs. The logo combines my initials "S.P." and my nickname/gamertag "vanodee".
            <br />
            The initials take centre stage, flowing into eachother like paths on a circuit board and cryptic symbols on each side of the logo, spell out "vano" [left-side] and "dee" [right-side].
          </Text>
        </Stack>


        <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src="https://via.placeholder.com/800x400?text=Logo+Design+Process"
            // src={projectImages.journeyMap}
            sx={subSectionImage}
          />

          <Text>Logo Design Process.</Text>
        </VStack>


        <Stack  //2 COLUMN TEXT ------------------------------------------------------------------
          sx={twoColumnContainer}
        >
          <Heading
            sx={subSectionHeader}
          >
            Brand Colors
          </Heading>

          <Text
            sx={twoColumnText}
          >
            In pervious iterations of my portfolio, I have struggled with picking brand colors for myself <em>(I usually stick with black and white)</em> and as someone who creates brand identities for others, It's quite ironic.
            <br />
            <br />
            For this iteration, I employed a unique approach where the site's background color changes to match the color theme of the selected project, maintaining emphasis on the projects while using shades of grey for the rest of the site. [Accessibility considerations were also made to accomodate this feature]
          </Text>
        </Stack>


        <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src="https://via.placeholder.com/800x400?text=Color+Change+Showcase"
            // src={projectImages.journeyMap}
            sx={subSectionImage}
          />

          <Text>The Website's Background color changes to match the theme of the selected project.</Text>
        </VStack>


        <Stack  //2 COLUMN TEXT ------------------------------------------------------------------
          sx={twoColumnContainer}
        >
          <Heading
            sx={subSectionHeader}
          >
            Project Arrangement
          </Heading>

          <Text
            sx={twoColumnText}
          >
            Considering the portfolio would contain projects from various fields, Arranging them was a task that needed to be done with great precision.
            <br />
            <br />
            I drew inspiration from the UIs of two of my favourite videogames: <em>Apex Legends</em> and <em>The Finals</em>, displaying projects in a central space with tabs for project categories. This minimalist design with semi-glasmorphic elements ensures easy navigation and a clean aesthetic.
          </Text>
        </Stack>


        <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src="https://via.placeholder.com/800x400?text=Apex+Legends"
            // src={projectImages.journeyMap}
            sx={subSectionImage}
          />

          <Text>Apex Legends UI.</Text>
        </VStack>


        <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src="https://via.placeholder.com/800x400?text=Finals"
            // src={projectImages.journeyMap}
            sx={subSectionImage}
          />

          <Text>The Finals UI.</Text>
        </VStack>


        <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src="https://via.placeholder.com/800x400?text=Projects+Section"
            // src={projectImages.journeyMap}
            sx={subSectionImage}
          />

          <Text>Finished Projects Section</Text>
        </VStack>


        <Stack  //2 COLUMN TEXT ------------------------------------------------------------------
          sx={twoColumnContainer}
        >
          <Heading
            sx={subSectionHeader}
          >
            Performance Optimization
          </Heading>

          <Text
            sx={twoColumnText}
          >
            Another challenge was managing large amounts of project information without slowing down the site.
            <br />
            <br />
            I used a database to host heavier elements separately, calling them via endpoints when needed. Some pages are generated entirely from endpoints, providing layout components rather than hard-coding them individually.
          </Text>
        </Stack>


        <Heading  //SECTION TITLE ------------------------------------------------------------------
          sx={sectionHeader}
        >
          FINAL THOUGHTS / TAKEAWAYS
        </Heading>


        <Image //SECTION IMAGE ------------------------------------------------------------------
          src="https://via.placeholder.com/800x400?text=Section+Hero"
          // src={projectImages.researchHero}
          sx={sectionImage}
        />


        <Stack  //2 COLUMN TEXT WITH LIST ------------------------------------------------------------------
          sx={twoColumnContainer}
        >
          <Heading
            sx={subSectionHeader}
          >
            Notable Outcomes
          </Heading>

          <VStack
            sx={twoColumnText}
          >
            <UnorderedList spacing={4}>
              <ListItem>
                Professional Presentation: The website acts as a professional and well-thought-out platform to display and describe my projects to potential clients and employers.
              </ListItem>
              <ListItem>
                Skill Enhancement: The project provided an opportunity to sharpen my existing skills and showcase my expertise in front-end development, UI/UX design, and brand identity.
              </ListItem>
            </UnorderedList>

          </VStack>

        </Stack>


        <Text   //1-COLUMN TEXT ------------------------------------------------------------------
          sx={oneColumnText}
        >
          Stevano Peters' Official Website effectively presents my diverse skill set and completed projects, offering a professional platform to attract potential clients and employers while highlighting my unique design approach and technical proficiency.
          <br />
          <br />
        </Text>


        <ChakraLink
          href=""
          isExternal
          alignSelf="center"
        >
          <Button
            variant="outline"
            colorScheme="black"
            size={{ base: "md", md: "lg" }}
          >
            Explore the Website
          </Button>
        </ChakraLink>


        {/* FOOTER -------------------------------------------------------------------------------------- */}
        <ProjectFooter />

      </VStack>

    </Box>
  )
}


// LOADER
export const my_portfolio_loader = async () => {
  const res = await fetch('http://localhost:4000/front_end_projects/2');
  return res.json();
}