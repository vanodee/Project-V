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



export default function VeeCinemas() {

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
        bg="rgba(57, 217, 54, 0.3)"
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
            V-Cinemas Mobile App
          </Text>

          <Heading
            maxW="1000px"
            fontSize={{ base: "2rem", md: "2.5rem", lg: "4rem" }}
            fontWeight="bold"
          >
            AN APP THAT TAKES THE HASSLE OUT OF BOOKING MOVIE TICKETS.
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
            The Challenge
          </Heading>

          <Text
            sx={twoColumnText}
          >
            Spending too much time in long movie ticket queues at the cinema takes away from the over all movie watching experience. Especially when you're still stuck in line and your movie starts. <em>This project aims to reduce that time spent queuing up and trying to make decisions before a movie</em>, by improving the online ticket booking experience.
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
            Project Duration: <em>Jan 2022 to Feb 2022.</em>
          </Text>
        </Stack>


        <VStack  //IMAGE ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src="https://via.placeholder.com/800x400?text=Animated+Mockup"
            sx={subSectionImage}
          />
        </VStack>


        <Heading  //SECTION TITLE ------------------------------------------------------------------
          sx={sectionHeader}
        >
          WHO'S THIS APP FOR ?
        </Heading>


        <Image //SECTION IMAGE ------------------------------------------------------------------
          src="https://via.placeholder.com/800x400?text=Section+Image"
          sx={sectionImage}
        />


        <VStack   //1 COLUMN TEXT WITH LIST ------------------------------------------------------------------
          sx={oneColumnText}
        >
          <Text>
            The first step was to better understand how users make decisions when it comes to booking movie tickets in order to improve their ticket booking experience. The goals were to:
            <br />
            <br />
          </Text>

          <UnorderedList spacing={4}>
            <ListItem>
              Discover people's current processes/decision-making with booking movie tickets, and how they feel about the overall experience
            </ListItem>
            <ListItem>
              Learn about people's current pain points, frustrations, and barriers when booking and how they would improve it
            </ListItem>
            <ListItem>
              Uncover the current tools people are using to simplify their booking process, and their experience with those tools. Uncover how they would improve those tools.
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
              A survey was conducted on people who fell between the ages of 16 and 37 and were frequent cinema goers or had at least been there once. A total of 14 people were interviewed online or in-person. The following pain points were highlighted after analysis of the survey responses:A survey was conducted on people who fell between the ages of 16 and 37 and were frequent cinema goers or had at least been there once. A total of 14 people were interviewed online or in-person. The following pain points were highlighted after analysis of the survey responses:
              <br />
              <br />
            </Text>

            <UnorderedList spacing={4}>
              <ListItem>
                10 participants said that a common frustration of cinema goers is getting to the cinema late and meeting a long queue.
              </ListItem>
              <ListItem>
                7 of the participants mentioned that a shortage of attendants at the counter worsens the already lengthy queues.
              </ListItem>
              <ListItem>
                9 participants stated that indecisive customers may cause others displeasure by holding up the queue.
              </ListItem>
              <ListItem>
                7 of participants mentioned that the online experience of some local cinemas was less than ideal. Some quoted them to be “Clunky” and “difficult to use”.
              </ListItem>
              <ListItem>
                1 participant admitted to booking tickets online days in advance and forgetting that they had booked a movie.
              </ListItem>
              <ListItem>
                5 participants stated that customers who book online still fall victim to the same long queues as those buying tickets over the counter.
              </ListItem>
            </UnorderedList>

          </VStack>

        </Stack>


        <VStack   //PERSONAS ------------------------------------------------------------------
          spacing={10}
          w="100dvw"
          py={10}
          bg='rgba(57, 217, 54, 0.5)'
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
              Zoey & Jonathan were the personas created in order to have a relatable and realistic representation of the pain points highlighted from the survey results. Further analysis was conducted, using them as our Primary users.
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
              src="https://via.placeholder.com/1280x720?text=Section+Image"
              w={{ base: "100%", md: "50%" }}
              borderRadius="0.5rem"
              objectFit="cover"
            />

            <Image
              src="https://via.placeholder.com/1280x720?text=Section+Image"
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
            Zoey & Jonathan's goals were further analyzed with a user Journey map in order to detect and take note of any reasonable imporvement opportunities.
          </Text>
        </Stack>


        <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src="https://via.placeholder.com/800x400?text=User+Journey+Map"
            sx={subSectionImage}
          />

          <Text>Zoey's user journey map for booking movie tickets for herself and her Dad.</Text>
        </VStack>


        <VStack   //1 COLUMN TEXT WITH LIST ------------------------------------------------------------------
          sx={oneColumnText}
        >
          <Text>
            At this point, with aid of research, I had discovered that customers typically book their movie tickets over the counter OR online. I had also gathered some user pain points from a survey and identified improvement opportunities by analysing  the pain points with the aid of personas and user journey mapping.
            <br />
            <br />
            Taking the aforementioned into consideration, the following conclusions were reached:
          </Text>

          <UnorderedList spacing={4}>
            <ListItem>
              A simple yet functional online user experience would need to be created in order to cater to most categories of users by optimizing their decision making processes.
            </ListItem>
            <ListItem>
              This online solution would need to effectively issue reminders to the user, so they remember their bookings and make it to the cinema on time. A dedicated mobile app is suited for this task.
            </ListItem>
            <ListItem>
              Users should also be allowed to book and pay for their snacks online, in order to reduce time spent making decisions while at the counter.
            </ListItem>
            <ListItem>
              Cinemas should provide more attendants at the counter so as to attend to more customers at once. This will also allow customers who book online to be serviced seperate from those booking over the counter. Ultimately saving time and improving the overall ticket booking experience.
            </ListItem>
          </UnorderedList>

        </VStack>


        <Heading  //SECTION TITLE ------------------------------------------------------------------
          sx={sectionHeader}
        >
          STARTING THE DESIGN
        </Heading>


        <Image //SECTION IMAGE ------------------------------------------------------------------
          src="https://via.placeholder.com/800x400?text=Section+Image"
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
            In order to design a functional online experience, I studied existing online experiences of two local cinemas, namely Filmhouse Cinemas & Genesis Deluxe Cinemas. At the time of this study both cinemas had not developed dedicated mobile apps, so part of my job was taking note of their website elements and relating them to a mobile app environment.
            <br />
            <br />
            Overall, Filmhouse boasted a more modern design language and even offered a feature that solves one of our pain points, Online snack bookings. In my opinion, their implementation at the time left a few things to be desired but it was nice to see them thinking along the same lines as I was.
            <br />
            <br />
            Genesis Deluxe on the other hand, had a very lacklustre User interface and no innovative features whatsoever. In my opinion, at the time, I considered it an example of the bad online experiences mentioned in the survey. The website felt like and after thought by the company.
            <br />
            <br />
            Combining results from the competitive audit with my existing research insights, I was able to come up wth the information architecture for the mobile app.
          </Text>
        </Stack>


        <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src="https://via.placeholder.com/800x400?text=Information+Architecture"
            sx={subSectionImage}
          />

          <Text>Final Information Architecture for Version 1 of The Vee Cinemas App.</Text>
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
            With information architecture in place, I needed a primary user flow to guide the rest of the design process. I decided on a flow for "booking a movie ticket for a future date" and proceeded to ideate the main app's User Interface.
          </Text>
        </Stack>


        <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src="https://via.placeholder.com/800x400?text=User+Flow+Diagram"
            sx={subSectionImage}
          />

          <Text>User flow diagram for booking movie tickets in advance.</Text>
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
            As seen in the user flow diagram, the design needed a "Now Showing" page, a ticket booking modal that also allowed for booking snacks, a payment screen and a success screen.
            <br />
            <br />
            While drawing up the wire frames, I prioritized keeping things simple and functional. This would address one of our major user pain points of difficult to use interfaces and ensure that users would have little to no issues navigating the app.
          </Text>
        </Stack>


        <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src="https://via.placeholder.com/800x400?text=Wireframes"
            sx={subSectionImage}
          />

          <Text>Initial wireframes created for this design</Text>
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
            Keeping in line with a user flow of "booking a movie ticket for a future date", the wireframes were linked together to create a low-fidelity prototype. A usabiity study was conducted with 5 users (who also took part in the initial survey), in order to gain user feedback and decide what direction I would take the design next.
          </Text>
        </Stack>


        <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src="https://via.placeholder.com/800x400?text=Lofi+Prototyping"
            sx={subSectionImage}
          />

          <Text>Low Fidelity Prototypes</Text>
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
          REFINING THE DESIGN
        </Heading>


        <Image //SECTION IMAGE ------------------------------------------------------------------
          src="https://via.placeholder.com/800x400?text=Section+Image"
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
            Research from Statistica.com stated that most cinema-goers were of a younger demgraphic (18-34). In order to appeal to that demographic from a visual stand point, a primary color of "Neon-Green" was used along with a Dark color scheme.
            <br />
            <br />
            In order to inject some "fun" into the fictional Vee-Cinema brand, the font family, Patrick Hand, was used. The Vee-Cinemas logo was created by combining the letter V with the outline of the "Play" symbol, synonimous with video media.
            <br />
            <br />
            The style guide was used to create a visually appealing user interface while keeping accessibility in mind.
          </Text>
        </Stack>


        <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src="https://via.placeholder.com/800x400?text=Style+Guide"
            sx={subSectionImage}
          />

          <Text>Colors, Type and Button designs used in the project</Text>
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
            Taking insights from the usability study, a "Booked tickets" page was created and a floating action button was added to select cinema location. The "Coming soon" page was also designed similar to the "Now Showing" page, such that users can browse a list of movies yet to be released. I designed the CTA button for the coming soon page to be "Set Reminder" instead of the "Book Now" CTA on the Now Showing page, enabling users to be notified when the movies become availible.
            <br />
            <br />
            While transitioning the design to high fidelity, I also decided to do away with the shopping cart approach as it's functionality was taken by the "Booked tickets" page. The "Booked Tickets" page also had toggles to turn the reminders on and off for each booking.
          </Text>
        </Stack>


        <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src="https://via.placeholder.com/800x400?text=Interactive+Components"
            sx={subSectionImage}
          />

          <Text>Interactive Components created for the Project</Text>
        </VStack>


        <Text
          sx={oneColumnText}
        >
          Motion was utilized to give users a sense of direction while they navigated the app. This would in turn keep things interactive while improving the aps ease of use. Here are some of the interactive components used in the app.
          <br />
          <br />
        </Text>


        <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src="https://via.placeholder.com/800x400?text=Hifi+Mockups"
            sx={subSectionImage}
          />

          <Text>High Fidelity MockUps</Text>
        </VStack>


        <VStack    //IMAGE WITH CAPTION ------------------------------------------------------------------
          sx={subSectionImageContainer}
        >
          <Image
            src="https://via.placeholder.com/800x400?text=Hifi+Prototyping"
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
          src="https://via.placeholder.com/800x400?text=Section+Image"
          sx={sectionImage}
        />


        <VStack   //1 COLUMN TEXT WITH EXTRAS ------------------------------------------------------------------
          sx={oneColumnText}
        >
          <Text>
            The Vee CInemas app gives cinema-goers a simple yet functional online user experience in order to optimize the decison making process, reduce physical queues at the counter and ultimately imrpove the overall cinema experience. Through this project I was able to interact with cinema-goers, understand their problems and ideate solutions to them.
            <br />
            <br />
            Going forward, I would need to highlight other cinema related user pain points and ideate solutions to them in a bid to improve the Vee-Cinemas app further.
            <br />
            <br />
            <br />
          </Text>

          <ChakraLink
            href="https://www.figma.com/proto/JzEylbw9LWS8qXbiA0swv5/V-Cinemas-Ticket-App?node-id=323-1001&t=x6xsTMwNnMgdLdoG-1&scaling=scale-down&content-scaling=fixed&page-id=90%3A307&starting-point-node-id=371%3A3694"
            isExternal
            alignSelf="center"
          >
            <Button
              variant="outline"
              colorScheme="black"
              size={{base:"md", md:"lg"}}
            >
              View Finished Prototype [FIGMA]
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
export const vee_cinemas_loader = async () => {
  const res = await fetch('http://localhost:4000/ux_case_studies/1');
  return res.json();
}