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
  Container,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import { NavBar } from "./Components/Nav/Navbar";
import { HeroSection } from "./Components/Hero/Hero";
import { AboutSection } from "./Components/About/About";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <NavBar />
      <Box px={[8, 40]}>
        <HeroSection />
        <AboutSection />
      </Box>
    </Box>
  </ChakraProvider>
);
