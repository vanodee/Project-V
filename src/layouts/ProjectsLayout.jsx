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
  Flex,
  useMediaQuery
} from "@chakra-ui/react"

import { Outlet, useLocation, useNavigation } from "react-router-dom"
import { TriangleUpIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";


import LogoBackdrop from '../assets/Logo_Backdrop.webp'
import ProjectCategories from "../components/ProjectCategories"



export default function ProjectsLayout() {

  const [isPortrait] = useMediaQuery("(orientation: portrait)");
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const [currentPage, setCurrentPage] = useState(null)
  const [pathArraySize, setpathArraySize] = useState(null)
  const location = useLocation()
  const navigation = useNavigation()


  //TRACKS THE TITLE OF THE CURRENT WEBPAGE
  useEffect(() => {
    const pathParts = location.pathname.split("/")
      .filter(pathPart => pathPart !== ''); // Split the path and filter out empty strings

    if (pathParts.length > 0) {
      const lastPart = pathParts[pathParts.length - 1]; // Safely get the last part of the path
      const formattedName = lastPart.replace(/_/g, " "); // Replace underscores with spaces

      setCurrentPage(formattedName);
      setpathArraySize(pathParts.length);
    } else {
      setCurrentPage(""); // Set to an empty string if there are no valid path parts
      setpathArraySize(0);
    }
  }, [location]);



  return (
    <Box h='100dvh'>
      {pathArraySize < 3 && (
        <>
          <Heading
            position="fixed"
            top="15dvh"
            px="1rem"
            opacity={navigation.state === "loading" ? "0.1" : "0.3"}
            textAlign="center"
            w="100dvw"
            fontSize={{
              base: (isPortrait ? "2.5rem" : "3rem"),
              md: "3rem",
              lg: "4rem",
              xl: "5rem"
            }}
          >
            {navigation.state === "loading" ? "loading..." : currentPage}
          </Heading>

          <Image
            src={LogoBackdrop}
            h={{ base: '40dvh', md: '60dvh' }}
            position="fixed"
            top="50%"
            left="50%"
            transform={{ base: "translate(-50%, -88%)", md: "translate(-50%, -63%)" }}
            filter='auto'
            blur='7px'
          />
        </>
      )}

      <Box
        opacity={navigation.state === "loading" ? "0.3" : "1"}
      >
        <Outlet />
      </Box>

      {currentPage === "Projects" && (
        <Flex
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          bg='rgba(0,0,0,0.3)'
          backdropFilter='auto'
          backdropBlur='15px'
          borderRadius="1rem"
          p="1rem"
          mx="auto"
          textColor="white"
          textShadow='0px 2px rgba(0, 0, 0, 0.8)'
          opacity={navigation.state === "loading" ? "0.3" : "1"}
        >
          <Heading
            fontSize={{
              base: "1.3rem",
              // md: "2rem",
              lg: "2rem"
            }}
            textAlign="center"
          >
            Please select a category below
          </Heading>

        </Flex>
      )}

      {pathArraySize < 3 && (
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
            justifyContent="space-between"
            minW="800px"
            direction='row'
            spacing={2}
            p='0.5rem'
            borderRadius='0.5rem'
            bgColor='rgba(0, 0, 0, 0.3)'
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
            bg='rgba(0, 0, 0, 0.3)'
            display={{ base: "flex", lg: "none" }}
            textShadow='0px 2px rgba(0, 0, 0, 0.8)'
            size={{ base: 'md', lg: 'lg' }}
            rightIcon={<TriangleUpIcon />}
          >
            {currentPage === "Projects" ? "Select Project Category" : `${currentPage}`}
          </Button>

          <Drawer
            isOpen={isOpen}
            placement='bottom'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent
              bg='rgba(0, 0, 0, 0.55)'
              backdropFilter='auto'
              backdropBlur="20px"
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
      )}


    </Box>
  )
}