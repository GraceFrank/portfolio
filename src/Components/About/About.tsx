import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { GoTriangleRight } from "react-icons/go";
import profilePhoto from "../../assets/profile.png";

const skills = ["HTML", "CSS", "Javascript", "Typescript"];
const skills2 = ["React.js", "Node.js", "Next.js", "Redux"];

export const AboutSection = () => {
  const purple = useColorModeValue("purple.600", "purple.200");

  return (
    <Stack id="about" gap={5} py={20} height={"100vh"} justify={"center"}>
      <HStack gap={5}>
        <Heading as="h2" color={purple}>
          About Me
        </Heading>{" "}
        <Box border="1px solid gray" width={"40%"} />
      </HStack>
      <Stack direction={["column", "row"]} gap={16}>
        <Stack>
          <div data-aos="fade-right">
            <Text>
              Hello!I a Grace Frank I am Software Engineer with a strong
              background in Front-end development, I am driven by a passion for
              problem-solving. I am highly proficient in using Javascript,
              Typescript, Node.js and React.
            </Text>

            <Text>
              Here are a few technologies I’ve been working with recently:
            </Text>
          </div>
          <HStack>
            <Stack>
              {skills.map((skill) => (
                <div data-aos="fade-up">
                  <Button
                    justifyContent={"start"}
                    leftIcon={<GoTriangleRight />}
                    key={skill}
                    colorScheme="purple"
                    variant={"ghost"}
                  >
                    {skill}
                  </Button>
                </div>
              ))}
            </Stack>
            <Stack>
              {skills2.map((skill) => (
                <div data-aos="fade-up">
                  <Button
                    justifyContent={"start"}
                    leftIcon={<GoTriangleRight />}
                    key={skill}
                    colorScheme="purple"
                    variant={"ghost"}
                  >
                    {skill}
                  </Button>
                </div>
              ))}
            </Stack>
          </HStack>
        </Stack>

        <div data-aos="fade-left">
          <Box position={"relative"}>
            <Image
              background={"gray.300"}
              src={profilePhoto}
              borderRadius={"md"}
              width={300}
              border="4px solid"
              borderColor={"gray.400"}
              position={"absolute"}
            />
            <Box
              width={300}
              height={300}
              mt={5}
              ml={5}
              borderRadius={"md"}
              border={"2px solid"}
              borderColor={purple}
            ></Box>
          </Box>{" "}
        </div>
      </Stack>
    </Stack>
  );
};
