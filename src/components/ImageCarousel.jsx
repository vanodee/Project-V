import { Box, IconButton, Image } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import photo1 from "../assets/stevano_1.webp"


const myPhotos = [
    photo1,
    "https://via.placeholder.com/800x400?text=Image+1",
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3",
];



export default function ImageCarousel() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? myPhotos.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === myPhotos.length - 1 ? 0 : prevIndex + 1
        );
    };



    return (
        <Box
            position="relative"
            width="100%"
            height="100%"
            overflow="hidden"
        >
            <Image
                src={myPhotos[currentIndex]}
                alt={`Photo ${currentIndex + 1}`}
                width="100%"
                height="100%"
                objectFit="cover"
                borderRadius="1rem"
            />

            {/* <IconButton
                icon={<ChevronLeftIcon />}
                position="absolute"
                top="50%"
                left="3%"
                transform="translateY(-50%)"
                onClick={prevSlide}
                aria-label="Previous Slide"
                colorScheme="blackAlpha"
                color="white"
                bgColor='rgba(0, 0, 0, 0.4)'

                _hover={{
                    transform: "translateY(-50%) scale(1.5)"
                }}
                transition="transform 0.3s"
            />

            <IconButton
                icon={<ChevronRightIcon />}
                position="absolute"
                top="50%"
                right="3%"
                transform="translateY(-50%)"
                onClick={nextSlide}
                aria-label="Next Slide"
                colorScheme="blackAlpha"
                color="white"
                bgColor='rgba(0, 0, 0, 0.4)'

                _hover={{
                    transform: "translateY(-50%) scale(1.5)"
                }}
                transition="transform 0.3s"
            /> */}

        </Box>
    )
}
