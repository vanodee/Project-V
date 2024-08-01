import { NavLink } from "react-router-dom";
import { Box, transition } from "@chakra-ui/react";

// Array of Project Categories
export const projectCategories = [
    { id: 1, name: "Front-End Projects", path: "Front_End_Projects" },
    { id: 2, name: "UX Case Studies", path: "UX_Case_Studies" },
    { id: 3, name: "UI Designs", path: "UI_Designs" },
    { id: 4, name: "Logo Designs", path: "Logo_Designs" },
    { id: 5, name: "Brand Designs", path: "Brand_Designs" },
];

export default function ProjectCategories({ ...rest }) {
    return (
        <>
            {
                projectCategories.map((projectCategory) => (
                    <Box
                        key={projectCategory.id}
                        as={NavLink}
                        to={projectCategory.path}
                        px="1.2rem"
                        py="0.3rem"
                        color='white'
                        textShadow='0px 2px rgba(0, 0, 0, 0.8)'
                        borderRadius="0.3rem"

                        _activeLink={{
                            bg: "rgba(0, 0, 0, 0.5)",
                            _hover: { transform: "translateY(0) scale(1)" },
                        }}

                        _hover={{
                            // bg: "rgba(0, 0, 0, 0.2)",
                            transform: "translateY(-5px) scale(1.2)"
                        }}

                        transition= "transform 0.3s"
                        {...rest}
                    >
                        {projectCategory.name}
                    </Box>
                ))
            }
        </>
    );
}
