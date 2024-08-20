import {
    HStack,
    VStack,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    IconButton
} from "@chakra-ui/react"

import { HamburgerIcon } from "@chakra-ui/icons"

import { useRef } from "react";

import NavItems from "./NavItems";



export default function Nav() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <>
            <HStack
                as="nav"
                spacing={2}
                display={{ base: "none", md: "none", lg: "flex" }}
                p='0.5rem'
                h="fit-content"
                borderRadius='0.5rem'
                bgColor='rgba(0, 0, 0, 0.4)'
                backdropFilter='auto'
                backdropBlur='8px'
            >
                <NavItems />
            </HStack>

            <IconButton
                aria-label='Open Navigation'
                ref={btnRef}
                color='white'
                bg='rgba(0, 0, 0, 0.4)'
                onClick={onOpen}
                display={{ base: "block", md: "block", lg: "none" }}
                icon={<HamburgerIcon />}
                size={{ base: "sm", md: "md" }}
            />

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent
                    bg='rgba(0, 0, 0, 0.55)'
                    backdropFilter='auto'
                    backdropBlur='20px'
                >

                    <DrawerCloseButton color='white' h='30px'/>

                    <DrawerBody pt='5rem'>
                        <VStack as="nav" spacing="1.5rem">
                            <NavItems onClick={onClose} />
                        </VStack>
                    </DrawerBody>

                    <DrawerFooter>
                    </DrawerFooter>

                </DrawerContent>
            </Drawer>
        </>
    )
}
