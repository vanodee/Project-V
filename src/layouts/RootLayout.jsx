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
                h={'100dvh'}
            >
                <Box
                    bgGradient='linear(to-br, rgba(255,255,255,0.3), rgba(0,0,0,0.5))'
                    position='relative'
                    zIndex={0}
                >
                    <Box
                        h={{ base: '50dvh', md: "65dvh" }}
                        position='relative'
                        zIndex={1}
                    >
                        <Outlet />
                    </Box>

                    <Box
                        bgGradient='linear(to-br, rgba(255,255,255,0.15), rgba(0,0,0,0.4))'
                        filter='auto'
                        blur='3px'
                        w="100%"
                        h={{ base: '50dvh', md: "35dvh" }}
                        pointerEvents='none'
                    >
                        <Text color='rgba(255,255,255,0.0)'>Floor</Text>
                    </Box>
                </Box>
            </Box>
        </>
    )
}