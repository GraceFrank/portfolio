import {
  Stack,
  Flex,
  Text,
  Link,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { NavItem } from "../@types/NavItem";

export const MobileNav = ({ navItems }: { navItems: NavItem[] }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {navItems.map((navItem) =>
        navItem.children ? (
          navItem.children
        ) : (
          <MobileNavItem key={navItem.label} {...navItem} />
        )
      )}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("purple.600", "purple.200")}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};
