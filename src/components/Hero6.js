import React from "react";
import { Link, Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { CrownPremiumBox } from "./";

const Hero6 = () => {
  return (
    <>
      <Box w="100vw" h="884px" bg="#200040" justifyContent="space-between">
        <Stack direction="column" alignItems="center">
          <Box mt="88px">
            <CrownPremiumBox />
          </Box>

          <Box>
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

          <Flex justifyContent="space-between" mb="73px">
            <Box
              w={{ base: "100%", md: "498px" }} // Width for mobile and PC
              top={{ base: "auto", md: "116px" }} // Top position for mobile and PC
              left={{ base: "auto", md: "67px" }} // Left position for mobile and PC
              position="relative" // Ensure the parent Box is positioned relatively
            >
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
                color="#666666"
                gap="7px" // Gap between child elements
              >
                <Box></Box>

                <Box></Box>

                <Box>
                  <Text
                    maxW="145px"
                    h="100%"
                    color="#666666"
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
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default Hero6;
