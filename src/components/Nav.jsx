import {
    HStack,
    VStack,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
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
                spacing={2}
                display={{ base: "none", md: "none", lg: "flex" }}
                px={'15px'}
                py={'10px'}
                borderRadius={'10px'}
                bgColor='rgba(0, 0, 0, 0.2)'
                backdropFilter='auto'
                backdropBlur='8px'
            >
                <NavItems />
            </HStack>

            <IconButton
                aria-label='Open Navigation'
                ref={btnRef}
                color='white'
                bg='rgba(0, 0, 0, 0.2)'
                onClick={onOpen}
                display={{ base: "block", md: "block", lg: "none" }}
                icon={<HamburgerIcon />}
                size={{base:"md"}}
            />

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent
                    bg='rgba(0, 0, 0, 0.7)'
                    backdropFilter='auto'
                    backdropBlur='8px'
                >

                    <DrawerCloseButton color='white' h='30px'/>
                    {/* <DrawerHeader color='white' >Navigation</DrawerHeader> */}

                    <DrawerBody pt='5rem'>
                        <VStack spacing="1.5rem">
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
