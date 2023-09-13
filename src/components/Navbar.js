import React from "react";
import { Link } from "react-router-dom";
import { Flex, Button } from "@chakra-ui/react";

const navLinks = [
  { to: "/Session", name: "Session" },
  { to: "/Library", name: "Library" },
  { to: "/Review", name: "Review" },
  { to: "/FAQ", name: "FAQ" },
];

const Navbar = () => {
  return (
    <nav>
      <Flex as="nav" justify="space-between" align="center">
        <Flex as="ul">
          {navLinks.map((link, index) => (
            <Button
              key={index}
              as={Link}
              to={link.to}
              variant="ghost"
              colorScheme="gray"
              mr="2"
            >
              {link.name}
            </Button>
          ))}
        </Flex>
      </Flex>
    </nav>
  );
};

export default Navbar;
