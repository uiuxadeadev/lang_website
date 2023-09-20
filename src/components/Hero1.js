import React from "react";
import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import Missing from "../assets/Missing.png";
import { useNavigate } from "react-router-dom";

const Hero1 = () => {
  const navigateTo = useNavigate();

  const handleClick = () => {
    navigateTo("/Session");
  };

  return (
    <Box
      bgGradient="linear(to-br, #EEFCFF, #FFFFFF, #F5F4FF, #FFD6EC)"
      w="100vw"
      h="100vh"
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
            Grow your English fluency <br />
            with members from over 140+ countries
          </Text>
          <Button
            w="308px"
            h="48px"
            p="10px 20px"
            borderRadius="8px"
            boxShadow="0px 2px 2px 0px rgba(0, 0, 0, 0.38)"
            bgGradient="linear(to-br, #00C2FF 3.94%, #8F00FF 94.16%)"
            color="white"
            transition="background 0.3s, box-shadow 0.3s"
            _hover={{
              bgGradient: "linear(to-br, #00F0FF 0.77%, #0047FF 99.23%)",
              boxShadow: "0px 12px 12px 0px rgba(0, 0, 0, 0.38)",
            }}
            onClick={handleClick}
          >
            Start for Free!
          </Button>
        </Box>

        <Box>
          <Image src={Missing} alt="Hero1 image" w="715px" h="615px" mr="4" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero1;
