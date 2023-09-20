import React from "react";
import {
  Link,
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  ButtonGroup,
} from "@chakra-ui/react";
import imageGroup403 from "../assets/Group 403.svg";
import imageGroup379 from "../assets/Group 379.svg";

const Hero4FreeSection = () => {
  // Define an array of objects to represent each section
  const sections = [
    {
      title: "How does it?\nWhy is it Free?",
      content:
        'LangClub is a service where you can sign up for free and talk to people who want to learn English around the world for free. However, our users wanted to add more features and cool services.\n\nSo we launched a new partial paid feature, "LangClub Premium". Participation in video call sessions, which are the basis of all Langclubs except for this partial paid function, is available free of charge.',
    },
    {
      title: "3 Free Tickets",
      content:
        "Thanks to your use, Langclub has been a lot of growth.\nAs a token of appreciation, we will give three premium tickets every month that can be used even if you do not pay the premium.",
    },
  ];

  return (
    <Box w="100vw" h="884px" bg="#F2F4F7" justifyContent="space-between">
      <Stack direction="column" alignItems="center">
        <Flex
          maxW="1300px"
          mx="auto"
          justify="space-between"
          align="center"
          pt="100px" // Adjust the top padding as needed
          mb="40px"
        >
          <Stack direction="column" spacing="100px">
            {/* Stack the two content blocks */}
            <Flex
              maxW="1300px"
              mx="auto"
              justifyContent="flex-start" // Align content block to the left
              alignItems="flex-start" // Align content block to the top
            >
              <Box w="360px" mr="70px" align="left">
                <Flex
                  color="#010040"
                  fontSize="54px"
                  fontWeight="700"
                  lineHeight="64px"
                  letterSpacing="0"
                  textAlign="left"
                  mb="40px"
                >
                  How does it? <br />
                  Why is it Free?
                </Flex>
              </Box>
              <Box w="712px" align="left">
                <Text
                  maxW="712px"
                  color="#666666"
                  fontSize="20px"
                  fontWeight="600"
                  lineHeight="28px"
                  letterSpacing="0"
                  textAlign="left"
                >
                  LangClub is a service where you can sign up for free and talk
                  to people who want to learn English around the world for free.
                  However, our users wanted to add more features and cool
                  services. <br />
                  <br />
                  so we launched a new partial paid feature, 'LangClub Premium'.
                  Participation in video call sessions, which are the basis of
                  all Langclubs except for this partial paid function, is
                  available free of charge.
                </Text>
              </Box>
            </Flex>

            <Flex
              maxW="1300px"
              // mx="auto"
              justifyContent="flex-start" // Align content block to the left
              alignItems="flex-start" // Align content block to the top
            >
              <Box w="360px" mr="70px" align="left">
                <Flex
                  color="#010040"
                  fontSize="54px"
                  fontWeight="700"
                  lineHeight="64px"
                  letterSpacing="0"
                  textAlign="left"
                  mb="11px"
                >
                  3 Free Tickets
                </Flex>

                <Box
                  w="360px"
                  h="42px"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="8px"
                  bgGradient="linear(to-br, #00C2FF 3.94%, #8F00FF 94.16%)"
                  p="2px"
                >
                  {/* border color gradation */}
                  <Flex
                    h="38px"
                    justifyContent="space-between"
                    backgroundColor="white"
                    p="4px 13px"
                    borderRadius="8px"
                    gap="7px"
                    mb="11px"
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
              </Box>

              <Box w="712px" align="left">
                <Text
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
          </Stack>
        </Flex>

        <Flex maxW="1300px" mx="auto" mb="198px" justifyContent="space-between">
          <Flex
            w="1240px"
            h="168px"
            top="600px"
            left="344px"
            bgGradient="linear(to right, #F2F4F7, #F2F4F700)"
            backdropFilter="blur(24px) brightness(100%)"
            alignItems="center"
            backgroundColor="rgba(255, 255, 255, 0.8)"
            borderColor="var(--backgroundhover)"
            borderRadius="8px"
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
                borderRadius="50%"
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
        </Flex>
      </Stack>
    </Box>
  );
};

export default Hero4FreeSection;
