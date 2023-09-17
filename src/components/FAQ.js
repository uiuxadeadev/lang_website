import React from "react";
import {
  Stack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import copeIcon from "../assets/copeIcon.svg";

const FAQItem = ({ question, answer }) => (
  <AccordionItem
    boxShadow="0px 2px 2px 0px rgba(0, 0, 0, 0.38)"
    borderRadius="8px"
    mb="16px"
  >
    <h2>
      <AccordionButton maxH="96px" p="16px 24px">
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
          {question}
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
      {answer}
    </AccordionPanel>
  </AccordionItem>
);

const FAQ = () => {
  const faqData = [
    {
      question: "How can I join the session?",
      answer:
        "Please check our session list page to see all session times. They are all displayed in your local time zone.",
    },
    {
      question: "How the session is done?",
      answer:
        "Please check our session list page to see all session times. They are all displayed in your local time zone.",
    },
    {
      question:
        "What level of English is required to join a Langclub session??",
      answer:
        "Please check our session list page to see all session times. They are all displayed in your local time zone.",
    },
    {
      question: "I'd like to host a session by myself. What should I do?",
      answer: "Answer to another FAQ question.",
    },
    {
      question: "How can I join the session?",
      answer:
        "Please check our session list page to see all session times. They are all displayed in your local time zone.",
    },
    {
      question: "Another FAQ question?",
      answer: "Answer to another FAQ question.",
    },
  ];

  return (
    <>
      <Stack
        bgGradient="linear-gradient(90deg, #E1F8FF 0%, #FFFFFF 41.15%, #F8EEFF 100%)"
        direction="column"
        alignItems="center"
        pt="128px"
        pb="111px"
      >
        <Flex justify="space-between" align="center" bg="#FFFFFF" mb="40px">
          <Text
            color="#020063"
            fontSize="54px"
            fontWeight="700"
            lineHeight="64px"
            letterSpacing="0"
            textAlign="center"
          >
            Frequently Asked Questions
          </Text>
        </Flex>

        <Accordion
          defaultIndex={[0]}
          allowMultiple
          w="600px"
          maxW="600px"
          mb="128px"
        >
          {faqData.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </Accordion>

        <Flex justify="space-between" align="center" bg="#FFFFFF" mb="40px">
          <Text
            color="#020063"
            fontSize="54px"
            fontWeight="700"
            lineHeight="64px"
            letterSpacing="0"
            textAlign="center"
          >
            Didn't find an answer?
          </Text>
        </Flex>

        <Flex
          alignItems="center"
          justify="space-between"
          w="610px"
          h="62px"
          p="14px 24px"
          borderRadius="8px"
          border="1px solid #666666"
          bgGradient="#FFFFFF"
          color="#666666"
        >
          <Box>
            <Text
              color="#666666"
              fontSize="24px"
              fontWeight="400"
              lineHeight="32px"
              letterSpacing="0"
              textAlign="center"
            >
              E-mail : jonah@langclub.live
            </Text>
          </Box>
          <Button
            p="14px 17px"
            borderRadius="8px"
            border="1px solid #666666"
            transition="background 0.3s, box-shadow 0.3s"
            boxShadow="0px 2px 2px 0px rgba(0, 0, 0, 0.38)"
          >
            <Image src={copeIcon} alt={`${copeIcon} icon`} w="30px" h="30px" />
            <Text
              color="#666666"
              fontSize="16px"
              fontWeight="400"
              lineHeight="32px"
              letterSpacing="0"
              textAlign="center"
            >
              Copy email
            </Text>
          </Button>
        </Flex>
      </Stack>
    </>
  );
};

export default FAQ;
