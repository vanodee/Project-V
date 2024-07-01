import twitter from '../assets/twitter_white.webp'
import behance from '../assets/behance_white.webp'
import linkedin from '../assets/linkedin_white.webp'
import email from '../assets/email_white.webp'
import { HStack, Link as ChakraLink, Image } from '@chakra-ui/react'

const socialPages = [
    { id: 1, title: "Email", src: email, link: "mailto:stevano.peters@gmail.com" },
    { id: 2, title: "Linkedin", src: linkedin, link: "https://www.linkedin.com/in/stevano-peters/" },
    { id: 3, title: "X", src: twitter, link: "https://x.com/Vano_dee" },
    { id: 4, title: "Behance", src: behance, link: "https://www.behance.net/vanovendetta" }
]

export default function SocialLinks() {
    return (
        <HStack
            spacing="2.5rem"
        >
            {
                socialPages.map((socialPage) => (
                    <ChakraLink
                        key={socialPage.id}
                        href={socialPage.link}
                        isExternal
                    >
                        <Image
                            src={socialPage.src}
                            alt={`${socialPage.title} Icon`}
                            h="1.7rem"
                            _hover={{ transform: "scale(1.5)" }}
                            transition="transform 0.3s"
                        />
                    </ChakraLink>
                ))
            }
        </HStack>
    )
}
