import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./buttonTheme";

export const theme = extendTheme({
  components: { Button: buttonTheme },
});

export default theme;
