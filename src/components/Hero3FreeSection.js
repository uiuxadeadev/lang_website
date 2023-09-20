import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import FreeSection from "../assets/FreeSection.png";

const Hero3FreeSection = () => {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Box
        bgImage={`url(${FreeSection})`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        w="100vw"
        // maxW="1920px"
        // h="1200px"
        // h="100vh"
        h="100%"
      >
        <Text
          pt="103px"
          color="#020063"
          fontSize="54px"
          fontWeight="700"
          lineHeight="64px"
          letterSpacing="0em"
          textAlign="center"
        >
          Get started for free!
          <br />
          And learn English with Global People
        </Text>
      </Box>
    </Flex>
  );
};

export default Hero3FreeSection;
