import React from "react";
import PremiumSectionIntro from "../assets/PremiumSectionIntro1.png";
import {
  Stack,
  Box,
  Flex,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import imageGroup403White from "../assets/Group 403_white.svg";
import imageGroup380 from "../assets/Group 380.svg";
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
    <Image
      src={icon}
      alt={`${icon} icon`}
      w="40px"
      h="40px"
    />
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

const Hero5 = () => {
  return (
    <>
      <Box
        bgImage={`url(${PremiumSectionIntro})`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        w="100vw"
        h="1108px"
        maxH="1108px"
      >
        <Stack direction="column" alignItems="center">
          <Box mt="72px" mb="40px">
            <Flex
              justifyContent="space-between"
              alignItems="center"
              maxW="250px"
              h="48px"
              padding="10px 17px"
              borderRadius="8px"
              border="none"
              bgGradient="linear(to-br, #00C2FF 3.94%, #8F00FF 94.16%)"
              gap="14px"
            >
              <Flex>
                <Image
                  src={imageGroup380}
                  alt="langclub Premium crown"
                  w="21px"
                  h="100%"
                />
              </Flex>
              <Flex>
                <Image
                  src={imageGroup403White}
                  alt="langclub Premium"
                  w="172px"
                  h="100%"
                  position="relative"
                  top="5px"
                />
              </Flex>
            </Flex>
          </Box>

          <Box mb="30px">
            <Text
              color="#FFFFFF"
              fontSize="54px"
              fontWeight="700"
              lineHeight="64px"
              letterSpacing="0"
              textAlign="center"
            >
              Enhance Your English Skills with <br />
              The Premium Program
            </Text>
          </Box>

          <Stack direction="row">
            <FeatureItem icon={YoutubeIcon} text="Youtube Live Session" />
            <FeatureItem icon={YoutubeIcon} text="Youtube Activity" />
            <FeatureItem icon={YoutubeIcon} text="Youtube Library" />
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Hero5;
