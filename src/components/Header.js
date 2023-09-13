import React from "react";
import { Navbar } from "./";
import logo from "../assets/logo.svg";
import { Link, Box, Button, Flex, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <header>
      <Flex
        height="60px"
        // top="80px"
        // left="16px"
        // borderWidth="1px"

        backdropFilter="blur(24px) brightness(100%)"
        alignItems="center"
        backgroundColor="rgba(255, 255, 255, 0.8)" // Using RGBA for transparency
        borderColor="var(--backgroundhover)"
        borderRadius="8px"
        // boxShadow="var(--shadow-lv3)"
        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.22)"
        display="flex"
        justifyContent="space-between"
        overflow="hidden"
        padding="9px 16px"
        position="fixed" // Fixed position to make it sticky
        top="0" // Stick to the top of the viewport
        left="50%" // Center it horizontally
        zIndex="999"
        transform="translateX(-50%)" // Center it horizontally
        width="1340px"
      >
        <Box>
          <Flex
            alignItems="center"
            width="762px"
            height="fit-content"
            justifyContent="space-between"
          >
            <Box>
              <a href="https://langclub.live/">
                <Image src={logo} alt="logo" w="132px" h="34px" />
              </a>
            </Box>
            <Box>
              <Navbar />
            </Box>
          </Flex>
        </Box>

        <Box>
          <Flex>
            <Button>Log in</Button>
            <Button>Sign up</Button>
          </Flex>
        </Box>
      </Flex>
    </header>
  );
};

export default Header;
