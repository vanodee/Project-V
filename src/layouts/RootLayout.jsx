import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import Header from "../components/Header";


export default function RootLayout() {

    const location = useLocation();
    const topLevelRoute = useRef(null);
    const pathParts = location.pathname.split("/").filter(part => part !== '');
    topLevelRoute.current = (!pathParts[0] ? "Home" : pathParts[0]);


    const animationConfig = {
        initial: { opacity: 0, scale:0.7 },
        animate: { opacity: 1, scale:1 },
        exit: { opacity: 0, scale:0 },
        transition: { duration: 0.5 }
    };


    return (
        <>
            <Header />

            <Box
                as="main"
                bgGradient='linear(to-br, rgba(255,255,255,1), rgba(180,180,180,1))'
                h="100dvh"
                w="100dvw"
            >
                <Box
                    h="100%"
                    position="relative"
                    zIndex={1}
                    overflow="hidden"
                >
                    <motion.div
                        key={topLevelRoute.current}
                        {...animationConfig}
                    >
                        <Outlet />
                    </motion.div>
                </Box>

                <Box
                    bgGradient='linear(to-br, rgba(255,255,255,0.2), rgba(0,0,0,0.4))'
                    filter='auto'
                    blur='3px'
                    w="100%"
                    h={{ base: '50%', md: "35%" }}
                    position="absolute"
                    bottom="0px"
                    pointerEvents='none'
                ></Box>
            </Box>
        </>
    )
}