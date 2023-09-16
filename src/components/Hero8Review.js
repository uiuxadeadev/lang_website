import React from "react";
import { Link, Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { UserReviewCards } from "./";

const Hero8Review = () => {
  return (
    <>
      <Box w="100vw" h="100%" bg="#010040" justifyContent="space-between">
        <Stack direction="column" pt="182px">
          <Flex
            maxW="1248px"
            justify="space-between"
            alignItems="center"
            justifyContent="center"
            mb="42px"
            ml="67px"
          >
            <Box mr="116px">
              <Text
                color="#FFFFFF"
                fontSize="54px"
                fontWeight="700"
                lineHeight="64px"
                letterSpacing="0"
                textAlign="left"
              >
                Why Our Members Choose LangClub
              </Text>
            </Box>

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
          </Flex>

          <Flex mb="224px">
            <UserReviewCards />
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default Hero8Review;
