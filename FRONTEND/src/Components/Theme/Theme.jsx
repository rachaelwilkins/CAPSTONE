import * as React from 'react';
import {CssBaseline, Box, Typography, Container} from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//sets the theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    background: {
      paper: '#EFF7FF', // your color
    },  
  },
}
);

export default function Theme(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
               sx={{
                   bgcolor: 'background.paper',
                   my: 5,
                   mx: -7
               }}
               >
                    <Container maxWidth="m">
                        <Typography
                        component="h1"
                        variant="p"
                        align="center"
                        color="text.primary"
                        gutterBottom
                        >
                          {props.children}
                        </Typography>
                    </Container>
                </Box>
            </main>
    </ThemeProvider>
  );
}