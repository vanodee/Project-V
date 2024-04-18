import {
  Image,
  HStack,
  Heading,
  VStack,
  Stack,
  Button
} from "@chakra-ui/react";

import { ArrowForwardIcon } from "@chakra-ui/icons"
import { useLoaderData } from "react-router-dom"
import { useState } from 'react';




export default function ProjectPreview() {
  const projects = useLoaderData();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (project) => {
    setSelectedProject(selectedProject === project ? null : project);
  };

  return (
    <VStack spacing={50}>
      {selectedProject && (
        <Stack
          direction={"row"}
          spacing={5}
          bgGradient='linear(to-br, rgba(0,0,0,0.05), rgba(0,0,0,0.85))'
          backdropFilter='auto'
          backdropBlur='8px'
          borderRadius="1.5rem"
          p="1.5rem"
        >
          <Image
            src={selectedProject.previewImage}
            alt={`${selectedProject.title} Thumbnail`}
            w="50vh"
            h="50vh"
            objectFit="cover"
            borderRadius="1.5rem"
          />

          <VStack
            spacing={6}
            w={"50vh"}
            color="white"
            textShadow='0px 2px rgba(0, 0, 0, 0.8)'
          >
            <Heading
              fontSize="4xl"
            >
              {selectedProject.title}
            </Heading>

            <Button
              variant="outline"
              size="lg"
              colorScheme="white"
              rightIcon={<ArrowForwardIcon />}
            >
              View Full Project
            </Button>

          </VStack>
        </Stack>
      )}

      <HStack>
        {
          projects.map((project) => (
            <Image
              key={project.id}
              src={project.thumbnail}
              alt={`${project.title} Thumbnail`}
              cursor='pointer'
              onClick={() => handleClick(project)}
              _hover={{ transform: 'scale(1.2)' }}
              transition="transform 0.3s"
            />
          ))
        }
      </HStack>

    </VStack>
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