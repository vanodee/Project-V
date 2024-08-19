import {
  Image,
  HStack,
  Heading,
  VStack,
  Stack,
  Button,
  Text,
  Box,
  keyframes,
  useMediaQuery
} from "@chakra-ui/react";

import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Link, useLoaderData, useLocation, Outlet } from "react-router-dom"
import { useEffect, useState } from 'react';
import { EndpointVar } from "./EndpointVar";
import { AnimatePresence, motion } from "framer-motion";



// Animation Keyframes ------------------------------------------
const levitate = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-7px);
  }
`;

const levitate_shadow = keyframes`
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: scale(0.9);
    opacity: 0.6;
  }
`;
// --------------------------------------------------------------


export default function ProjectPreview() {

  const [isPortrait] = useMediaQuery("(orientation: portrait)");
  const [isLandscape] = useMediaQuery("(orientation: landscape)");

  const location = useLocation();
  const projects = useLoaderData() || [];
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewColor, setPreviewColor] = useState(null);
  // const [pathArraySize, currentPage] = useOutletContext();
  const [pathArraySize, setpathArraySize] = useState(null)

  useEffect(() => {
    setSelectedProject(null);
    setPreviewColor(null);

    const pathParts = location.pathname.split("/")
      .filter(pathPart => pathPart !== ''); // Split the path and filter out empty strings

    if (pathParts.length > 0) {
      const lastPart = pathParts[pathParts.length - 1]; // Safely get the last part of the path
      const formattedName = lastPart.replace(/_/g, " "); // Replace underscores with spaces

      // setCurrentPage(formattedName);
      setpathArraySize(pathParts.length);
    } else {
      // setCurrentPage(""); // Set to an empty string if there are no valid path parts
      setpathArraySize(0);
    }
  }, [location]);

  const handleClick = (project) => {
    setSelectedProject(selectedProject === project ? null : project);
    setPreviewColor(selectedProject === project ? null : project.previewColor)
  };


  return (
    <>
      <Outlet />

      {pathArraySize < 3 && (
        <VStack
          spacing="0"
          h={'100dvh'}
          py={{ base: "10dvh" }}
          display="flex"
          alignContent='center'
          justifyContent="flex-end"
          bg={previewColor}
        >
          {selectedProject && (
            <Box
              h='75%'
              w="100dvw"
              display="flex"
              alignContent='center'
              justifyContent="center"
              py="1rem"
            >
              <AnimatePresence mode="wait" initial={true}>
                <Stack
                  h="100%"
                  w="95%"
                  maxW={{
                    base: "700px",
                    md: (isPortrait ? "600px" : "700px"),
                    lg: (isPortrait ? "700px" : "900px"),
                    xl: "1200px"
                  }}
                  direction={isPortrait ? "column" : "row"}
                  spacing="1rem"
                  bgGradient='linear(to-br, rgba(0,0,0,0.05), rgba(0,0,0,0.85))'
                  backdropFilter='auto'
                  backdropBlur='8px'
                  borderRadius="1rem"
                  p="0.5rem"
                  mx="1rem"
                  // animation={`${levitate} 4s ease-in-out infinite`}

                  //Animation Controls -----------------------------------------
                  as={motion.div}
                  key={ selectedProject.title }
                  initial={{ opacity: 0, y: "5dvh" }}
                  animate={{ opacity: 1, y: "0" }}
                  exit={{ opacity: 0, y: "5dvh" }}
                  transition={{ duration: 0.5 }}
                  //------------------------------------------------------------
                >
                  <Image
                    src={selectedProject.previewImage}
                    alt={`${selectedProject.title} Thumbnail`}
                    w={isPortrait ? "100%" : "65%"}
                    h={isPortrait ? "45%" : "100%"}
                    objectFit="cover"
                    borderRadius="0.5rem"
                  />

                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    w={isPortrait ? "100%" : "35%"}
                    h={isPortrait ? "50%" : "100%"}
                    color="white"
                    textShadow='0px 2px rgba(0, 0, 0, 0.8)'
                    p={{ base: "", lg: "0.5rem" }}
                  // bg="pink"
                  >
                    <Heading
                      fontSize={{
                        base: "1.5rem",
                        md: (isPortrait ? "2rem" : "1.5rem"),
                        lg: "2rem"
                      }}
                      alignSelf="flex-start"
                      pb="0.3rem"
                    // bg="red"
                    >
                      {selectedProject.title}
                    </Heading>

                    <Box
                      display="flex"
                      overflow="hidden"
                      overflowY="scroll"
                      py="0.5rem"
                    // bg="blue"
                    >
                      <Text
                        as="p"
                        fontSize={{
                          base: "sm",
                          md: (isPortrait ? "md" : "sm"),
                          lg: "md"
                        }}
                      >
                        {selectedProject.previewSummary}
                      </Text>
                    </Box>

                    <Link
                      to={selectedProject.id}
                      w="100%"
                    >
                      <Button
                        w="100%"
                        variant="outline"
                        size={{
                          base: "sm",
                          md: (isPortrait ? "lg" : "sm"),
                          lg: "lg"
                        }}
                        colorScheme="white"
                        rightIcon={<ArrowForwardIcon />}
                        mt="0.7rem"
                      // bg="red"
                      >
                        View Full Project
                      </Button>
                    </Link>

                  </Box>
                </Stack>
              </AnimatePresence>
            </Box>
          )}

          <AnimatePresence mode="wait">
            <HStack
              h="25%"
              px="0.5rem"
              spacing={2}
              // bg="pink"

              //Animation Controls -----------------------------------------
              as={motion.div}
              key={location.pathname}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              //------------------------------------------------------------
            >
              {
                projects.slice().reverse().map((project) => ( //Map through the Data in reverse order
                  <Image
                    key={project.id}
                    src={project.thumbnail}
                    h={{ base: "40%", sm: "45%", xl: "65%" }}
                    alt={`${project.title} Thumbnail`}
                    cursor='pointer'
                    onClick={() => handleClick(project)}
                    _hover={{ transform: `scale(${selectedProject === project ? 1.2 : 1.1})` }} //Only unselected Projects will scale on hover
                    transition="transform 0.3s"
                    transform={`scale(${selectedProject === project ? 1.2 : 1})`} //Active Project scales larger than others
                  />
                ))
              }
            </HStack>
          </AnimatePresence>

        </VStack>
      )}
    </>
  )
}



// LOADER FUNCTIONS
export const front_end_projects_loader = async () => {
  const res = await fetch(`${EndpointVar}/front_end_projects`);
  return res.json();
}

export const ux_case_studies_loader = async () => {
  const res = await fetch(`${EndpointVar}/ux_case_studies`);
  return res.json();
}

export const ui_designs_loader = async () => {
  const res = await fetch(`${EndpointVar}/ui_designs`);
  return res.json();
}

export const logo_designs_loader = async () => {
  const res = await fetch(`${EndpointVar}/logo_designs`);
  return res.json();
}

export const brand_designs_loader = async () => {
  const res = await fetch(`${EndpointVar}/brand_designs`);
  return res.json();
}