import {
  Box,
  VStack,
  FormControl,
  Button,
  Heading,
  Text,
  Textarea,
  Input,
  useMediaQuery
} from "@chakra-ui/react"
import { useState } from 'react'
import SocialLinks from "../components/SocialLinks";



export default function Contact() {

  const [isPortrait] = useMediaQuery("(orientation: portrait)");
  const [isLandscape] = useMediaQuery("(orientation: landscape)");


  const [formWasSubmitted, setFormWasSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  const handleSubmit = (e, formID) => {
    e.preventDefault()
    const formData = new FormData(formID)
    setIsLoading(true)

    fetch("https://script.google.com/macros/s/AKfycby-Kkr3me1bd5Wnwir2e8DRQYt-6hUbojvRRGgjSSjXMz80jC7i6wbjrjFi_kb2lTV7/exec", {
      method: 'POST',
      body: formData
    }).then(() => {
      // console.log("Contact Form Submitted")
      setIsLoading(false)
      setFormWasSubmitted(true)
    })
  }


  //Custom Form Styling
  const inputFieldStyles = {
    bg: 'white',
    focusBorderColor: 'primary.1',
    color: 'black',
  }


  return (
    <Box
      display="flex"
      alignItems={isLandscape ? 'flex-start' : isPortrait && "center"}
      justifyContent='center'
      overflow="hidden"
      overflowY="scroll"
      h='100dvh'
      pt="15dvh"

      // I used this to hide the scrollbar but keep scroll functionality
      sx={{
        '::-webkit-scrollbar': {
          display: 'none',
        },
        'msOverflowstyle': 'none', // For Internet Explorer and Edge
        'scrollbarWidth': 'none', // For Firefox
      }}
      // ---------------------------------------------------------------
    >
      <VStack
        spacing="3rem"
        bgGradient='linear(to-br, rgba(0,0,0,0.45), rgba(0,0,0,0.85))'
        backdropFilter='auto'
        backdropBlur='15px'
        borderRadius="1rem"
        w="90%"
        maxW="700px"
        p={{ base: "5%", md: "2%" }}
        mb="10dvh"
      >
        {!formWasSubmitted ? (
          <>
            <form
              id='contactForm'         // Unique identifier for this Form
              onSubmit={(e) => handleSubmit(e, document.getElementById('contactForm'))}
              style={{ width: "100%" }}
            >
              <VStack
                spacing={{
                  base: "2rem",
                  md:(isPortrait ? "3rem" : "2rem"),
                  lg: "3rem"
                }}
              >
                <Heading
                  color="white"
                  fontSize={{
                    base: "2rem",
                    md: (isPortrait ? "3rem" : "2rem"),
                    lg: "3rem"
                  }}
                  textShadow='0px 2px rgba(0, 0, 0, 0.8)'
                >
                  LET'S CONNECT!
                </Heading>

                <FormControl isRequired isDisabled={isLoading}>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    sx={inputFieldStyles}
                  />
                </FormControl>

                <FormControl isRequired isDisabled={isLoading}>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    sx={inputFieldStyles}
                  />
                </FormControl>

                <FormControl isRequired isDisabled={isLoading}>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    sx={inputFieldStyles}
                  />
                </FormControl>

                <FormControl isRequired isDisabled={isLoading}>
                  <Textarea
                    id="message"
                    name="message"
                    type="text"
                    resize="none"
                    placeholder="Message"
                    sx={inputFieldStyles}
                  />
                </FormControl>


                <Button
                  variant="outline"
                  size="md"
                  color="white"
                  justifySelf="center"
                  type="submit"
                  w="100%"
                  isDisabled={isLoading}
                  _hover={{
                    color: "black",
                    bg: "gray.200"
                  }}
                >
                  {!isLoading ? "Submit" : "Please Wait..."}
                </Button>
              </VStack>

            </form>
          </>
        ) : (
          <>
            <VStack spacing="3rem">
              <Heading
                color="white"
                fontSize="xx-large"
              >
                THANK YOU!
              </Heading>

              <Text
                color="white"
                fontSize="large"
                fontWeight="bold"
                textAlign="center"
              >
                Your Messsage was
                <br />
                Submitted Successfully.
                <br />
                Expect a reply from me, soon!
              </Text>

              <Button
                variant="outline"
                size="lg"
                color="white"
                justifySelf="center"
                w="100%"
                onClick={() => setFormWasSubmitted(false)}
                _hover={{
                  color: "black",
                  bg: "gray.200"
                }}
              >
                Done
              </Button>

            </VStack>
          </>
        )}

        <SocialLinks />

      </VStack>

    </Box>
  )
}
