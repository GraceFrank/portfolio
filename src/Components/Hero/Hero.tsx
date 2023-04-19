import {
  Stack,
  Text,
  Link,
  useColorModeValue,
  Heading,
  VStack,
} from "@chakra-ui/react";

export const HeroSection = () => {
  const purple = useColorModeValue("gray.700", "purple.200");
  return (
    <VStack height="100vh" justify={"center"} alignItems={"start"}>
      <Stack>
        <Text
          fontSize={"xl"}
          color={useColorModeValue("gray.700", "purple.200")}
        >
          &#x1F44B; Hi, my name is
        </Text>
        <div data-aos="flip-right">
          <Heading
            size={"4xl"}
            color={useColorModeValue("purple.600", "white")}
          >
            Grace Frank.
          </Heading>{" "}
        </div>

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
