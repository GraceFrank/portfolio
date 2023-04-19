import {
  Stack,
  Flex,
  Text,
  Link,
  useColorModeValue,
  Heading,
  VStack,
  Box,
} from "@chakra-ui/react";
import { NavItem } from "../../@types/NavItem";

export const HeroSection = () => {
  const purple = useColorModeValue("gray.700", "purple.200");
  return (
    <VStack height="90vh" justify={"center"} alignItems={"start"}>
      <Stack>
        <Text
          fontSize={"xl"}
          color={useColorModeValue("gray.700", "purple.200")}
        >
          &#x1F44B; Hi, my name is
        </Text>
        <Heading size={"4xl"} color={useColorModeValue("purple.600", "white")}>
          Grace Frank.
        </Heading>
        <Heading size={"2xl"} color={useColorModeValue("gray.700", "gray.500")}>
          I build things for the web.
        </Heading>
        <Text width={"full"} pt="5">
          I’m a software engineer specializing in building web applications.
          Currently, work at &nbsp;
          <Link
            textDecor={"underline"}
            href="https://sendhark.com"
            target="_blank"
            color={useColorModeValue("gray.700", "purple.200")}
          >
            Hark
          </Link>
          .
        </Text>
      </Stack>
    </VStack>
  );
};
