import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Grid, GridItem, HStack, Heading, IconButton, Image, Stack, Text, VStack, textDecoration } from "@chakra-ui/react";
import { Link, useLoaderData, useParams } from "react-router-dom"


export default function LogoDesignProjects() {
    // const { id } = useParams();
    const logo_project = useLoaderData();

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
            h="100vh"
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
                    p={{md:"1rem"}}
                    textColor="white"
                    textShadow='0px 2.3px rgba(0, 0, 0, 0.8)'
                >
                    <IconButton
                        variant="outline"
                        colorScheme="white"
                        icon={<ArrowBackIcon />}
                    />
                    <Heading size={{lg:"md"}}>{logo_project.title}</Heading>
                </HStack>
            </Link>

            <VStack
                h="100vh"
                bg={logo_project.previewColor}
                spacing={10}
                pb="5rem"
                overflowY="scroll"
            >
                <Image
                    src={logo_project.projectHero}
                    alt={`${logo_project.title} Hero Image`}
                    h={{ xl: "60vh" }}
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
                    <Box w={{base:"100%", lg:"60%"}}>
                        <Heading sx={headingStyles}> The Client: </Heading>
                        <Text sx={textStyles}>{logo_project.projectClient}</Text>
                    </Box>

                    <Box w={{ base: "100%", lg: "40%" }}>
                        <Heading sx={headingStyles}> The Job: </Heading>
                        <Text pb="2.5rem" sx={textStyles}>{logo_project.projectJob}</Text>

                        <Heading sx={headingStyles}> Summary/Keywords: </Heading>
                        <Text sx={textStyles}>{logo_project.projectKeywords}</Text>
                    </Box>
                </Stack>

                {
                    logo_project.projectImages.map((projectImage) => (
                        <Image
                            key={projectImage.id}
                            src={projectImage}
                            alt={`${logo_project.title} image ${projectImage.id}`}
                            borderRadius="1rem"
                            maxW="1200px"
                            w="95%"
                        />
                    ))
                }
            </VStack>

        </Box>
    )
}


//LOADER FUNCTION
export const logo_project_page_loader = async ({ params }) => {
    const { id } = params
    const res = await fetch('http://localhost:4000/logo_designs/' + id);
    return res.json();
}