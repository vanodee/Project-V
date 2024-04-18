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
                zIndex={'-1'}
            >
                <Box
                    bgGradient='linear(to-br, rgba(255,255,255,0.3), rgba(0,0,0,0.5))'
                >
                    <Box
                        h={{ base: '50vh', md: "65vh" }}
                    >
                        <Outlet />
                    </Box>

                    <Box
                        bgGradient='linear(to-br, rgba(255,255,255,0.15), rgba(0,0,0,0.27))'
                        filter='auto'
                        blur='3px'
                        w="100%"
                        h={{ base: '50vh', md: "35vh" }}
                        pointerEvents='none'
                    >
                        <Text color='rgba(255,255,255,0.0)'>Floor</Text>
                    </Box>
                </Box>
            </Box>
        </>
    )
}