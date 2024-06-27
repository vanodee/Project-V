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
            width="100%"
            zIndex="999"
            h="7dvh"
            p='0.5rem'
            display="flex"
            justifyContent="space-between"
            // bg="pink"
        >
            <NavLink to='/'>
                <Img
                    src={Logo}
                    alt='Stevano Peters Logo'
                    h={{ base: '100%', md: '2.5rem', lg: '4rem' }}
                />
            </NavLink>

            <Nav />

        </Box>
    )
}