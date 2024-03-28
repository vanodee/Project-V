import { NavLink } from "react-router-dom";
import { Box } from "@chakra-ui/react";

// Array of Page Links
const links = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Projects", path: "Projects" },
    { id: 3, name: "About", path: "About" },
    { id: 4, name: "Resume", path: "Resume" },
    { id: 5, name: "Contact", path: "Contact" },
];

export default function NavItem({ ...rest }) {
    return (
        <>
            {
                /* Cycle Through each item in the array and create a Stylable NavLink */
                links.map((link) => (
                    <Box
                        key={link.id}
                        as={NavLink}
                        to={link.path}
                        px="1.3rem"
                        py="0.5rem"
                        color='white'
                        textShadow='0px 2px rgba(0, 0, 0, 0.8)'
                        borderRadius="0.3rem"

                        _activeLink={{
                            bg: "rgba(0, 0, 0, 0.5)",
                        }}

                        _hover={{ bg: "rgba(0, 0, 0, 0.2)" }}
                        {...rest}
                    >
                        {link.name}
                    </Box>
                ))
            }
        </>
    );
}

