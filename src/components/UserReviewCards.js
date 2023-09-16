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
import { UserReviewCard } from "./";
import userImage1 from "../assets/userImage1.png";
import flagUkraine from "../assets/Ukraine.svg";

const users = [
  {
    profileImage: userImage1,
    countryFlag: flagUkraine,
    countryName: "Ukraine",
    review:
      "Best!This website is best for learning English! I would like to recommend to my friends and colleagues to join this website and improve your communication skills. Also, I had meet lots of new people here, and it is good platform to share your thoughts with new people.",
  },
  {
    profileImage: userImage1,
    countryFlag: flagUkraine,
    countryName: "Ukraine",
    review:
      "Best!This website is best for learning English! I would like to recommend to my friends and colleagues to join this website and improve your communication skills. Also, I had meet lots of new people here, and it is good platform to share your thoughts with new people.",
  },
  {
    profileImage: userImage1,
    countryFlag: flagUkraine,
    countryName: "Ukraine",
    review:
      "Best!This website is best for learning English! I would like to recommend to my friends and colleagues to join this website and improve your communication skills. Also, I had meet lots of new people here, and it is good platform to share your thoughts with new people.",
  },
  {
    profileImage: userImage1,
    countryFlag: flagUkraine,
    countryName: "Ukraine",
    review:
      "Best!This website is best for learning English! I would like to recommend to my friends and colleagues to join this website and improve your communication skills. Also, I had meet lots of new people here, and it is good platform to share your thoughts with new people.",
  },
];

const UserReviewCards = () => {
  return (
    <Box p={4} maxW="1248px" mx="auto" justify="space-between" align="center">
      <SimpleGrid columns={[1, 2, 3, 4]} spacing="16px">
        {users.map((user, index) => (
          <UserReviewCard key={index} {...user} index={index} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default UserReviewCards;
