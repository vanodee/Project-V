import Nav from './Nav'
import Logo from '../assets/full_logo_black.webp'
import { Box, Grid, GridItem, Img } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
      <Box
          as='header'
          position="fixed"
          top="0"
          width="100%"
          zIndex="999"
      >
          <Grid
              templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(8, 1fr)', lg: 'repeat(12, 1fr)' }}
              gap={30}
              mx={'auto'}
              p={'1rem'}
              alignItems={'top'}
              textColor={'highlight.2'}
          >
              <GridItem
                  colSpan={{ base: '2', md: '4', lg: '3' }}
              >
                  <NavLink to='/'>
                      <Img
                          src={Logo}
                          alt='Little Lemon Logo'
                          h={{base:'4rem', md:'100px'}}
                      />
                  </NavLink>
              </GridItem>

              <GridItem as='nav'
                  colSpan={{ base: '2', md: '4', lg: '9' }}
                  justifySelf={'end'}
              >
                  <Nav />
              </GridItem>
          </Grid>
      </Box>
  )
}
