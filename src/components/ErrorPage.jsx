import { Button, Heading, Text, VStack, useMediaQuery } from "@chakra-ui/react";
import { Link, useRouteError } from "react-router-dom";
import ProjectFooter from "./ProjectFooter";

export default function ErrorPage() {

    const error = useRouteError();
    console.error(error);
    const [isPortrait] = useMediaQuery("(orientation: portrait)");

    return (
        <VStack
            bgGradient='linear(to-br, rgba(255,255,255,1), rgba(180,180,180,1))'
            h="100dvh"
            w="100dvw"
            justifyContent="space-between"
            pt="10dvh"
        >
            <VStack
                maxW="1000px"
            >
                <Heading fontSize="4xl">Oops!</Heading>
                <Text>An unexpected error has occurred.</Text>
                <Text>{error.statusText || error.message}</Text>
            </VStack>

            <Button
                as={Link}
                to="/"
                variant="outline"
                size={{
                    base: "sm",
                    md: (isPortrait ? "lg" : "sm"),
                    lg: "lg"
                }}
                colorScheme="black"
            >
                Back to HomePage
            </Button>

            <ProjectFooter />
        </VStack>
    )
}
