import React from "react";
import { Link, Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import imageGroup403 from "../assets/Group 403.svg";
import imageGroup379 from "../assets/Group 379.svg";

const Hero4FreeSection = () => {
  return (
    <>
      <Box w="100vw" h="884px" bg="#F2F4F7" justifyContent="space-between">
        <Stack direction="column">
          <Flex justifyContent="space-between" mb="100px">
            <Box
              w={{ base: "100%", md: "398px" }} // Width for mobile and PC
              top={{ base: "auto", md: "116px" }} // Top position for mobile and PC
              left={{ base: "auto", md: "67px" }} // Left position for mobile and PC
              position="relative" // Ensure the parent Box is positioned relatively
            >
              <Text
                h="128px"
                color="#010040"
                fontSize="54px"
                fontWeight="700"
                lineHeight="64px"
                letterSpacing="0"
                textAlign="left"
              >
                How does it? <br />
                Why is it Free?
              </Text>
            </Box>

            <Box
              w={{ base: "100%", md: "712px" }} // Width for mobile and PC
              top={{ base: "auto", md: "116px" }} // Top position for mobile and PC
              right={{ base: "auto", md: "67px" }} // Left position for mobile and PC
              position="relative" // Ensure the parent Box is positioned relatively
            >
              <Text
                maxW="712px"
                color="#666666"
                fontSize="20px"
                fontWeight="600"
                lineHeight="28px"
                letterSpacing="0"
                textAlign="left"
              >
                LangClub is a service where you can sign up for free and talk to
                people who want to learn English around the world for free.
                However, our users wanted to add more features and cool
                services. <br />
                <br />
                so we launched a new partial paid feature, 'LangClub Premium'.
                Participation in video call sessions, which are the basis of all
                Langclubs except for this partial paid function, is available
                free of charge.
              </Text>
            </Box>
          </Flex>

          <Flex justifyContent="space-between" mb="73px">
            <Box
              w={{ base: "100%", md: "498px" }} // Width for mobile and PC
              top={{ base: "auto", md: "116px" }} // Top position for mobile and PC
              left={{ base: "auto", md: "67px" }} // Left position for mobile and PC
              position="relative" // Ensure the parent Box is positioned relatively
            >
              <Box mb="11px">
                <Text
                  h="65px"
                  color="#010040"
                  fontSize="54px"
                  fontWeight="700"
                  lineHeight="64px"
                  letterSpacing="0"
                  textAlign="left"
                >
                  3 Free Tickets
                </Text>
              </Box>

              <Flex
                justifyContent="space-between"
                maxW="356px" // Maximum width
                h="42px" // Height
                top="484px" // Top position
                left="345px" // Left position
                padding="4px 13px" // Padding (clockwise: top right bottom left)
                borderRadius="7px" // Border radius
                border="2px solid" // Border
                borderColor="linear-gradient(to right, #00C2FF, #8F00FF)"
                gap="7px" // Gap between child elements
              >
                <Box>
                  <Image
                    src={imageGroup403}
                    alt="langclub Premium"
                    w="172px"
                    h="100%"
                  />
                </Box>

                <Box>
                  <Image
                    src={imageGroup379}
                    alt="langclub Premium Ticket"
                    w="32px"
                    h="100%"
                  />
                </Box>

                <Box>
                  <Text
                    maxW="145px"
                    h="100%"
                    color="#010040"
                    fontSize="19px"
                    fontWeight="600"
                    lineHeight="26px"
                    letterSpacing="0"
                    textAlign="left"
                  >
                    Free Tickets
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box
              w={{ base: "100%", md: "712px" }} // Width for mobile and PC
              top={{ base: "auto", md: "116px" }} // Top position for mobile and PC
              right={{ base: "auto", md: "67px" }} // Left position for mobile and PC
              position="relative" // Ensure the parent Box is positioned relatively
            >
              <Text
                maxW="712px"
                color="#666666"
                fontSize="20px"
                fontWeight="600"
                lineHeight="28px"
                letterSpacing="0"
                textAlign="left"
              >
                Thanks to your use, Langclub has been a lot of growth. <br />
                As a token of appreciation, we will give three premium tickets
                every month <br />
                that can be used even if you do not pay the premium. <br />
              </Text>
            </Box>
          </Flex>

          <Flex justifyContent="space-between">
            <Box
              w={{ base: "100%", md: "498px" }} // Width for mobile and PC
              top={{ base: "auto", md: "116px" }} // Top position for mobile and PC
              left={{ base: "auto", md: "67px" }} // Left position for mobile and PC
              position="relative" // Ensure the parent Box is positioned relatively
            >
              <Flex
                w="1240px" // Width
                h="168px" // Height
                top="600px" // Top position
                left="344px" // Left position
                bgGradient="linear(to right, #F2F4F7, #F2F4F700)"
                backdropFilter="blur(24px) brightness(100%)"
                alignItems="center"
                backgroundColor="rgba(255, 255, 255, 0.8)" // Using RGBA for transparency
                borderColor="var(--backgroundhover)"
                borderRadius="8px"
                // boxShadow="var(--shadow-lv3)"
                boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.22)"
                display="flex"
                justifyContent="right"
                overflow="hidden"
                padding="9px 16px"
                gap="20px"
              >
                <Box>
                  <Image
                    src={imageGroup403}
                    alt="user profile"
                    // w="172px"
                    // h="172px" // Set the height to match the width for a perfect circle
                    borderRadius="50%" // Use "50%" for a perfect circle
                  />
                </Box>
                <Box padding="9px 16px" border="2px solid" borderRadius="30px">
                  <Image
                    src={imageGroup379}
                    alt="langclub Premium Ticket"
                    w="32px"
                    h="100%"
                  />
                </Box>
                <Box>
                  <Button
                    maxW="145px"
                    h="50px"
                    color="white"
                    bg="#010040"
                    fontSize="19px"
                    fontWeight="600"
                    lineHeight="26px"
                    letterSpacing="0"
                    textAlign="center"
                  >
                    My Page
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default Hero4FreeSection;
