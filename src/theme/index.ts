import { extendTheme } from "@chakra-ui/react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const theme = extendTheme({
  fonts: {
    body: montserrat.style.fontFamily,
    heading: montserrat.style.fontFamily,
  },
});
