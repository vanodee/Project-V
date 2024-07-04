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



export default function DrNotii() {

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
                bg="rgba(168, 19, 155, 0.3)"
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
                        Dr. Notii
                    </Text>

                    <Heading
                        maxW="1000px"
                        fontSize={{ base: "2rem", md: "2.5rem", lg: "4rem" }}
                        fontWeight="bold"
                    >
                        A TOOL THAT REMINDS YOU TO TAKE YOUR MEDICINE.
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
                        Modern medicine sometimes requires periodic use of medication in order to manage or cure medical conditions.
                        <br />
                        For various reasons, individuals can forget to take their medication at the specified times or even miss taking the medication altogether. This in turn, disrupts the healing or management process of their medical condition.
                        <br />
                        This application aims to assist it's users by notifying them when to take their medication, eventually contributing to the recovery of the user.
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
                        I played the role of UX designer, designing the Dr. Notii App and its responsive counterparts, from conception to delivery. I was also responsible for conducting research, paper and digital wireframing, low and high-fidelity prototyping, accounting for accessibility, and iterating on designs.
                        <br />
                        <br />
                        Project Duration: <em>Apr 2022 to May 2022.</em>
                    </Text>
                </Stack>


                <VStack  //IMAGE ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Stack
                        flexDir={{ base: "column", md: "row" }}
                        alignItems="flex-start"
                        justifyContent="center"
                    >
                        <Image
                            src={projectImages.splashImage[0]}
                            borderRadius="0.5rem"
                            w={{ base: "100%", md: "50%" }}
                            objectFit="contain"
                        />

                        <Image
                            src={projectImages.splashImage[1]}
                            borderRadius="0.5rem"
                            w={{ base: "100%", md: "50%" }}
                            objectFit="contain"
                        />
                    </Stack>
                    <Image
                        src={projectImages.splashImage[2]}
                        sx={subSectionImage}
                    />
                </VStack>


                <Heading  //SECTION TITLE ------------------------------------------------------------------
                    sx={sectionHeader}
                >
                    THE USER'S PERSPECTIVE
                </Heading>


                <Image //SECTION IMAGE ------------------------------------------------------------------
                    src={projectImages.researchHero}
                    sx={sectionImage}
                />


                <VStack   //1 COLUMN TEXT WITH LIST ------------------------------------------------------------------
                    sx={oneColumnText}
                >
                    <Text>
                        In a bid to create an effective product, I needed to better understand how users make decisions on periodic use of medication when managing medical conditions. This would enable me to create a new solution to their pain points or improve upon an existing one. The aim of the research was to:
                        <br />
                        <br />
                    </Text>

                    <UnorderedList spacing={4}>
                        <ListItem>
                            Discover people's current processes/decision-making about periodic medication, and how they feel about the overall experience.
                        </ListItem>
                        <ListItem>
                            Learn about people's current pain points, frustrations, and barriers about periodic medication and how they would improve it.
                        </ListItem>
                        <ListItem>
                            Uncover the current assistive tools/services people are using to to take medication in a timely manner, and their experience with those tools. Uncover how they would improve those tools.
                        </ListItem>
                        <ListItem>
                            Understand what periodic medication means to people (how they define it) and why it is important to them.
                        </ListItem>
                    </UnorderedList>

                </VStack>


                <Stack  //2 COLUMN TEXT ------------------------------------------------------------------
                    sx={twoColumnContainer}
                >
                    <Heading
                        sx={subSectionHeader}
                    >
                        Literature Review
                    </Heading>

                    <Text
                        sx={twoColumnText}
                    >
                        The World Health Organization (WHO) highlighted Haynes et al in its 2003 report on drug adherence, saying that "raising the effectiveness of adherence measures may have a considerably bigger influence on population health than any improvement in individual medical treatments." About 50% of people with chronic illness do not take their prescriptions as directed. According to estimates, the expenses associated with this lack of drug adherence, which increases morbidity and mortality, total around $100 billion annually.
                        <br />
                        <br />
                        Using the search terms cardiovascular disease, health literacy, medication adherence, and pharmacotherapy, a MEDLINE database literature search was conducted restricted to English- and non-English-language papers published between January 1, 1990, and March 31, 2010. 127 papers out of the 405 that were found were used in the review because they addressed CVD, medication adherence, or health literacy in the abstract. From citations found within the retrieved publications, more references were found.
                        <br />
                        <br />
                        The Following is a brief summary of the article:
                    </Text>
                </Stack>


                <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Image
                        src={projectImages.articleSummary}
                        sx={subSectionImage}
                    />

                    <Text>Article Summary: Medication Adherence: WHO Cares? [Read Full Article].</Text>
                </VStack>


                <Stack  //2 COLUMN TEXT ------------------------------------------------------------------
                    sx={twoColumnContainer}
                >
                    <Heading
                        sx={subSectionHeader}
                    >
                        Relevant User Pain Points
                    </Heading>

                    <UnorderedList
                        spacing={4}
                        sx={twoColumnText}
                    >
                        <ListItem>
                            Sub-Optimal medical literacy of patients with regards to understanding their diseases and treatment process.
                        </ListItem>
                        <ListItem>
                            Physicians prescribing complex drug regimens, failing to explain the benefits and adverse effects of a medication effectively (Ineffective communication between the primary care physician and the patient).
                        </ListItem>
                        <ListItem>
                            Fragmented health care systems limiting the health care coordination and the patient's access to care.
                        </ListItem>
                        <ListItem>
                            Health information technology is not widely available, preventing physicians from easily accessing information from different patient care-related venues, which in turn compromises patient care, timely medication refills, and patient-physician communication.
                        </ListItem>
                    </UnorderedList>
                </Stack>


                <VStack   //PERSONAS ------------------------------------------------------------------
                    spacing={10}
                    w="100dvw"
                    py={10}
                    bg='rgba(168, 19, 155, 0.5)'
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
                            The Identified painpoints were used to create two personas in order to analyse them from a more relatable perspective.
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
                        The persona's motives and frustrations were further analyzed with with aid of a user journey map, in order to identify improvement opportunities.
                    </Text>
                </Stack>


                <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Image
                        src={projectImages.journeyMap}
                        sx={subSectionImage}
                    />

                    <Text>Maryam's Journey map to administer medication to her ward.</Text>
                </VStack>


                <VStack   //1 COLUMN TEXT WITH LIST ------------------------------------------------------------------
                    sx={oneColumnText}
                >
                    <Text>
                        After taking the pain points from the literature review into consideration and analyzing the personas with user journey maps, it was concluded that a scalable, multi-platform, information technology solution would improve the situation of poor medication adherence. This solution would need to:
                    </Text>

                    <UnorderedList spacing={4}>
                        <ListItem>
                            Improve the medical literacy of patients and caregivers by describing the functions of their medication as well as when and how they should be taken.
                        </ListItem>
                        <ListItem>
                            Improve effective communication between physician, caregiver and patient.
                        </ListItem>
                        <ListItem>
                            Be widely available to allow physicians easy access to info on their respective patients and in turn improve overall patient care.
                        </ListItem>
                    </UnorderedList>

                </VStack>


                <Heading  //SECTION TITLE ------------------------------------------------------------------
                    sx={sectionHeader}
                >
                    FRAMES & WIRES
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
                        Direct competitors for this project would need to offer one or more of the aformentioned solutions to our user pain points. And based on my search, at the time, there weren't many digital products that fit the bill. One direct competitor I found was MEDISAFE. The UI seemed dated and the menus were complicated but it tackled a good number of our user pain points quite well.
                        <br />
                        <br />
                        HEALTHILY and JINGA LIFE, indirect competitors, were also considered. Their pros and cons were documented and used to improve on my own designs.
                        <br />
                        <br />
                        After gathering design insights from the audit, I started working on information architecture. Although this is supposed to be a multi-platform solution; I decided on building up the dedicated mobile app before moving on with other devices.
                    </Text>
                </Stack>


                <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Image
                        src={projectImages.infoArc}
                        sx={subSectionImage}
                    />

                    <Text>Information Architecture for Dr. Notii.</Text>
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
                        For version 1 of our app, the primary user flow was "Adding new medication to the medpack". This could be carried out by either the physician, care-giver or even the patient.
                        <br />
                        <br />
                        This user flow offers patients the chance to feed in the doctor's prescription along with relevant notes, and have the application automate the caregiver's job by offering timely reminders on what medication should be taken and how exactly it was to be taken.
                    </Text>
                </Stack>


                <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Image
                        src={projectImages.userFlow}
                        sx={subSectionImage}
                    />

                    <Text>User flwe diagram for Version 1 of Dr. Notii.</Text>
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
                        As this is a multi-platform solution, version 1 of this project was done starting three platforms; a dedicated mobile app, a mobile website and a desktop web app. The wireframes for all platforms were drawn up, using the dedicated mobile app as a starting point.
                        <br />
                        <br />
                    </Text>
                </Stack>


                <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Image
                        src={projectImages.wireframes[0]}
                        sx={subSectionImage}
                    />

                    <Text>Mobile App Wireframes</Text>
                </VStack>


                <Text
                    sx={oneColumnText}
                >
                    As both the mobile app and mobile website versions would operate on mobile devices, the only major differences between them are the use of a hamburger menu for navigation on the mobile website and the representing of the "add new med" section as one scrollable page rather than 3 seperate modals as seen in the mobile app version.
                    <br />
                    <br />
                </Text>


                <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Image
                        src={projectImages.wireframes[1]}
                        sx={subSectionImage}
                    />

                    <Text>Mobile Website Wireframes</Text>
                </VStack>


                <Text
                    sx={oneColumnText}
                >
                    The Desktop web App version on the other hand, required a different approach. I decided on reworking more aspects of the design to suite the larger screen size. The navigation was moved to the side of the page and elememts were scaled up and rearranged.
                    <br />
                    <br />
                </Text>


                <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Image
                        src={projectImages.wireframes[2]}
                        sx={subSectionImage}
                    />

                    <Text>Desktop Website Wireframes</Text>
                </VStack>


                <Stack  //2 COLUMN TEXT ------------------------------------------------------------------
                    sx={twoColumnContainer}
                >
                    <Heading
                        sx={subSectionHeader}
                    >
                        Lo-Fi Prototype & Usability Studies
                    </Heading>

                    <Text
                        sx={twoColumnText}
                    >
                        After laying out all the wireframes, low fidelity prototypes were created by linking respective frames together.
                    </Text>
                </Stack>


                <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Image
                        src={projectImages.lofiPrototype[0]}
                        sx={subSectionImage}
                    />

                    <Text>Mobile App Prototyping</Text>
                </VStack>


                <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Image
                        src={projectImages.lofiPrototype[1]}
                        sx={subSectionImage}
                    />

                    <Text>Desktop Web App Prototyping</Text>
                </VStack>


                <VStack   //1 COLUMN TEXT WITH LIST ------------------------------------------------------------------
                    sx={oneColumnText}
                >
                    <Text>
                        While users had little to no issues completing the user flow, the following insights were gathered from their feedback:
                        <br />
                        <br />
                    </Text>

                    <UnorderedList spacing={4}>
                        <ListItem>
                            Users need a way to look through all their booked tickets.
                        </ListItem>
                        <ListItem>
                            Users need a way to select the location of the cinema they're booking tickets for (Larger brands have cinemas across multiple locations).
                        </ListItem>
                        <ListItem>
                            Users also want to have a look at upcoming movies rather than just movies currently being showed.
                        </ListItem>
                    </UnorderedList>

                </VStack>


                <Heading  //SECTION TITLE ------------------------------------------------------------------
                    sx={sectionHeader}
                >
                    AESTHETICS & INTERACTIONS
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
                        The inspiration for the primary color, purple, came from a real life pack of Augumentin tablets. The rest of the color scheme for our fictional Dr. Notii app, was derived from this primary color. This was done while keeping accessibility in mind to ensure good visibility and avoid clashing shades of colors.
                        <br />
                        <br />
                        The main typeface of the logo is "Cano". I combined simple text with vectors of a clock and a physician in adobe illustrator to create the full logo.
                        <br />
                        <br />
                        The typeface used for the remainder of the project is "Poppins". Considering the users who will interact with this app, I picked something that was very easy to read.
                    </Text>
                </Stack>


                <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Image
                        src={projectImages.styleGuide[0]}
                        sx={subSectionImage}
                    />

                    <Text>Colors, Type & Logo</Text>
                </VStack>


                <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Image
                        src={projectImages.styleGuide[1]}
                        sx={subSectionImage}
                    />

                    <Text>Component Sheet</Text>
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
                        Putting the Typeface, Colors and Components together, gave life to the final mockups and eventually the hi-fi prototype and three sets of mockups (as shown below) were created for the three different platforms.
                        <br />
                        <br />
                        The other aspects that brought more life to the app's user experience were the interactive parts. Every interactive component and page transition was crafted to give the user the modern feel while lending a sense of direction to every swipe and click within the UI.
                    </Text>
                </Stack>


                <VStack    //IMAGE GRID WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Grid
                        templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(8, 1fr)' }}
                        gap='1rem'
                        w="100%"
                    >
                        {
                            projectImages.hifiMockups.slice(0, 10).map((mockup, index) => (
                                <GridItem
                                    key={index}
                                    colSpan="2"
                                >
                                    <Image
                                        src={mockup}
                                        sx={subSectionImage}
                                    />
                                </GridItem>
                            ))
                        }
                    </Grid>

                    <Text fontWeight="bold">MOBILE APP MOCKUPS</Text>
                </VStack>


                <VStack    //IMAGE GRID WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Grid
                        templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(8, 1fr)' }}
                        gap='1rem'
                        w="100%"
                    >
                        {
                            projectImages.hifiMockups.slice(10, 14).map((mockup, index) => (
                                <GridItem
                                    key={index}
                                    colSpan="2"
                                >
                                    <Image
                                        src={mockup}
                                        sx={subSectionImage}
                                    />
                                </GridItem>
                            ))
                        }
                    </Grid>

                    <Text fontWeight="bold">MOBILE WEBSITE MOCKUPS</Text>
                </VStack>


                <VStack    //IMAGE GRID WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Grid
                        templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(8, 1fr)' }}
                        gap='1rem'
                        w="100%"
                    >
                        {
                            projectImages.hifiMockups.slice(14, 18).map((mockup, index) => (
                                <GridItem
                                    key={index}
                                    colSpan="4"
                                >
                                    <Image
                                        src={mockup}
                                        sx={subSectionImage}
                                    />
                                </GridItem>
                            ))
                        }
                    </Grid>

                    <Text fontWeight="bold">DESKTOP WEB APP MOCKUPS</Text>
                </VStack>



                <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Image
                        src={projectImages.hifiPrototype[0]}
                        sx={subSectionImage}
                    />

                    <Text>Hi-Fi Prototyping: Mobile App Flow</Text>
                </VStack>


                <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Image
                        src={projectImages.hifiPrototype[1]}
                        sx={subSectionImage}
                    />

                    <Text>Hi-Fi Prototyping: Mobile Website Flow</Text>
                </VStack>


                <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
                    sx={subSectionImageContainer}
                >
                    <Image
                        src={projectImages.hifiPrototype[2]}
                        sx={subSectionImage}
                    />

                    <Text>Hi-Fi Prototyping: Desktop Web App Flow</Text>
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
                        While working on this project I discovered that medication adherence is a massive problem in the world of health care and there are various factors that affect it. This app is aimed at helping individuals maintain or improve their health by encouraging medication adherence. In this version of the app, I focused on achieving this by automating a doctor's prescription for it's respective user.
                        <br />
                        <br />
                        Going forward, with aid of some user feedback, more improvements will be made to the application and more features that promote medication adherence will be implemented.
                        <br />
                        <br />
                    </Text>

                    <ChakraLink
                        href="https://www.figma.com/proto/KcaxeW3wKoex9eixiVWniQ/Dr.-Notii-[Medication-Reminder]-Project?node-id=185-6218&scaling=scale-down&page-id=44%3A62&starting-point-node-id=185%3A6181"
                        isExternal
                        alignSelf="center"
                    >
                        <Button
                            variant="outline"
                            colorScheme="black"
                            size={{base:"md", md:"lg"}}
                        >
                            Mobile App Hi-fi [FIGMA]
                        </Button>
                    </ChakraLink>

                    <ChakraLink
                        href="https://www.figma.com/proto/KcaxeW3wKoex9eixiVWniQ/Dr.-Notii-[Medication-Reminder]-Project?node-id=290-2925&scaling=scale-down&page-id=216%3A1964&starting-point-node-id=290%3A2925"
                        isExternal
                        alignSelf="center"
                    >
                        <Button
                            variant="outline"
                            colorScheme="black"
                            size={{ base: "md", md: "lg" }}
                        >
                            Mobile Website Hi-fi [FIGMA]
                        </Button>
                    </ChakraLink>

                    <ChakraLink
                        href="https://www.figma.com/proto/KcaxeW3wKoex9eixiVWniQ/Dr.-Notii-[Medication-Reminder]-Project?node-id=261-2507&scaling=scale-down&page-id=261%3A2356&starting-point-node-id=273%3A3963"
                        isExternal
                        alignSelf="center"
                    >
                        <Button
                            variant="outline"
                            colorScheme="black"
                            size={{ base: "md", md: "lg" }}
                        >
                            Desktop Web App Hi-fi [FIGMA]
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
export const dr_notii_loader = async () => {
    const res = await fetch('http://localhost:4000/ux_case_studies/3');
    return res.json();
}