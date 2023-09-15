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
import PriceBannar from "../assets/PriceBannar.svg";

const PricingCard = ({
  plan,
  discount,
  price,
  priceDescription,
  features,
  CTA,
  themeColors,
  index,
}) => {
  const { textColor, backgroundColor, bgGradient } = themeColors;

  return (
    <>
      <Box maxW="275px" w="full" maxH="770px" bg="#ffffff" rounded="24px">
        <Flex direction="column">
          <Flex
            maxW="296px"
            height="80px"
            borderRadius="24px 24px 0 0"
            bgGradient={index === 2 ? bgGradient : undefined}
            backgroundColor={index !== 2 ? backgroundColor : undefined}
            alignItems="center"
            justifyContent="center"
            mb={index === 0 ? "60px !important" : "34px"}
          >
            <Text
              fontSize="24px"
              fontWeight="600"
              lineHeight="32px"
              letterSpacing="0em"
              textAlign="center"
              color={textColor}
              maxW="240px"
              maxH="30px"
            >
              {plan}
            </Text>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            position="relative"
            mb="10px"
          >
            <Text
              fontSize="24px"
              fontWeight="400"
              lineHeight="32px"
              letterSpacing="0em"
              textAlign="center"
              color="#888888"
              maxW="240px"
              maxH="30px"
              textDecoration="line-through"
            >
              {discount}
            </Text>

            {index === 2 && (
              <Box
                w="50px"
                h="90px"
                position="absolute"
                top="-8"
                right="3"
                backgroundImage={`url(${PriceBannar})`}
                backgroundSize="cover"
                zIndex="99"
                // boxShadow="0px 0px 10px rgba(0, 0, 0, 0.5)"
              >
                <Text
                  position="absolute"
                  top="0"
                  right="0"
                  color="white"
                  p="2"
                  fontSize="14px"
                >
                  Best Value
                </Text>
              </Box>
            )}
          </Flex>
          {/* {index === 2 && (
            <Box
              w="50px"
              h="90px"
              backgroundImage={`url(${PriceBannar})`}
              backgroundSize="cover"
              position="relative"
              zIndex="99"
              top="-16"
              left="210"
              // boxShadow="0px 0px 10px rgba(0, 0, 0, 0.5)"
            >
              <Text
                position="absolute"
                top="0"
                left="0"
                color="white"
                p="2"
                fontSize="14px"
              >
                Best Value
              </Text>
            </Box>
          )} */}

          <Text
            fontSize="38px"
            fontWeight="700"
            lineHeight="64px"
            letterSpacing="0em"
            textAlign="center"
            color="#010040"
            mb="10px"
          >
            {price}
          </Text>
          <Flex
            alignItems="center"
            justifyContent="center"
            color="#010040"
            mb="43px"
          >
            <Text
              fontSize="18px"
              fontWeight="400"
              lineHeight="28px"
              letterSpacing="0em"
              textAlign="center"
              color="#010040"
              maxW="211px"
              maxH="42px"
            >
              {priceDescription}
            </Text>
          </Flex>

          <Box as="ul" pl="12px" pr="12px">
            {Object.values(features).map((feature, index) => (
              <Box
                p="18px"
                maxW="272px"
                borderTop="1px solid #D9D9D9"
                // borderBottom="1px solid #D9D9D9"
                borderBottom={
                  index === Object.values(features).length - 1
                    ? "1px solid #D9D9D9"
                    : "none"
                }
              >
                <Link
                  key={index}
                  fontSize="sm"
                  color="#010040"
                  textDecoration="none !important"
                >
                  {feature}
                </Link>
              </Box>
            ))}
          </Box>
          <Flex alignItems="center" justifyContent="center" mt="32px" mb="44px">
            <Button
              bgGradient={index === 2 ? bgGradient : undefined}
              backgroundColor={index !== 2 ? backgroundColor : undefined}
              color={textColor}
              fontSize="18px"
              fontWeight="600"
              lineHeight="28px"
              letterSpacing="0em"
              textAlign="center"
              maxW="211px"
              h="54px"
              w="184px"
            >
              {CTA}
            </Button>
          </Flex>
        </Flex>
      </Box>

      {/* <Button bgGradient="linear(to-br, #00C2FF 3.94%, #8F00FF 94.16%)">
        test
      </Button> */}
    </>
  );
};

export default PricingCard;
