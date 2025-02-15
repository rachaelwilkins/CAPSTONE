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
      paper: '#EFF7FF', 
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
                    bgcolor: 'white',
                    my: 5,
                    mx: -7,
                    fontFamily: 'League Spartan',
                }}
                >
                    <Container maxWidth="m">
                        <Typography
                        component="h1"
                        variant="p"
                        align="center"
                        position="center"
                        color="text.primary"
                        fontFamily="League Spartan"
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