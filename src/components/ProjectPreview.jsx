import {
  Image,
  HStack,
  Heading,
  VStack,
  Stack,
  Button,
  Text,
  Box
} from "@chakra-ui/react";

import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Link, useLoaderData, useLocation, useOutletContext, Outlet } from "react-router-dom"
import { useEffect, useState } from 'react';




export default function ProjectPreview() {
  const location = useLocation();
  const projects = useLoaderData();
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewColor, setPreviewColor] = useState(null);
  const [pathArraySize] = useOutletContext();

  useEffect(() => {
    setSelectedProject(null);
    setPreviewColor(null);
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
          spacing={{ base: "1rem", lg: "2rem" }}
          h={'100vh'}
          py={{ base: "10vh" }}
          display="flex"
          alignContent='center'
          justifyContent="flex-end"
          bg={previewColor}
        >
          {selectedProject && (
            <Stack
              h={'50vh'}
              w={{ base: '90%' }}
              maxW="1040px"
              direction={{ base: "column", md: "row" }}
              spacing={4}
              bgGradient='linear(to-br, rgba(0,0,0,0.05), rgba(0,0,0,0.85))'
              backdropFilter='auto'
              backdropBlur='8px'
              borderRadius="1.5rem"
              p="0.5rem"
              mx="1rem"
            >
              <Image
                src={selectedProject.previewImage}
                alt={`${selectedProject.title} Thumbnail`}
                w={{ base: "100%", md: "65%" }}
                h={{ base: "30vh", md: "100%" }}
                objectFit="cover"
                borderRadius="1rem"
              />

              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                w={{ base: "100%", md: "35%" }}
                h={{ base: "15vh", md: "100%" }}
                color="white"
                textShadow='0px 2px rgba(0, 0, 0, 0.8)'
                px={{ base: "", lg: "1rem" }}
              >
                <Heading
                  fontSize={{ base: "2xl", lg: "4xl" }}
                  pb="1rem"
                >
                  {selectedProject.title}
                </Heading>

                <Box
                  display={{ base: "none", lg: "flex" }}
                  maxH={{ lg: "10rem" }}
                  overflow="hidden"
                  my="1.5rem"
                >
                  <Text
                    as="p"
                    fontSize={{ base: "sm", lg: "xl" }}
                    display=""
                    css={{// Old Skool CSS not sure if i'll keep it in
                      display: "-webkit-box",
                      WebkitLineClamp: 5, // Change this value to control the number of lines
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {selectedProject.projectSummary}
                  </Text>
                </Box>

                <Link to={selectedProject.id} w="100%">
                  <Button
                    w="100%"
                    variant="outline"
                    size={{ base: "sm", lg: "md", xl: "lg" }}
                    colorScheme="white"
                    rightIcon={<ArrowForwardIcon />}
                  >
                    View Full Project
                  </Button>
                </Link>

              </Box>
            </Stack>
          )}

          <HStack
            h="20vh"
            px="0.5rem"
            spacing={2}
          // bg="pink"
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
                  _hover={{ transform: `scale(${selectedProject === project ? 1.3 : 1.1})` }} //Only unselected Projects will scale on hover
                  transition="transform 0.3s"
                  transform={`scale(${selectedProject === project ? 1.3 : 1})`} //Active Project scales larger than others
                />
              ))
            }
          </HStack>

        </VStack>
      )}
    </>
  )
}



// LOADER FUNCTIONS
export const front_end_projects_loader = async () => {
  const res = await fetch('http://localhost:4000/front_end_projects');
  return res.json();
}

export const ux_case_studies_loader = async () => {
  const res = await fetch('http://localhost:4000/ux_case_studies');
  return res.json();
}

export const ui_designs_loader = async () => {
  const res = await fetch('http://localhost:4000/ui_designs');
  return res.json();
}

export const logo_designs_loader = async () => {
  const res = await fetch('http://localhost:4000/logo_designs');
  return res.json();
}

export const brand_designs_loader = async () => {
  const res = await fetch('http://localhost:4000/brand_designs');
  return res.json();
}