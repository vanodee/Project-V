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
import { EndpointVar } from "../components/EndpointVar";



export default function Singleton() {

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
        fontSize: { base: "1rem", lg: "1.2rem" },
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
                bg={projectImages.previewColor}
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
                        How Do You Singleton ?
                    </Text>

                    <Heading
                        maxW="1000px"
                        fontSize={{ base: "2rem", md: "2.5rem", lg: "4rem" }}
                        fontWeight="bold"
                    >
                        EXPLORE, BOOK & ENJOY:
                        <br />
                        AN INTERACTIVE GUIDE TO THE SINGLETON EXPERIENCE.
                    </Heading>
                </VStack>


                <Image //SECTION IMAGE ------------------------------------------------------------------
                    // src="https://via.placeholder.com/800x400?text=Hero+Image"
                    src={projectImages.heroImage}
                    sx={sectionImage}
                />


                <Stack  //2 COLUMN TEXT WITH LIST ------------------------------------------------------------------
                    sx={twoColumnContainer}
                >
                    <Heading
                        sx={subSectionHeader}
                    >
                        Project Objectives/Goals
                    </Heading>

                    <VStack
                        sx={twoColumnText}
                    >
                        <Text>
                            The "How Do You Singleton?" (HDYS) campaign is a marketing initiative for The Singleton whiskey brand. Executed by IdeaHouse Media here in Lagos, Nigeria, the campaign involved a private event with various branded attractions showcasing The Singleton's cocktails. The primary aim of the engagement microsite was to:
                            <br />
                            <br />
                        </Text>

                        <UnorderedList spacing={4}>
                            <ListItem>
                                Sensitize attendees about the event attractions.
                            </ListItem>
                            <ListItem>
                                Enable attendees to book slots for certain attractions.
                            </ListItem>
                            <ListItem>
                                Collect valuable attendee feedback for the client.
                            </ListItem>
                        </UnorderedList>

                    </VStack>

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
                            I was responsible for designing and developing the HDYS engagement microsite, overseeing the project from concept to completion. This involved:
                            <br />
                            <br />
                        </Text>

                        <UnorderedList spacing={4}>
                            <ListItem>
                                UI/UX Design: <em>Creating an intuitive and visually appealing interface.</em>
                            </ListItem>
                            <ListItem>
                                Front-End Development: <em>Implementing the design using React JS.</em>
                            </ListItem>
                            <ListItem>
                                Data Collation: <em>Using Google App Scripts and Google Sheets to gather and store user data efficiently.</em>
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
                        React JS, Google App Scripts, Google Sheets, Figma, Photoshop.
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
                    SETBACKS & SAVVY SOLUTIONS
                </Heading>


                <Image //SECTION IMAGE ------------------------------------------------------------------
                    // src="https://via.placeholder.com/800x400?text=Section+Hero"
                    src={projectImages.hero2}
                    sx={sectionImage}
                />


                <Stack  //2 COLUMN TEXT ------------------------------------------------------------------
                    sx={twoColumnContainer}
                >
                    <Heading
                        sx={subSectionHeader}
                    >
                        Design Direction
                    </Heading>

                    <Text
                        sx={twoColumnText}
                    >
                        The client lacked a clear design direction, initially finding my preliminary designs impressive but incomplete. During an earlier meeting with the client brand, they stated that my preliminary designs in Figma were fantastic, but "lacked a little something".
                    </Text>
                </Stack>


                <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Image
                        src="https://via.placeholder.com/800x400?text=Initial+Figma+Designs"
                        // src={projectImages.journeyMap}
                        sx={subSectionImage}
                    />

                    <Text>Initial Figma Prototype for the microsite.</Text>
                </VStack>


                <Text   //1-COLUMN TEXT ------------------------------------------------------------------
                    sx={oneColumnText}
                >
                    Keeping the client representative's comment in mind, I requested access to campaign-specific infographic materials and used these .PSD files to refine the design, which ultimately satisfied the client.
                    <br />
                    <br />
                </Text>


                {/* <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Image
                        src="https://via.placeholder.com/800x400?text=HDYS+Campaign+Infographics"
                        // src={projectImages.journeyMap}
                        sx={subSectionImage}
                    />

                    <Text>Some HDYS Campaign Infographics provided by the client</Text>
                </VStack> */}


                <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Image
                        src="https://via.placeholder.com/800x400?text=Refined+Website+Design"
                        // src={projectImages.journeyMap}
                        sx={subSectionImage}
                    />

                    <Text>Refined Website Design</Text>
                </VStack>


                <Stack  //2 COLUMN TEXT ------------------------------------------------------------------
                    sx={twoColumnContainer}
                >
                    <Heading
                        sx={subSectionHeader}
                    >
                        Data Accessibility
                    </Heading>

                    <Text
                        sx={twoColumnText}
                    >
                        The client needed easily accessible and usable data. My contact person at IdeaHouse Media stated:
                        <br />
                        <br />
                        <em>"...my team and I aren't technical software people, so something simple and easy to use would be appreciated..."</em>
                        <br />
                        <br />
                        Leveraging Google's App Scripts, I was able to send data colected on the website to Google Sheets files within the company's Google Workspace, ensuring simplicity and security. The team was particularly impressed with this solution, as the data could be readily analyzed after the event.
                    </Text>
                </Stack>


                <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Image
                        src="https://via.placeholder.com/800x400?text=Google+Scripts+Showcase"
                        // src={projectImages.journeyMap}
                        sx={subSectionImage}
                    />

                    <Text>Data from the website being securely sent to a Google Sheets file</Text>
                </VStack>


                <Stack  //2 COLUMN TEXT ------------------------------------------------------------------
                    sx={twoColumnContainer}
                >
                    <Heading
                        sx={subSectionHeader}
                    >
                        User-Friendly Interface
                    </Heading>

                    <Text
                        sx={twoColumnText}
                    >
                        While discussing the layout of the website, the client mentioned that they did not want attendees spending too much time on the website as it should be an accessory to the event and not an event in of itself. The website needed to be easy to navigate, serving as an event accessory without distracting attendees.
                        <br />
                        <br />
                        In order to ensure a smooth user experience, I structured the site into three main sections (Hero, Attractions, Feedback) with CSS mandatory scroll for ease of navigation. A 3D venue map with clickable bubbles provided intuitive access to attraction details.
                    </Text>
                </Stack>


                <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Image
                        // src="https://via.placeholder.com/800x400?text=Mobile+Overview"
                        src={projectImages.mobileUI}
                        sx={subSectionImage}
                    />

                    <Text>The Final Website's naviagation was smooth and easy</Text>
                </VStack>


                <Stack  //2 COLUMN TEXT ------------------------------------------------------------------
                    sx={twoColumnContainer}
                >
                    <Heading
                        sx={subSectionHeader}
                    >
                        Booking System
                    </Heading>

                    <Text
                        sx={twoColumnText}
                    >
                        One of the major attractions at the event was a DIY cocktail stand, where attendees would have a one-on-one with professional mixologists, walking them through how to make their favorite cocktails. one of my tasks was Implementing a booking system for the DIY cocktail stand to manage crowd control and data collection.
                        <br />
                        <br />
                        I built a simplified booking system, utilizing Google App Scripts for data collation once more, and trained mixologists on validating bookings during the event.
                    </Text>
                </Stack>


                <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Image
                        // src="https://via.placeholder.com/800x400?text=Mobile+Overview"
                        src={projectImages.bookingImg}
                        sx={subSectionImage}
                    />

                    <Text>Successful Booking Modal</Text>
                </VStack>

                <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Image
                        src="https://via.placeholder.com/800x400?text=Mobile+Overview"
                        // src={projectImages.journeyMap}
                        sx={subSectionImage}
                    />

                    <Text>Booking System in action/Mixologists at the Cocktail Stand</Text>
                </VStack>


                <Heading  //SECTION TITLE ------------------------------------------------------------------
                    sx={sectionHeader}
                >
                    FINAL THOUGHTS / TAKEAWAYS
                </Heading>


                <Image //SECTION IMAGE ------------------------------------------------------------------
                    // src="https://via.placeholder.com/800x400?text=Section+Hero"
                    src={projectImages.hero3}
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
                                Data Collection: <em>Over 120 unique data entries from approximately 170 attendees.</em>
                            </ListItem>
                            <ListItem>
                                Booking System: <em>The DIY cocktail stand had over 100 bookings, with 82 confirmed.</em>
                            </ListItem>
                            <ListItem>
                                Client Feedback: <em>The Client gave positive remarks all-round on the user interface and data collation efficiency.</em>
                            </ListItem>
                        </UnorderedList>

                    </VStack>

                </Stack>


                <Text   //1-COLUMN TEXT ------------------------------------------------------------------
                    sx={oneColumnText}
                >
                    The "How Do You Singleton?" engagement website successfully met its objectives, providing an intuitive user experience, efficient data collection, and valuable insights for The Singleton's marketing campaign.
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
                        Visit the HDYS Engagement Website
                    </Button>
                </ChakraLink>


                {/* FOOTER -------------------------------------------------------------------------------------- */}
                <ProjectFooter />

            </VStack>

        </Box>
    )
}


// LOADER
export const singleton_loader = async () => {
    const res = await fetch(`${EndpointVar}/front_end_projects/singleton_project`);
    return res.json();
}