import React from "react";
import {
  Link,
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Hero12FAQ = () => {
  return (
    <>
      <Stack
        bgGradient="linear-gradient(90deg, #E1F8FF 0%, #FFFFFF 41.15%, #F8EEFF 100%)"
        direction="column"
        alignItems="center"
        pt="111px"
        pb="111px"
      >
        <Flex justify="space-between" align="center" bg="#FFFFFF" mb="100px">
          <Text
            color="#000000"
            fontSize="54px"
            fontWeight="700"
            lineHeight="64px"
            letterSpacing="0"
            textAlign="center"
          >
            FAQ
          </Text>
        </Flex>

        <Accordion defaultIndex={[0]} allowMultiple w="600px" maxW="600px">
          <AccordionItem
            boxShadow="0px 2px 2px 0px rgba(0, 0, 0, 0.38)"
            borderRadius="8px"
            mb="16px"
          >
            <h2>
              <AccordionButton h="64px" p="16px 24px">
                <Box
                  as="span"
                  flex="1"
                  fontSize="24px"
                  fontWeight="600"
                  lineHeight="32px"
                  letterSpacing="0"
                  textAlign="left"
                  color="#666666"
                >
                  How can I join the session?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              backgroundColor="#F2F4F7"
              fontSize="18px"
              fontWeight="400"
              lineHeight="28px"
              letterSpacing="0"
              textAlign="left"
              color="#000000"
              alignItems="left"
              p="32px 24px"
            >
              Please check our session list page to see all session times. They
              are all displayed in your local time zone
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            boxShadow="0px 2px 2px 0px rgba(0, 0, 0, 0.38)"
            borderRadius="8px"
            mb="16px"
          >
            <h2>
              <AccordionButton h="64px" p="16px 24px">
                <Box
                  as="span"
                  flex="1"
                  fontSize="24px"
                  fontWeight="600"
                  lineHeight="32px"
                  letterSpacing="0"
                  textAlign="left"
                  color="#666666"
                >
                  How can I join the session?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              backgroundColor="#F2F4F7"
              fontSize="18px"
              fontWeight="400"
              lineHeight="28px"
              letterSpacing="0"
              textAlign="left"
              color="#000000"
              alignItems="left"
              p="32px 24px"
            >
              Please check our session list page to see all session times. They
              are all displayed in your local time zone
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            boxShadow="0px 2px 2px 0px rgba(0, 0, 0, 0.38)"
            borderRadius="8px"
            mb="16px"
          >
            <h2>
              <AccordionButton h="64px" p="16px 24px">
                <Box
                  as="span"
                  flex="1"
                  fontSize="24px"
                  fontWeight="600"
                  lineHeight="32px"
                  letterSpacing="0"
                  textAlign="left"
                  color="#666666"
                >
                  How can I join the session?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              backgroundColor="#F2F4F7"
              fontSize="18px"
              fontWeight="400"
              lineHeight="28px"
              letterSpacing="0"
              textAlign="left"
              color="#000000"
              alignItems="left"
              p="32px 24px"
            >
              Please check our session list page to see all session times. They
              are all displayed in your local time zone
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            boxShadow="0px 2px 2px 0px rgba(0, 0, 0, 0.38)"
            borderRadius="8px"
            mb="16px"
          >
            <h2>
              <AccordionButton h="64px" p="16px 24px">
                <Box
                  as="span"
                  flex="1"
                  fontSize="24px"
                  fontWeight="600"
                  lineHeight="32px"
                  letterSpacing="0"
                  textAlign="left"
                  color="#666666"
                >
                  How can I join the session?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              backgroundColor="#F2F4F7"
              fontSize="18px"
              fontWeight="400"
              lineHeight="28px"
              letterSpacing="0"
              textAlign="left"
              color="#000000"
              alignItems="left"
              p="32px 24px"
            >
              Please check our session list page to see all session times. They
              are all displayed in your local time zone
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Flex alignItems="center" justifyContent="center" mt="100px">
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
          >
            Start for Free!
          </Button>
        </Flex>
      </Stack>
    </>
  );
};

export default Hero12FAQ;
