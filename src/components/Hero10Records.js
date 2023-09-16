import React from "react";
import { Link, Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import RecordIcon1 from "../assets/RecordIcon1.svg";
import RecordIcon2 from "../assets/RecordIcon2.svg";
import RecordIcon3 from "../assets/RecordIcon3.svg";

const Hero10Records = () => {
  return (
    <>
      <Stack direction="column" alignItems="center" pt="151px">
        <Flex justify="space-between" align="center" bg="#FFFFFF" mb="100px">
          <Text
            color="#000000"
            fontSize="54px"
            fontWeight="700"
            lineHeight="64px"
            letterSpacing="0"
            textAlign="center"
          >
            Records
          </Text>
        </Flex>

        <Flex justify="space-between" align="center" mb="131px">
          <Stack direction="column" alignItems="center">
            <Box mb="50px">
              <Image
                src={RecordIcon1}
                alt="image"
                w="300px"
                maxW="336px"
                maxH="154px"
              />
            </Box>
            <Box maxW="336px">
              <Text
                color="#020063"
                fontSize="28px"
                fontWeight="600"
                lineHeight="36px"
                letterSpacing="0"
                textAlign="center"
              >
                Lang Club has opened more than{" "}
                <Text as="span" fontWeight="800">
                  500+ sessions so far
                </Text>
              </Text>
            </Box>
          </Stack>

          <Stack direction="column" alignItems="center">
            <Box mb="50px">
              <Image
                src={RecordIcon2}
                alt="image"
                w="300px"
                maxW="336px"
                maxH="154px"
              />
            </Box>
            <Box maxW="336px">
              <Text
                color="#020063"
                fontSize="28px"
                fontWeight="600"
                lineHeight="36px"
                letterSpacing="0"
                textAlign="center"
              >
                Lang Club has opened more than{" "}
                <Text as="span" fontWeight="800">
                  500+ sessions so far
                </Text>
              </Text>
            </Box>
          </Stack>

          <Stack direction="column" alignItems="center">
            <Box mb="50px">
              <Image
                src={RecordIcon3}
                alt="image"
                w="300px"
                maxW="336px"
                maxH="154px"
              />
            </Box>
            <Box maxW="336px">
              <Text
                color="#020063"
                fontSize="28px"
                fontWeight="600"
                lineHeight="36px"
                letterSpacing="0"
                textAlign="center"
              >
                Lang Club has opened more than{" "}
                <Text as="span" fontWeight="800">
                  500+ sessions so far
                </Text>
              </Text>
            </Box>
          </Stack>
        </Flex>

        <Stack
          w="100vw"
          h="422px"
          maxH="422px"
          direction="column"
          alignItems="center"
          justifyContent="center"
          bgGradient="linear(to-br, #00C2FF 3.94%, #8F00FF 94.16%)"
        >
          <Flex>
            <Text
              color="#ffffff"
              fontSize="40px"
              fontWeight="700"
              lineHeight="64px"
              letterSpacing="0"
              textAlign="center"
            >
              Why is it so popular?
              <br />
              Let's Join us! and participate!
            </Text>
          </Flex>

          <Flex alignItems="center" justifyContent="center" mt="32px" mb="44px">
            <Button
              backgroundColor="#F2F4F7"
              color="#000C38"
              fontSize="18px"
              fontWeight="600"
              lineHeight="28px"
              letterSpacing="0em"
              textAlign="center"
              h="54px"
              w="400px"
            >
              Join us!
            </Button>
          </Flex>
        </Stack>
      </Stack>
    </>
  );
};

export default Hero10Records;
