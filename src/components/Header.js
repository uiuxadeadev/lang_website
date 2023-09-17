import React from "react";
import { Navbar } from "./";
import logo from "../assets/logo.svg";
import { Link, Box, Button, Flex, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <header>
      <Flex
        w="1340px"
        maxW="1340px"
        h="60px"
        alignItems="center"
        backgroundColor="rgba(255, 255, 255, 0.8)"
        borderColor="var(--backgroundhover)"
        borderRadius="8px"
        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.22)"
        justifyContent="space-between"
        overflow="hidden"
        padding="9px 16px"
        position="fixed"
        top="16px"
        left="50%"
        zIndex="999"
        transform="translateX(-50%)"
      >
        <Flex
          w="762px"
          height="fit-content"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link to="/">
            <Image src={logo} alt="logo" w="132px" h="34px" />
          </Link>
          <Navbar />
        </Flex>

        <Flex justifyContent="space-between" gap="8px">
          <Button w="92px" h="38px" borderRadius="8px" padding="3px 16px">
            Log in
          </Button>
          <Button w="92px" h="38px" borderRadius="8px" padding="3px 16px">
            Sign up
          </Button>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
