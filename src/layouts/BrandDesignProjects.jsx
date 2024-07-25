import {
    Box,
    Grid,
    GridItem,
    HStack,
    Heading,
    IconButton,
    Image,
    Stack,
    Text,
    VStack
} from "@chakra-ui/react";
import { Link, useLoaderData, useParams } from "react-router-dom"
import { ArrowBackIcon } from "@chakra-ui/icons";
import ProjectFooter from "../components/ProjectFooter";
import whiteEmblem from '../assets/emblem_white.webp'


export default function BrandDesignProjects() {
    // const { id } = useParams();
    const brand_design_project = useLoaderData();


    // Repetitive CSS
    const headingStyles = {
        fontSize: "2xl",
        textDecoration: "underline",
        pb: "1rem"
    }
    const textStyles = {
        fontSize: `lg`,
    }

    return (
        <Box
            h="100dvh"
            bg="white"
            bgGradient='linear(to-br, rgba(255,255,255,0.3), rgba(0,0,0,0.5))'
            overflow="hidden"
        >
            <Link to="..">
                <HStack
                    display={{ base: "none", lg: "flex" }}
                    spacing="1rem"
                    position="fixed"
                    top="10%"
                    left="0%"
                    bg='rgba(0,0,0,0.3)'
                    backdropFilter='auto'
                    backdropBlur='15px'
                    borderBottomRightRadius="0.5rem"
                    borderTopRightRadius="0.5rem"
                    p={{ md: "1rem" }}
                    textColor="white"
                    textShadow='0px 2.3px rgba(0, 0, 0, 0.8)'
                >
                    <IconButton
                        variant="outline"
                        colorScheme="white"
                        icon={<ArrowBackIcon />}
                    />
                    <Heading size={{ lg: "md" }}>{brand_design_project.title}</Heading>
                </HStack>
            </Link>

            <VStack
                h="100dvh"
                bg={brand_design_project.previewColor}
                spacing={10}
                overflowY="scroll"
                overflowX="hidden"
            >
                <Image
                    src={brand_design_project.projectHero}
                    alt={`${brand_design_project.title} Hero Image`}
                    h={{ xl: "60dvh" }}
                    w="100vw"
                    objectFit="cover"
                />

                <Stack
                    bgGradient='linear(to-br, rgba(0,0,0,0.3), rgba(0,0,0,0.85))'
                    direction={{ base: "column", lg: "row" }}
                    spacing={10}
                    color="white"
                    textShadow='0px 2.2px rgba(0, 0, 0, 0.8)'
                    borderRadius="1rem"
                    maxW="1200px"
                    w="95%"
                    p="2rem"
                >
                    <Box w={{ base: "100%", lg: "60%" }}>
                        <Heading sx={headingStyles}> The Client: </Heading>
                        <Text sx={textStyles}>{brand_design_project.projectClient}</Text>
                    </Box>

                    <Box w={{ base: "100%", lg: "40%" }}>
                        <Heading sx={headingStyles}> The Job: </Heading>
                        <Text pb="2.5rem" sx={textStyles}>{brand_design_project.projectJob}</Text>
                    </Box>
                </Stack>

                <Grid
                    templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(8, 1fr)', xl: 'repeat(12, 1fr)' }}
                    gap={10}
                    maxW="1200px"
                    p="1rem"
                >
                    {brand_design_project.projectImagesL.map((projectImageL) => (
                        <GridItem
                            key={projectImageL.id}
                            colSpan={{ base: '4', md: '8', xl:'12' }}
                            overflow="hidden"
                        >
                            <Image
                                src={projectImageL}
                                alt={`Image ${projectImageL.id + 1}`}
                                objectFit="cover"
                                borderRadius="md"
                                w="100%"
                            />
                        </GridItem>
                    ))}

                    {brand_design_project.projectImagesP.map((projectImageP) => (
                        <GridItem
                            key={projectImageP.id}
                            colSpan="4"
                            overflow="hidden"
                        >
                            <Image
                                src={projectImageP}
                                alt={`Image ${projectImageP.id + 1}`}
                                objectFit="cover"
                                borderRadius="md"
                                w="100%"
                            />
                        </GridItem>
                    ))}
                </Grid>

                <ProjectFooter />

            </VStack>

        </Box>
    )
}



//LOADER FUNCTION
export const brand_design_page_loader = async ({ params }) => {
    const { id } = params
    const res = await fetch('https://project-v-backend.vercel.app/brand_designs/' + id);
    return res.json();
}