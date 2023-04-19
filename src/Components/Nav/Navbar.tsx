import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import { MdMenu as HamburgerIcon, MdClose as CloseIcon } from "react-icons/md";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { MobileNav } from "./MobileNav";
import { NavItem } from "../../@types/NavItem";
import { DesktopNav } from "./DesktopNav";

export const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2, md: 4 }}
        px={{ base: 4, md: 10 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          {/* logo */}
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            fontWeight={"bold"}
            fontSize={{ base: "lg", md: "2xl" }}
            color="gray.500"
          >
            &lt;
            <Text
              color={useColorModeValue("purple.500", "purple.200")}
              as="span"
            >
              Grace &nbsp;
            </Text>
            &#47;&gt;
          </Text>
        </Flex>

        <Flex display={{ base: "none", md: "flex" }} ml={10}>
          <DesktopNav navItems={NAV_ITEMS} />
        </Flex>
        <HStack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
        >
          <ColorModeSwitcher />
        </HStack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={NAV_ITEMS} />
      </Collapse>
    </Box>
  );
};

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Portfolio",
    href: "#portfolio",
  },
  {
    label: "Contact",
    href: "#contact",
  },
  {
    label: "Contact",
    children: (
      <Button size="sm" variant={"outline"} colorScheme="purple">
        Resume
      </Button>
    ),
  },
];
