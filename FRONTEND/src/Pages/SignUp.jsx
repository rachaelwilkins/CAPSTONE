import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import '../App.css';
import axios from "axios";

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const object={
      first_name: data.get('firstName'),
      last_name: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    };
    const sneakerLink = `http://localhost:8080/api/users/create`
    return axios.post(sneakerLink, object)
        .then(response => { 
            console.log(response.data.data);
            alert('successfully signed up.')
         })
        .catch(error => { 
            console.log(error);
            return Promise.reject(error);
        })
  };
  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'black',
            fontFamily: 'League Spartan',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'black' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" fontFamily={"League Spartan"}>
            sign up to sneakerhub.
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="first_name"
                  label="first name."
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="last_name"
                  label="last name."
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="email address."
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="password."
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" fontFamily="League Spartan"/>}
                  label="i want to receive sneaker inspo, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fontFamily="League Spartan"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              sign up.
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2" fontFamily={"League Spartan"}>
                  already have an account? sign in.
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}