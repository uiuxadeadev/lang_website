import React from "react";
import { Link, Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { CrownPremiumBox } from "./";
import YoutubeSession from "../assets/YoutubeSession.png";
import YoutubeIcon from "../assets/YoutubeIcon.svg";
import ZoomIcon from "../assets/ZoomIcon.svg";
import Missing from "../assets/Missing.png";
import LightGradient from "../assets/LightGradient.png";

const stepData = [
  {
    step: "Step1",
    title: "Learn to Speak Like a Native! with Youtube",
    icon: YoutubeIcon,
    sessionType: "Youtube Live Session",
    imageSrc: Missing,
  },
  {
    step: "Step2",
    title: "Practice with Global People",
    icon: ZoomIcon,
    sessionType: "Zoom Session",
    imageSrc: Missing,
  },
  {
    step: "Step3",
    title: "Review by Yourself Anytime!",
    icon: YoutubeIcon,
    sessionType: "Youtube Activity / Library",
    imageSrc: Missing,
  },
];

const Hero7 = () => {
  return (
    <>
      <Box
        w="100vw"
        bgImage={`url(${LightGradient})`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        justifyContent="space-between"
        mb="162px"
      >
        <Stack direction="column" alignItems="center" pt="128px">
          {stepData.map((data, index) => (
            <Flex
              key={index}
              maxW="1300px"
              mx="auto"
              mb="198px"
              justify="space-between"
              align="center"
            >
              <Box maxW="341px" ml="67px" mr="70px" mb="183px" align="left">
                <Flex justify="space-between" align="center" mb="40px">
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    w="98px"
                    h="36px"
                    p="0px 24px"
                    borderRadius="8px"
                    boxShadow="0px 2px 2px 0px rgba(0, 0, 0, 0.38)"
                    bgGradient="linear(to-br, #00C2FF 3.94%, #8F00FF 94.16%)"
                    color="#ffffff"
                    mr="8px"
                  >
                    {data.step}
                  </Flex>
                  {index !== 1 && <CrownPremiumBox width="188px" />}
                </Flex>

                <Text
                  fontSize="40px"
                  fontWeight="700"
                  lineHeight="52px"
                  letterSpacing="0"
                  textAlign="left"
                  color="#ffffff"
                  mb="16px"
                >
                  {data.title}
                </Text>

                <Flex justifyContent="left" maxW="240px" gap="4px">
                  <Box>
                    <Image
                      src={data.icon}
                      alt={`${data.step} icon`}
                      w="21px"
                      h="100%"
                    />
                  </Box>
                  <Box>
                    <Text
                      fontSize="18px"
                      fontWeight="400"
                      lineHeight="28px"
                      letterSpacing="0"
                      textAlign="left"
                      color="#ffffff"
                    >
                      {data.sessionType}
                    </Text>
                  </Box>
                </Flex>
              </Box>

              <Box>
                <Image
                  src={data.imageSrc}
                  alt={`${data.step} image`}
                  w="715px"
                  h="615px"
                  // mr="4px"
                />
              </Box>
            </Flex>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default Hero7;
