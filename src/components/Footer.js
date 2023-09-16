import React from "react";
import logo from "../assets/logo.svg";
import {
  Link,
  Box,
  Button,
  Flex,
  Image,
  Divider,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const contactItems = [
    { label: "Langclub, Inc" },
    { label: "Kyuwon Lee(Jonah) CEO" },
    { label: "WeWork,105 5th floor, 8, Seojeon-ro," },
    { label: "Busanjin-gu, Busan, Republic of Korea" },
    { label: "306-14-65155" },
    { label: "jonah@langclub.live" },
  ];

  const navItems = [
    { label: "Session", href: "#" },
    { label: "Library", href: "#" },
    { label: "Review", href: "#" },
    { label: "FAQ", href: "#" },
  ];

  const myItems = [
    { label: "My Page", href: "#" },
    { label: "My Membership", href: "#" },
  ];

  return (
    <footer>
      <Divider borderColor={useColorModeValue("gray.400", "gray.600")} />

      <Box bg="#D9DBDE" p="34px" justifyContent="space-between">
        <Flex>
          <Box mr="88px">
            <a href="https://langclub.live/">
              <Image src={logo} alt="logo" w="110px" h="28.5px" />
            </a>
          </Box>

          <Stack direction="column">
            <Flex>
              <Box mr="144px">
                {contactItems.map((item) => (
                  <Text
                    key={item.label}
                    fontSize="11px"
                    fontWeight="600"
                    lineHeight="19px"
                    letterSpacing="0"
                    textAlign="left"
                  >
                    {item.label}
                  </Text>
                ))}
              </Box>

              <Box mr="53px">
                <Stack align="start">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      fontSize="11px"
                      fontWeight="600"
                      lineHeight="19px"
                      letterSpacing="0"
                      textAlign="left"
                    >
                      {item.label}
                    </Link>
                  ))}
                </Stack>
              </Box>

              <Box mr="53px">
                <Stack align="start">
                  {myItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      fontSize="11px"
                      fontWeight="600"
                      lineHeight="19px"
                      letterSpacing="0"
                      textAlign="left"
                    >
                      {item.label}
                    </Link>
                  ))}
                </Stack>
              </Box>
            </Flex>

            <Flex mt="35px" justify="space-between">
              <Flex>
                <Stack align="start">
                  {myItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      fontSize="11px"
                      fontWeight="600"
                      lineHeight="19px"
                      letterSpacing="0"
                      textAlign="left"
                    >
                      {item.label}
                    </Link>
                  ))}
                </Stack>
              </Flex>

              {/* <Flex justify="right">
                <Text
                  fontSize="11px"
                  fontWeight="400"
                  lineHeight="19px"
                  letterSpacing="0"
                  textAlign="left"
                  color="#888888"
                >
                  Copyright(c) LANGCLUB all right reserved.
                </Text>
              </Flex> */}
            </Flex>
          </Stack>
        </Flex>

        <Box>
          <Flex justify="right">
            <Text
              fontSize="11px"
              fontWeight="400"
              lineHeight="19px"
              letterSpacing="0"
              textAlign="left"
              color="#888888"
            >
              Copyright(c) LANGCLUB all right reserved.
            </Text>
          </Flex>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
