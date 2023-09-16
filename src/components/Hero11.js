import React from "react";
import AmbassadorImage from "../assets/AmbassadorImage.png";
import { Stack, Box, Flex, Text, Button, Image } from "@chakra-ui/react";

const Hero11 = () => {
  return (
    <>
      <Box
        backgroundColor="#FFFFFF"
        w="100vw" // Set the width to 100% of the viewport width
        h="100vh" // Set the height to 100% of the viewport height
      >
        <Flex
          maxW="1300px"
          mx="auto"
          justify="space-between"
          alignItems="center"
          pt="140px"
          mb="181px"
        >
          <Stack maxW="500px" direction="column" alignItems="left">
            <Text
              fontSize="54px"
              fontWeight="700"
              lineHeight="64px"
              letterSpacing="0"
              textAlign="left"
              color="#020063"
              mb="41px"
            >
              Become
              <br />
              Our Ambassador!
            </Text>
            <Text
              fontSize="18px"
              fontWeight="600"
              lineHeight="28px"
              letterSpacing="0"
              textAlign="left"
              color="#666666"
              mb="97px"
            >
              We need your help! We are looking for people who love Langclub and
              want to help it grow. As a LangClub Ambassador, you will receive
              our thanks, recognition and compensations for your hard work.
              Click 'Apply' for more information!
            </Text>
            <Button
              w="300px"
              h="48px"
              p="10px 20px"
              borderRadius="8px"
              boxShadow="0px 2px 2px 0px rgba(0, 0, 0, 0.38)"
              bgGradient="linear(to-br, #00C2FF 3.94%, #8F00FF 94.16%)" // Gradient background
              color="white"
              transition="background 0.3s, box-shadow 0.3s" // Transition for background and box-shadow
              _hover={{
                bgGradient: "linear(to-br, #00F0FF 0.77%, #0047FF 99.23%)", // Gradient background on hover
                boxShadow: "0px 12px 12px 0px rgba(0, 0, 0, 0.38)", // Box shadow on hover
              }}
              // onClick={handleClick}
            >
              Apply
            </Button>
          </Stack>

          <Box>
            <Image
              src={AmbassadorImage}
              alt="AmbassadorImage"
              w="712px"
              h="464px"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Hero11;
