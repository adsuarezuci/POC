import React from "react";
import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import themeOptions from "../../theme/themeOptions"

const MuiTheme = ({ children }) => {

  let theme = createTheme(themeOptions)
  
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default MuiTheme;
