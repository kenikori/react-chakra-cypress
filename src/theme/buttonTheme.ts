import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const brandPrimary = defineStyle({
  background: "orange.500",
  color: "white",
  fontWeight: "normal",

  _dark: {
    background: "orange.300",
    color: "orange.800",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { brandPrimary },
});
