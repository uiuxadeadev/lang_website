import React from "react";
import { Link, Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { PricingCards } from "./";

const Hero9Pricing = () => {
  return (
    <>
      <Box w="100vw" h="100%" bg="#F2F4F7" justifyContent="space-between">
        <Stack direction="column" alignItems="center" pt="151px">
          <Flex justify="space-between" align="center" mb="42px">
            <Text
              color="#000000"
              fontSize="54px"
              fontWeight="700"
              lineHeight="64px"
              letterSpacing="0"
              textAlign="center"
            >
              Great Premium features with <br /> A reasonable price
            </Text>
          </Flex>

          <Flex mb="151px">
            <PricingCards />
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default Hero9Pricing;
