import React from "react";
import FreeSection from "../assets/FreeSection.png";
import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";

const Hero3FreeSection = () => {
  return (
    <>
      {/* <Box w="1920px" h="1200px"> */}
      <Box>
        <Box
          bgImage={`url(${FreeSection})`}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          w="100vw"
          // h="100vh"
          h="1200px"
        >
          <Text
            pt="103px"
            color="#020063" // Text color
            fontSize="54px" // Font size
            fontWeight="700" // Font weight
            lineHeight="64px" // Line height
            letterSpacing="0em" // Letter spacing
            textAlign="center" // Text alignment
          >
            Get started for free!
            <br />
            And learn English with Global People
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Hero3FreeSection;
