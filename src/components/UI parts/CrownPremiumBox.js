import React from "react";
import { Link, Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import imageGroup403White from "../../assets/Group 403_white.svg";
import imageGroup380 from "../../assets/Group 380.svg";

const CrownPremiumBox = ({ width }) => {
  return (
    <>
      <Flex
        justifyContent="space-between"
        maxW={width} // Maximum width based on the prop
        padding="10px 17px" // Padding (clockwise: top right bottom left)
        borderRadius="8px"
        border="2px solid" // Border
        borderColor="linear-gradient(to bottom, rgb(0, 194, 255), rgb(143, 0, 255))"
        gap="14px"
      >
        <Box>
          <Image
            src={imageGroup380}
            alt="langclub Premium crown"
            w="21px"
            h="100%"
          />
        </Box>

        <Box>
          <Image
            src={imageGroup403White}
            alt="langclub Premium"
            w="172px"
            h="100%"
            position="relative"
            top="5px"
          />
        </Box>
      </Flex>
    </>
  );
};

export default CrownPremiumBox;
