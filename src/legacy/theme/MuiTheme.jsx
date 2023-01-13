import React from "react";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import themeOptions from "../../theme/themeOptions"

const MuiTheme = ({ children }) => {

  let theme = createMuiTheme(themeOptions)
  
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
};

export default MuiTheme;

