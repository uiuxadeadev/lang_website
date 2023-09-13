import React from "react";
import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import Missing1 from "../assets/Missing1.png";
import { useNavigate } from "react-router-dom";

const Hero1 = () => {
  const navigateTo = useNavigate();
  function handleClick() {
    // history.push("/reservations");
    navigateTo("/Session");
  }

  return (
    <div>
      <Box
        bgGradient="linear(to-br, #EEFCFF, #FFFFFF, #F5F4FF, #FFD6EC)" // Define the gradient using the colors
        w="100vw" // Set the width to 100% of the viewport width
        h="100vh" // Set the height to 100% of the viewport height
      >
        <Flex
          maxW="1300px"
          mx="auto"
          justify="space-between"
          align="center"
          pt="140px"
        >
          <Box maxW="525px" ml="67px" mr="30px" mb="183px" align="left">
            <Text
              fontSize="54px"
              fontWeight="700"
              lineHeight="64px"
              letterSpacing="0"
              textAlign="left"
              color="#020063"
              mb="9px"
            >
              Practice English <br />
              For Free!
            </Text>
            <Text
              fontSize="18px"
              fontWeight="600"
              lineHeight="28px"
              letterSpacing="0"
              textAlign="left"
              color="#666666"
              mb="87px"
            >
              Grow up Your English fluency <br />
              with Members from over 140+ Countries
            </Text>
            <Button
              w="308px"
              h="48px"
              p="10px 20px"
              borderRadius="8px"
              boxShadow="0px 2px 2px 0px rgba(0, 0, 0, 0.38)"
              bgGradient="linear(to-br, #00C2FF 3.94%, #8F00FF 94.16%)" // Gradient background
              color="white"
              //   gap="8px" // Gap between elements if it's in a Flex container
              transition="background 0.3s, box-shadow 0.3s" // Transition for background and box-shadow
              _hover={{
                bgGradient: "linear(to-br, #00F0FF 0.77%, #0047FF 99.23%)", // Gradient background on hover
                boxShadow: "0px 12px 12px 0px rgba(0, 0, 0, 0.38)", // Box shadow on hover
              }}
              onClick={handleClick}
            >
              Start for Free!
            </Button>
          </Box>

          <Box>
            <Image
              src={Missing1}
              alt="Hero1 image"
              w="715px"
              h="615px"
              mr="4"
            />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero1;
