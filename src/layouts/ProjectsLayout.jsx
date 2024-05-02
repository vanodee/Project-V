import {
  Box,
  Button,
  VStack,
  Stack,
  Image,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Heading,
  Text,
  Flex
} from "@chakra-ui/react"

import { Outlet, useLocation } from "react-router-dom"
import { TriangleUpIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";


import LogoBackdrop from '../assets/Logo_Backdrop.webp'
import ProjectCategories from "../components/ProjectCategories"



export default function ProjectsLayout() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const [currentProjectCategory, setCurrentProjectCategory] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const pathParts = location.pathname.split("/");     // Split the Pathname at each "/"
    const lastPart = pathParts[pathParts.length - 1];   // Returns the last word in the path
    const formattedName = lastPart.replace(/_/g, " ");  // Replace underscores with spaces

    setCurrentProjectCategory(formattedName)
  },[location])

  return (
    <Box h='100vh'>

      <Image
        src={LogoBackdrop}
        h={{ base: '40vh', md: '60vh' }}
        position="fixed"
        top="50%"
        left="50%"
        transform={{ base: "translate(-50%, -88%)", md: "translate(-50%, -63%)" }}
        filter='auto'
        blur='7px'
      />

      <Outlet />

      {currentProjectCategory === "Projects" && (
        <Flex
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          bg='rgba(0,0,0,0.15)'
          backdropFilter='auto'
          backdropBlur='15px'
          borderRadius="1rem"
          p="1rem"
          mx="auto"
          textColor="white"
          textShadow='0px 2px rgba(0, 0, 0, 0.8)'
        >
          <Heading
            size={{ base: "lg" }}
            textAlign="center"
          >
            Please select a category below
          </Heading>

        </Flex>
      )}

      <VStack
        zIndex="800"
        pb='2.5rem'
        alignItems='center'
        justifyContent='center'
        position="fixed"
        top="88.5%"
        left="50%"
        transform="translate(-50%, 0)"
      >
        <Stack
          display={{ base: 'none', lg: 'flex' }}
          minW='800px'
          direction='row'
          spacing={2}
          px={'15px'}
          py={'10px'}
          borderRadius={'10px'}
          bgColor='rgba(0, 0, 0, 0.2)'
          backdropFilter='auto'
          backdropBlur='8px'
        >
          <ProjectCategories />
        </Stack>

        <Button
          aria-label='Open Navigation'
          ref={btnRef}
          onClick={onOpen}
          color='white'
          bg='rgba(0, 0, 0, 0.1)'
          display={{ base: "flex", lg: "none" }}
          textShadow='0px 2px rgba(0, 0, 0, 0.8)'
          size={{ base: 'md', lg: 'lg' }}
          rightIcon={<TriangleUpIcon />}
        >
          {currentProjectCategory === "Projects" ? "Select Project Category" : `${currentProjectCategory}` }
        </Button>

        <Drawer
          isOpen={isOpen}
          placement='bottom'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent
            bg='rgba(0, 0, 0, 0.7)'
            backdropFilter='auto'
            backdropBlur='8px'
          >

            <DrawerCloseButton color='white' h='30px' />
            <DrawerHeader color='white'>Select Project Category</DrawerHeader>

            <DrawerBody pt='1.5rem'>
              <VStack spacing="1.5rem">
                <ProjectCategories onClick={onClose} />
              </VStack>
            </DrawerBody>

            <DrawerFooter>
            </DrawerFooter>

          </DrawerContent>
        </Drawer>

      </VStack>


    </Box>
  )
}