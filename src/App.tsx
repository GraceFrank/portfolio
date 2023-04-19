import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import { NavBar } from "./Components/Nav/Navbar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <NavBar />
    </Box>
  </ChakraProvider>
);
