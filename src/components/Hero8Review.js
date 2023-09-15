import React from "react";
import { Link, Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";

const Hero8Review = () => {
  return (
    <>
      <Box w="100vw" h="100%" bg="#010040" justifyContent="space-between">
        <Stack direction="column" alignItems="center" pt="182px">
          <Flex justify="space-between" align="center" mb="42px">
            <Box mr="116px">
              <Text
                color="#FFFFFF"
                fontSize="54px"
                fontWeight="700"
                lineHeight="64px"
                letterSpacing="0"
                textAlign="center"
              >
                Why Our Members Choose LangClub
              </Text>
            </Box>

            <Box
              justifyContent="center" // Center horizontally
              alignItems="center" // Center vertically
            >
              <Link
                color="#FFFFFF"
                fontSize="14px"
                fontWeight="600"
                lineHeight="18px"
                letterSpacing="0"
                textAlign="center"
                textDecoration="underline"
              >
                See More Review
              </Link>
            </Box>
          </Flex>

          <Flex mb="224px">CARD</Flex>
        </Stack>
      </Box>
    </>
  );
};

export default Hero8Review;
