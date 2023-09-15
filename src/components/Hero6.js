import React from "react";
import { Link, Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { CrownPremiumBox } from "./";
import YoutubeSession from "../assets/YoutubeSession.png";
import YoutubeIcon from "../assets/YoutubeIcon.svg";

const Hero6 = () => {
  return (
    <>
      <Box w="100vw" h="100%" bg="#200040" justifyContent="space-between">
        <Stack direction="column" alignItems="center">
          <Box mt="88px" mb="32px">
            <CrownPremiumBox width="250px" />
          </Box>

          <Box mb="58px">
            <Text
              color="#FFFFFF" // Text color
              fontSize="54px" // Font size
              fontWeight="700" // Font weight
              lineHeight="64px" // Line height
              letterSpacing="0" // Letter spacing
              textAlign="center" // Text alignment
            >
              Let's learn English easily and interestingly <br />
              in the three steps that Elena says
            </Text>
          </Box>

          <Box
            justifyContent="center" // Center horizontally
            alignItems="center" // Center vertically
            // h="100vh" // Set the container height to fill the viewport
            mb="40px"
          >
            <Image
              src={YoutubeSession}
              alt="YoutubeSession image"
              maxW="1024px"
              maxH="576px"
              borderRadius="20px"
            />
          </Box>

          <Flex justifyContent="space-between" mb="114px">
            <Box>
              <Flex
                justifyContent="space-between"
                maxW="356px" // Maximum width
                padding="4px 13px" // Padding (clockwise: top right bottom left)
                borderRadius="7px" // Border radius
                border="2px solid" // Border
                borderColor="linear-gradient(to right, #00C2FF, #8F00FF)"
                color="#666666"
                gap="7px" // Gap between child elements
              >
                {/* <Box></Box>

                <Box></Box> */}

                <Box>
                  <Text
                    maxW="145px"
                    h="100%"
                    color="#666666"
                    fontSize="19px"
                    fontWeight="600"
                    lineHeight="26px"
                    letterSpacing="0"
                    textAlign="center"
                  >
                    Youtube
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default Hero6;
