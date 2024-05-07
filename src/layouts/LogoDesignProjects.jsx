import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useLoaderData, useParams } from "react-router-dom"


export default function LogoDesignProjects() {
    const { projectTitle } = useParams();
    // const logo_design_project = useLoaderData();

    return (
        <Box
            h="100vh"
            bg="white"
            bgGradient='linear(to-br, rgba(255,255,255,0.3), rgba(0,0,0,0.5))'
        >
            <Grid
                templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(8, 1fr)', lg: 'repeat(12, 1fr)' }}
                gap={30}
                placeItems="center"
                maxW={'1200px'}
                mx={'auto'}
                px={'30px'}
            >
                <GridItem colSpan={{ base: '1', md: '5' }}>
                    <Heading>{projectTitle}</Heading>
                </GridItem>
            </Grid>
        </Box>
    )
}


//LOADER FUNCTION
// export const logo_project_page_loader = async ({ params }) => {
//     const { id } = params
//     const res = await fetch('http://localhost:4000/logo_designs/' + id);
//     return res.json();
// }