import React from "react";
import {
  Link,
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { PricingCard } from "./";

const pricingData = [
  {
    themeColors: {
      textColor: "#010040",
      backgroundColor: "#B9BABC",
    },
    plan: "Free Plan",
    price: "Free",
    priceDescription: "Best Environment for English speaking",
    features: {
      feature1: "Unlimited participation in Zoom Session",
      feature2: "3 Premium tickets are Charged every month",
    },
    CTA: "Start For Free",
  },
  {
    themeColors: {
      textColor: "#F2F4F7",
      backgroundColor: "#560099",
    },
    plan: "Premium / 1 month",
    discount: "14.99$",
    price: "9.9$/mo",
    priceDescription: "Best Way to make A habit of Learning English",
    features: {
      feature1: "feature",
      feature2: "feature",
      feature3: "feature",
      feature4: "feature",
    },
    CTA: "Add This Plan",
  },
  {
    themeColors: {
      textColor: "#F2F4F7",
      bgGradient: "linear(to-br, #00C2FF 3.94%, #8F00FF 94.16%)",
    },
    plan: "Premium / 3 month",
    discount: "14.99$",
    price: "8.9$/mo",
    priceDescription: "Best Way to make A habit of Learning English",
    features: {
      feature1: "feature",
      feature2: "feature",
      feature3: "feature",
      feature4: "feature",
    },
    CTA: "Add This Plan",
  },
  {
    themeColors: {
      textColor: "#F2F4F7",
      backgroundColor: "#0057FF",
    },
    plan: "Premium / 6 month",
    discount: "14.99$",
    price: "7.9$/mo",
    priceDescription: "Best Way to make A habit of Learning English",
    features: {
      feature1: "feature",
      feature2: "feature",
      feature3: "feature",
      feature4: "feature",
    },
    CTA: "Add This Plan",
  },
];

const PricingCards = () => {
  return (
    <Box p={4} maxW="1248px" mx="auto" justify="space-between" align="center">
      <SimpleGrid columns={[1, 2, 3, 4]} spacing="16px">
        {pricingData.map((price, index) => (
          <PricingCard key={index} {...price} index={index}/>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PricingCards;
