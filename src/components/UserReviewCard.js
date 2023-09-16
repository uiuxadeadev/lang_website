import React from "react";
import {
  Link,
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  Badge,
} from "@chakra-ui/react";

const UserReviewCard = ({ profileImage, countryFlag, countryName, review }) => {
  return (
    <>
      <Box w="full" maxH="336px" bg="#ffffff" borderRadius="8px">
        <Flex direction="column">
          <Box mb="18px">
            <Image
              src={profileImage}
              alt={`${profileImage} icon`}
              w="296px"
              h="100%"
              borderRadius="8px 8px 0px 0px"
            />
          </Box>

          <Flex
            maxW="100px"
            height="16px"
            backgroundColor="#ffffff"
            alignItems="left"
            justifyContent="center"
            gap="8px"
            mb="14px"
            ml="16px"
          >
            <Box mb="18px">
              <Image
                src={countryFlag}
                alt={`${countryFlag} icon`}
                w="16px"
                h="16px"
              />
            </Box>
            <Text
              fontSize="20px"
              fontWeight="600"
              lineHeight="16px"
              letterSpacing="0em"
              textAlign="center"
              color="#000000"
            >
              {countryName}
            </Text>
          </Flex>

          <Flex
            alignItems="center"
            justifyContent="center"
            position="relative"
            mb="10px"
            p="0px 16px 16px 16px"
          >
            <Text
              fontSize="11px"
              fontWeight="400"
              lineHeight="16px"
              letterSpacing="0em"
              textAlign="left"
              color="#000000"
              maxW="258px"
              maxH="96px"
            >
              {review}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default UserReviewCard;
