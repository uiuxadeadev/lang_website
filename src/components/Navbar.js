import React from "react";
import { Link } from "react-router-dom";
import { Flex, Button, Text } from "@chakra-ui/react";

const navLinks = [
  { to: "/Session", name: "Session" },
  { to: "/Library", name: "Library" },
  { to: "/Review", name: "Review" },
  { to: "/FAQ", name: "FAQ" },
];

const Navbar = () => {
  return (
    <nav>
      <Flex justify="space-between" align="center">
        {navLinks.map((link, index) => (
          <Button
            key={index}
            as={Link}
            to={link.to}
            variant="ghost"
            colorScheme="gray"
            w="80px"
            mr="32px"
          >
            <Text
              color="#020063"
              fontSize="16px"
              fontWeight="600"
              lineHeight="20px"
              letterSpacing="0"
              textAlign="center"
            >
              {link.name}
            </Text>
          </Button>
        ))}
      </Flex>
    </nav>
  );
};

export default Navbar;
