import React from "react";
import PremiumSectionIntro from "../assets/PremiumSectionIntro.png";
import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";

const Hero5 = () => {
  return (
    <>
      <Box
        bgImage={`url(${PremiumSectionIntro})`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        w="100vw"
        // h="100vh"
        h="1200px"
      >

      </Box>
    </>
  );
};

export default Hero5;
