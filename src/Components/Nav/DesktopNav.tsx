import { Stack, Link, useColorModeValue } from "@chakra-ui/react";
import { NavItem } from "../../@types/NavItem";

export const DesktopNav = ({ navItems }: { navItems: NavItem[] }) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("purple.600", "purple.200");

  return (
    <Stack direction={"row"} spacing={4}>
      {navItems.map((navItem) =>
        navItem.children ? (
          navItem.children
        ) : (
          <Link
            key={navItem.label}
            p={2}
            href={navItem.href ?? "#"}
            fontSize={"sm"}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </Link>
        )
      )}
    </Stack>
  );
};
