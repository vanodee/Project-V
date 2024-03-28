import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Box, Text } from "@chakra-ui/react";


export default function RootLayout() {
    return (
        <>
            <Header />
            <Box
                as='main'
                bg={'white'}
                h={'100vh'}
            >
                <Box
                    bgGradient='linear(to-br, rgba(255,255,255,0.3), rgba(0,0,0,0.5))'
                >
                    <Box
                        h="65vh"
                    >
                        <Outlet />
                    </Box>

                    <Box
                        bgGradient='linear(to-br, rgba(255,255,255,0.15), rgba(0,0,0,0.25))'
                        filter='auto'
                        blur='3px'
                        w="100%"
                        h="35vh"
                        // position="fixed"
                        // zIndex={-1}
                    >
                        <Text color='rgba(255,255,255,0.0)'>Floor</Text>
                    </Box>
                </Box>
            </Box>
        </>
    )
}