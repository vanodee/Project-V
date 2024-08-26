import { NavLink } from "react-router-dom";
import { Box, Link as ChakraLink } from "@chakra-ui/react";

// Array of Page Links
const links = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Projects", path: "Projects" },
    { id: 3, name: "About", path: "About" },
    { id: 4, name: "Resume", path: "https://drive.google.com/file/d/1XbjO0b3Ly7LKs5L9_hhK7UjKA3zmSAFe/view?usp=sharing" },
    { id: 5, name: "Contact", path: "Contact" },
];

export default function NavItem({ ...rest }) {
    return (
        <>
            {/* Cycle Through each item in the array and create a Stylable NavLink */}
            {links.map((link) =>
                link.name === "Resume" ? (
                    <ChakraLink
                        key={link.id}
                        href={link.path}
                        isExternal
                        px="2rem"
                        py="0.3rem"
                        color="white"
                        // textShadow="0px 2px rgba(0, 0, 0, 0.8)"
                        borderRadius="0.3rem"

                        _hover={{
                            // bg: "rgba(0, 0, 0, 0.2)",
                            transform: "translateY(-5px) scale(1.2)"
                        }}

                        transition="transform 0.3s"

                        {...rest}
                    >
                        {link.name}
                    </ChakraLink>
                ) : (
                    <Box
                        key={link.id}
                        as={NavLink}
                        to={link.path}
                        px="1.2rem"
                        py="0.3rem"
                        color="white"
                        // textShadow="0px 2px rgba(0, 0, 0, 0.8)"
                        borderRadius="0.3rem"

                        _activeLink={{
                            bg: "rgba(0, 0, 0, 0.6)",
                            _hover: { transform: "translateY(0) scale(1)" },
                        }}

                        _hover={{
                            // bg: "rgba(0, 0, 0, 0.2)",
                            transform: "translateY(-5px) scale(1.2)"
                        }}

                        transition="transform 0.3s"

                        {...rest}
                    >
                        {link.name}
                    </Box>
                )
            )}
        </>
    );
}

