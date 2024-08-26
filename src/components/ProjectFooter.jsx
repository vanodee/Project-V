import { Heading, Image, Stack, VStack } from '@chakra-ui/react'
import SocialLinks from './SocialLinks'
import whiteEmblem from '../assets/emblem_white.webp'


export default function ProjectFooter() {
    return (
        <VStack
            as="footer"
            spacing={10}
            pt="2rem"
        >
            <Image
                src={whiteEmblem}
                h={{ base: "10dvh", md: "15dvh" }}
                objectFit="cover"
                opacity="0.2"
            />

            <Stack
                direction={{ base: "column", md: "row" }}
                justifyContent="space-between"
                alignItems="center"
                bgGradient='linear(to-b, rgba(255,255,255,0.0), rgba(0,0,0,0.7))'
                w="100dvw"
                color="white"
                px="2rem"
                py="1.5rem"
            >
                <Heading
                    fontSize={{ base: "1.5rem", lg: "2rem" }}
                    py="1rem"
                >
                    GET IN TOUCH
                </Heading>

                <SocialLinks />
            </Stack>
        </VStack>
    )
}
