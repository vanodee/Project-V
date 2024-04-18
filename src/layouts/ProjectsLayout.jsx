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
  useDisclosure
} from "@chakra-ui/react"

import { Outlet } from "react-router-dom"
import { useRef } from "react";


import LogoBackdrop from '../assets/Logo_Backdrop.webp'
import ProjectCategories from "../components/ProjectCategories"



export default function Projects() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <Box as="main" h='100vh' >

      <Image
        src={LogoBackdrop}
        h={{ base: '45vh', md: '60vh' }}
        position="fixed"
        top="50%"
        left="50%"
        transform={{ base: "translate(-50%, -88%)", md: "translate(-50%, -63%)" }}
        filter='auto'
        blur='4px'
      />


      <VStack
        zIndex="800"
        h="100vh"
        pb='4rem'
        display='flex'
        alignItems='center'
        justifyContent='flex-end'
      >

        <Outlet />

        <Stack
          display={{base:'none', lg:'flex'}}
          direction='row'
          spacing={2}
          px={'15px'}
          py={'10px'}
          borderRadius={'10px'}
          bgColor='rgba(0, 0, 0, 0.15)'
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
          size={'lg'}
        >
          Random Bullshit Go!
        </Button>

        <Drawer
          isOpen={isOpen}
          placement='bottom'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent
            bg='rgba(0, 0, 0, 0.5)'
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