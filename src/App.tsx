import { ChakraProvider, Box } from "@chakra-ui/react";
import { NavBar } from "./Components/Nav/Navbar";
import { HeroSection } from "./Components/Hero/Hero";
import { AboutSection } from "./Components/About/About";
import AOS from "aos";
import { extendTheme } from "@chakra-ui/react";

import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
// 1. import `extendTheme` function

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ config });

export default theme;

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box position={"relative"}>
        <NavBar />
        <Box px={[8, 40]}>
          <HeroSection />
          <AboutSection />
        </Box>
      </Box>
    </ChakraProvider>
  );
};
