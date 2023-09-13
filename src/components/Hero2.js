import React from "react";
import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import { LandingUserSectionCards } from "./";

const Hero2 = () => {
  return (
    <>
      <Box
        bgGradient="linear(to bottom, #FFFFFF, transparent, transparent, #FFFFFF)" // Define the gradient using the colors
        w="100vw" // Set the width to 100% of the viewport width
        h="100vh" // Set the height to 100% of the viewport height
      >
        <Box mt="84px">
          <Text
            fontSize="54px"
            fontWeight="700"
            lineHeight="64px"
            letterSpacing="0"
            textAlign="center"
            color="#020063"
          >
            English Learners <br />
            From All Over The World!
          </Text>
        </Box>

        <LandingUserSectionCards />
      </Box>
    </>
  );
};

export default Hero2;
