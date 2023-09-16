import React from "react";
import { Link, Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { CrownPremiumBox } from "./";
import YoutubeSession from "../assets/YoutubeSession.png";
import YoutubeIcon from "../assets/YoutubeIcon.svg";

const FeatureItem = ({ icon, text }) => (
  <Flex
    justifyContent="left"
    alignItems="center"
    borderRight="1px solid #FFFFFF"
    maxW="240px"
    h="26px"
    gap="4px"
    mr="24px"
    pr="24px"
  >
    <Image src={icon} alt={`${icon} icon`} w="40px" h="40px" />
    <Text
      fontSize="18px"
      fontWeight="400"
      lineHeight="28px"
      letterSpacing="0"
      textAlign="left"
      color="#ffffff"
    >
      {text}
    </Text>
  </Flex>
);

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

          <Stack direction="row" mb="114px">
            <FeatureItem icon={YoutubeIcon} text="Youtube Live Session" />
            <FeatureItem icon={YoutubeIcon} text="Youtube Activity" />
            <FeatureItem icon={YoutubeIcon} text="Youtube Library" />
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Hero6;
