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
  useMediaQuery
} from "@chakra-ui/react";
import { Link, useLoaderData } from "react-router-dom"
import { ArrowBackIcon } from "@chakra-ui/icons";
import ProjectFooter from "../components/ProjectFooter";



export default function StellasGarage() {

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
        bg="rgba(254, 226, 100, 0.3)"
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
            Stella's Garage Car Dealership Website
          </Text>

          <Heading
            maxW="1000px"
            fontSize={{ base: "2rem", md: "2.5rem", lg: "4rem" }}
            fontWeight="bold"
          >
            A PLATFORM TO SIMPLIFY YOUR CAR PURCHASING DECISIONS.
          </Heading>
        </VStack>


        <Image //SECTION IMAGE ------------------------------------------------------------------
          // src="https://via.placeholder.com/800x400?text=Hero+Image"
          src={projectImages.heroImage}
          sx={sectionImage}
        />


        <Stack  //2 COLUMN TEXT ------------------------------------------------------------------
          sx={twoColumnContainer}
        >
          <Heading
            sx={subSectionHeader}
          >
            The Challenge
          </Heading>

          <Text
            sx={twoColumnText}
          >
            Purchasing an Automobile seems to be a complicated affair especially for users who aren't car enthusiasts. This usually leads to bad purchase decisions and unfulfilled customers.
            <br/>
            This website aims to simplify the car purchase decision making, while ensuring utmost customer satisfaction. All within a visually appealing and functional User interface.
          </Text>
        </Stack>


        <Stack  //2 COLUMN TEXT ------------------------------------------------------------------
          sx={twoColumnContainer}
        >
          <Heading
            sx={subSectionHeader}
          >
            My Role
          </Heading>

          <Text
            sx={twoColumnText}
          >
            I played the role of UX designer, designing an app for Vee Cinemas from conception to delivery. I was also responsible for conducting interviews, paper and digital wireframing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, and iterating on designs.
            <br />
            <br />
            Project Duration: <em>Mar 2022 to Apr 2022.</em>
          </Text>
        </Stack>


        <VStack  //IMAGE ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src={projectImages.splashImage}
            sx={subSectionImage}
          />
        </VStack>


        <Heading  //SECTION TITLE ------------------------------------------------------------------
          sx={sectionHeader}
        >
          LET'S DISCUSS THE USER
        </Heading>


        <Image //SECTION IMAGE ------------------------------------------------------------------
          src={projectImages.researchHero}
          sx={sectionImage}
        />


        <VStack   //1 COLUMN TEXT WITH LIST ------------------------------------------------------------------
          sx={oneColumnText}
        >
          <Text>
            In order to properly empathise with my primary users, I needed to better understand how people think about Car Purchases, especially from local dealerships. This would give me key insights with which to improve their overall experience. The aim of this research is to:
            <br />
            <br />
          </Text>

          <UnorderedList spacing={4}>
            <ListItem>
              Discover people's current processes for buying a car, and how they feel about the overall experience.
            </ListItem>
            <ListItem>
              Learn about people's current pain points, frustrations, and barriers when they buy a car and how they would improve.
            </ListItem>
            <ListItem>
              Uncover the current tools people are using to inform their car buying decisions, and their experience with those tools. Uncover how they would improve those tools.
            </ListItem>
            <ListItem>
              Understand what a good car purchase means to people (how they define it) and why it is important to them.
            </ListItem>
          </UnorderedList>

        </VStack>


        <Stack  //2 COLUMN TEXT WITH LIST ------------------------------------------------------------------
          sx={twoColumnContainer}
        >
          <Heading
            sx={subSectionHeader}
          >
            User Survey Results
          </Heading>

          <VStack
            sx={twoColumnText}
          >
            <Text>
              A survey was conducted considering users between the ages of 19 and 45, who were car owners, aspiring car owners, car sales personnel and/or car enthusiasts. A total of 10 people who fit two or more of the aforementioned criteria were gathered on a whatsapp group and served open-ended survey questions. The following pain points were highlighted after analysis of the survey results:
              <br />
              <br />
            </Text>

            <UnorderedList spacing={4}>
              <ListItem>
                60% of participants mentioned that walk-in car dealerships tend to profile their customers and hike their prices accordingly. Stating this is why dealerships do not display their prices until asked.
              </ListItem>
              <ListItem>
                40% said car sales representatives sell sub-par vehicles to unsuspecting customers.
              </ListItem>
              <ListItem>
                20% talked about how walk-in dealerships aren't able to present their cars to customers in a visually appealing way, due to space limitations. Stating that this may influence the buyer's decision.
              </ListItem>
              <ListItem>
                70% mentioned that customers buying cars online may not be satisfied with their purchase due to lack of proper inspection, especially in the used car market.
              </ListItem>
              <ListItem>
                40% stated that customers buying online are bombarded with technical jargon rather than rather than straightforward, easy-to-understand information on the cars.
              </ListItem>
            </UnorderedList>

          </VStack>

        </Stack>


        <VStack   //PERSONAS ------------------------------------------------------------------
          spacing={10}
          w="100dvw"
          py={10}
          bg='rgba(254, 226, 100, 0.5)'
        >
          <Stack  //2 COLUMN TEXT ------------------------------------------------------------------
            sx={twoColumnContainer}
          >
            <Heading
              sx={subSectionHeader}
            >
              Personas
            </Heading>

            <Text
              sx={twoColumnText}
            >
              Meet Nathaniel and Sophia, our chosen personas for this project. They served as a means to personify our user pain points so as to make them more relatable and aid with further analysis.
            </Text>
          </Stack>


          <Stack  //2 COLUMN IMAGES ------------------------------------------------------------------
            direction={{ base: "column", md: "row" }}
            w="100dvw"
            maxW="1440px"
            px={{ base: "1.5rem", md: "2rem" }}
            // bg="red"
          >
            <Image
              src={projectImages.persona1}
              w={{ base: "100%", md: "50%" }}
              borderRadius="0.5rem"
              objectFit="cover"
            />

            <Image
              src={projectImages.persona2}
              w={{ base: "100%", md: "50%" }}
              borderRadius="0.5rem"
              objectFit="cover"
            />
          </Stack>
        </VStack>

        <Stack  //2 COLUMN TEXT ------------------------------------------------------------------
          sx={twoColumnContainer}
        >
          <Heading
            sx={subSectionHeader}
          >
            User Journey Map
          </Heading>

          <Text
            sx={twoColumnText}
          >
            In order to come up with improvement opportunities, Nathaniel and Sophia's goals were analyzed with user journey maps.
            <br />
            <br />
            Here is a look at the user journey map for Nathaniel's goal to get his first car based on his father's budget.
          </Text>
        </Stack>


        <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src={projectImages.journeyMap}
            sx={subSectionImage}
          />

          <Text>Journey map of Nathaniel's goal to purchase a good first car based on his father's budget.</Text>
        </VStack>


        <VStack   //1 COLUMN TEXT WITH LIST ------------------------------------------------------------------
          sx={oneColumnText}
        >
          <Text>
            The research revealed that buying a car is no easy task even if the customer is experienced. People looking to get a car (Irrespective of their experience level) are typically at the mercy of misinformation, or a lack there of, from the car dealers.
            <br />
            <br />
            In order to address the aforementioned issues, the overall car purchasing experience should be improved while also making things easier for first-time customers who might lack the necessary knowledge. With respect to our research, the following improvements can be made:
            <br />
            <br />
          </Text>

          <UnorderedList spacing={4}>
            <ListItem>
              One-on-one customer interaction at dealerships should be handled by credible and trustworthy members of staff.
            </ListItem>
            <ListItem>
              Online & Offline Dealerships should present sufficient & easy-to-understand information on their cars to avoid confusing or misleading buyers.
            </ListItem>
            <ListItem>
              Dealerships should include some form of return policy on their purchases, especially for online buyers who didn't physically inspect the vehicle before purchase.
            </ListItem>
            <ListItem>
              Similarly, dealerships can allow customers to schedule inspection/Test drive sessions online, so they get hands-on interaction with the cars (Only applicable if the online user is able to make the commute).
            </ListItem>
          </UnorderedList>

        </VStack>


        <Heading  //SECTION TITLE ------------------------------------------------------------------
          sx={sectionHeader}
        >
          GETTING STARTED WITH LINES & SHAPES
        </Heading>


        <Image //SECTION IMAGE ------------------------------------------------------------------
          src={projectImages.lofiHero}
          sx={sectionImage}
        />


        <Stack  //2 COLUMN TEXT ------------------------------------------------------------------
          sx={twoColumnContainer}
        >
          <Heading
            sx={subSectionHeader}
          >
            Competitive Audit & Information Architecture
          </Heading>

          <Text
            sx={twoColumnText}
          >
            With the user pain points identified, I proceeded to carry out a competitve audit to gain design insights for the website. Online car dealerships like ALBA CARS, THE ELITES and GOODWILL USED CARS, were looked into. Their websites had features that tackled some of the pain points identified. I was sure to take note of the things they did right as well as document solutions to any pitfalls I noticed.
            <br />
            <br />
            At the end of the audit, I had gathered enough information to draw up a cohesive sitemap for Stella's Garage. The aim here was to present information in a proper hierarchy while keeping important features of the site front and center. Keeping the various parts of the site presented in an organised fashion, meant the site would be easier to use.
            <br />
            <br />
          </Text>
        </Stack>


        <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src={projectImages.infoArc}
            sx={subSectionImage}
          />

          <Text>Final site map for Stella's Garage.</Text>
        </VStack>


        <Stack  //2 COLUMN TEXT ------------------------------------------------------------------
          sx={twoColumnContainer}
        >
          <Heading
            sx={subSectionHeader}
          >
            User Flow
          </Heading>

          <Text
            sx={twoColumnText}
          >
            Before drawing up the initial wireframes for the site, I decided on a simple user flow to start with: "launching the site and ordering a car". This flow was chosen in order to showcase solutions to the pain points mentioned in the survey.
          </Text>
        </Stack>


        <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src={projectImages.userFlow}
            sx={subSectionImage}
          />

          <Text>Site map for Stella's Garage.</Text>
        </VStack>


        <Stack  //2 COLUMN TEXT ------------------------------------------------------------------
          sx={twoColumnContainer}
        >
          <Heading
            sx={subSectionHeader}
          >
            Digital Wireframes
          </Heading>

          <Text
            sx={twoColumnText}
          >
            Working with the user flow diagram, the inital pages required were the Homepage, "Buy a car" page, Car details page, Payment Modal and Success modal.
            <br />
            <br />
            Taking responsiveness into consideration, mobile wireframes were developed alongside the deskop site wireframes. Most users access websites from their mobile phones as opposed to on a desktop computer.
          </Text>
        </Stack>


        <Stack  //2 COLUMN LAYOUT ------------------------------------------------------------------
          sx={twoColumnContainer}
        >
          <Image
            src={projectImages.wireframes[0]}
            w={{ base: "100%", md: "50%" }}
          />

          <Image
            src={projectImages.wireframes[1]}
            w={{ base: "100%", md: "50%" }}
          />
        </Stack>


        <Stack  //2 COLUMN LAYOUT ------------------------------------------------------------------
          sx={twoColumnContainer}
        >
          <Text
            sx={twoColumnText}
          >
            Special attention was given to the car details page. This is because the condition and features of the car need to be portrayed in a manner simple enough for users to understand. Getting this page right meant tackling one of the identified user pain points directly.
            <br />
            <br />
            There's a Gallery at the top, below that are the main specifications of the car along with payment options & at the bottom of the page is a section outlining other features the car comes with.
            <br />
            <br />
          </Text>

          <Image
            src={projectImages.wireframes[2]}
            w={{ base: "100%", md: "50%" }}
            h="fit-content"
          />

        </Stack>



        <Stack  //2 COLUMN TEXT WITH LIST ------------------------------------------------------------------
          sx={twoColumnContainer}
        >
          <Heading
            sx={subSectionHeader}
          >
            Lo-Fi Prototype & Usability Studies
          </Heading>

          <VStack
            sx={twoColumnText}
          >
            <Text>
              More wireframes were drawn up as a result of further ideation with respect to our user's pain points as well as competitive analysis findings:
              <br />
              <br />
            </Text>

            <UnorderedList spacing={4}>
              <ListItem>
                The "Sell a Car" page would offer users the chance to submit details of a car they would like to sell and book inspection meetings with the dealership.
              </ListItem>
              <ListItem>
                The "Services" page allowed users to request after sales services from dealership.
              </ListItem>
              <ListItem>
                The "Track my Orders" page would offer users the chance to monitor the location of their purchased car if they requested a delivery service.
              </ListItem>
              <ListItem>
                And lastly the "Contact Us" page would act as a means for users to make enquiries or give feedback to the dealership.
                <br />
                <br />
              </ListItem>
            </UnorderedList>

            <Text>
              During the competitve audit it was also discovered that there are different ways to fund the purchase of a car. For this prototype, the downpayment method was employed.
            </Text>

          </VStack>

        </Stack>


        <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src={projectImages.lofiPrototype}
            sx={subSectionImage}
          />

          <Text>Lo-fi Prototype layout</Text>
        </VStack>


        <Text
          sx={oneColumnText}
        >
          All wireframes were linked together to create the first low-fidelity prototype and a usability study was conducted. Although there were issues with participant availibility, with only 3 participants actually taking the study, the overall feedback was positive. Participants had no issues completing the tasks and their suggestions were noted and applied in the Hi-fi stage of the design process.
        </Text>


        <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src={projectImages.animatedLofi}
            sx={subSectionImage}
          />

          <Text>Lo-fi Prototype in Action</Text>
        </VStack>


        <Heading  //SECTION TITLE ------------------------------------------------------------------
          sx={sectionHeader}
        >
          CALLIGRAPHY, COLOURS & COMPONENTS
        </Heading>


        <Image //SECTION IMAGE ------------------------------------------------------------------
          src={projectImages.hifiHero}
          sx={sectionImage}
        />


        <Stack  //2 COLUMN TEXT ------------------------------------------------------------------
          sx={twoColumnContainer}
        >
          <Heading
            sx={subSectionHeader}
          >
            Style Guide
          </Heading>

          <Text
            sx={twoColumnText}
          >
            The logo for the fictional Stella's Garage dealership was completed within adobe illustrator. The colours for the project were chosen to give off an inviting and fun pastel look. This was to give a welcoming feeling to site visitors rather than the technical and intimidating aesthetic used by competitors. Overall, I decided on a pastel and fun looking colour scheme for the project.
            <br />
            <br />
            The main logo typeface is "Gecko Lunch" and although very aesthetic, it's not very accessible when used as anything other than a header. I proceeded to go with "Segoe UI" for the rest of the website, much easier to read.
          </Text>
        </Stack>


        <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src={projectImages.styleGuide}
            sx={subSectionImage}
          />

          <Text>Colors, Type & Logo</Text>
        </VStack>


        <Stack  //2 COLUMN TEXT ------------------------------------------------------------------
          sx={twoColumnContainer}
        >
          <Heading
            sx={subSectionHeader}
          >
            MockUps & Hi-Fi
          </Heading>

          <Text
            sx={twoColumnText}
          >
            Aside from substituting placeholders with their hifi counterparts and applying colors, bringing the design to life also required a touch of interactivity. The transitions between pages and interactive components were done to ensure a clean experience overall for the users.
          </Text>
        </Stack>


        <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src={projectImages.animatedComponents}
            sx={subSectionImage}
          />

          <Text>Interactive Components created for the Project</Text>
        </VStack>


        <Text
          sx={oneColumnText}
        >
          One noteworthy interactive component is the "Talk to a dealer" Floating Action Button (FAB), which will enable users communicate with trustworthy sales reps while navigating the site. This addresses another of our identified user pain points.
          <br />
          <br />
        </Text>


        <VStack    //HIFI MOCKUPS LAYOUT ------------------------------------------------------------------
          w= "100dvw"
          maxW= "1200px"
          px= {{base: "1.5rem", md: "2rem" }}
        >
          <Stack
            flexDir={{ base: "column", md: "row" }}
            alignItems="flex-start"
          >
            <Image
              src={projectImages.hifiMockups[0]}
              borderRadius="0.5rem"
              w={{ base: "100%", md: "50%" }}
              objectFit="contain"
            />

            <Image
              src={projectImages.hifiMockups[1]}
              borderRadius="0.5rem"
              w={{ base: "100%", md: "50%" }}
              objectFit="contain"
            />
          </Stack>

          <Stack
            flexDir={{ base: "column", md: "row" }}
            alignItems="flex-start"
          >
            <Image
              src={projectImages.hifiMockups[2]}
              borderRadius="0.5rem"
              w={{ base: "100%", md: "50%" }}
              objectFit="contain"
            />

            <Image
              src={projectImages.hifiMockups[3]}
              borderRadius="0.5rem"
              w={{ base: "100%", md: "50%" }}
              objectFit="contain"
            />
          </Stack>

          <Stack
            flexDir={{ base: "column", md: "row" }}
            alignItems="flex-start"
          >
            <Image
              src={projectImages.hifiMockups[4]}
              borderRadius="0.5rem"
              w={{ base: "100%", md: "50%" }}
              objectFit="contain"
            />

            <VStack w={{ base: "100%", md: "50%" }}>
              <Image
                src={projectImages.hifiMockups[5]}
                borderRadius="0.5rem"
                w="100%"
                objectFit="contain"
              />

              <Image
                src={projectImages.hifiMockups[6]}
                w="100%"
                borderRadius="0.5rem"
                objectFit="contain"
              />
            </VStack>

          </Stack>

          <Text>High Fidelity MockUps</Text>
        </VStack>


        <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src={projectImages.hifiPrototype}
            sx={subSectionImage}
          />

          <Text>High-Fidelity Prototyping</Text>
        </VStack>


        <Heading  //SECTION TITLE ------------------------------------------------------------------
          sx={sectionHeader}
        >
          FINAL THOUGHTS / TAKEAWAYS
        </Heading>


        <Image //SECTION IMAGE ------------------------------------------------------------------
          src={projectImages.finalHero}
          sx={sectionImage}
        />


        <VStack   //1 COLUMN TEXT WITH EXTRAS ------------------------------------------------------------------
          sx={oneColumnText}
          spacing={10}
        >
          <Text>
            The Site tackles the complexities faced by users when trying to purchase a car or even sell one they've previously purchased. It serves the purpose of bringing good customer service to its users in the form of clear and simple-to-understand information on its products, while being presented in an accessible and visually appealing format.
            <br />
            <br />
            This project offered me the chance to interact with car enthusiasts and understand some nuances that come with the purchase and maintenance of cars in general.
            <br />
            <br />
            This design also acted as my first foray into Adobe XD. I learnt a whole new workflow within XD as well as various ways iterate with ease while keeping the main purpose of a design in mind.
            <br />
            <br />
          </Text>

          <ChakraLink
            href="https://xd.adobe.com/view/a1eef350-861c-4301-a588-5cd14e29350e-f4bd/"
            isExternal
            alignSelf="center"
          >
            <Button
              variant="outline"
              colorScheme="black"
              size={{base:"md", md:"lg"}}
            >
              Mobile Hifi Prototype [Adobe XD]
            </Button>
          </ChakraLink>

          <ChakraLink
            href="https://xd.adobe.com/view/8663c47c-f1c1-4b53-90fd-29de70480560-d330/"
            isExternal
            alignSelf="center"
          >
            <Button
              variant="outline"
              colorScheme="black"
              size={{ base: "md", md: "lg" }}
            >
              Desktop Hifi Prototype [Adobe XD]
            </Button>
          </ChakraLink>

        </VStack>


        {/* FOOTER -------------------------------------------------------------------------------------- */}
        <ProjectFooter />

      </VStack>

    </Box>
  )
}


// LOADER
export const stellas_garage_loader = async () => {
  const res = await fetch('https://project-v-backend.vercel.app/ux_case_studies/2');
  return res.json();
}