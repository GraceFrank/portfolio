import {
  Stack,
  Flex,
  Text,
  Icon,
  Link,
  useColorModeValue,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import { NavItem } from "../@types/NavItem";

import { MdKeyboardArrowDown as ChevronDownIcon } from "react-icons/md";

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

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

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
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};
