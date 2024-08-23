import Nav from './Nav'
import Logo from '../assets/emblem_with_text.webp'
import { Box, Img } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <Box
            as='header'
            position="fixed"
            top="0"
            width={{base:"92%", md:"96%", lg:"98%"}}
            zIndex="999"
            h="7dvh"
            py='0.5rem'
            mx={{base:"4%", md:"1.5%", lg:"1%"}}
            display="flex"
            justifyContent="space-between"
            // bg="pink"
        >
            <NavLink to='/'>
                <Img
                    src={Logo}
                    alt='Stevano Peters Logo'
                    h={{ base: '100%', md: '2.5rem', lg: '3rem' }}
                    transition="transform 0.3s"

                    _hover={{
                        transform: "translateY(5px) translateX(5px) scale(1.2)"
                    }}
                />
            </NavLink>

            <Nav />

        </Box>
    )
}