import React, { useEffect, useState} from 'react';
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
import { useData } from '../Hooks/useData';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../Context/SneakerContext';


export default function SignIn() {
  const{user, setUser} = useUserContext()
  const data = useData(`http://localhost:8080/api/users`);
  const [LEmail, setLEmail] = useState('')
  const [LPassWord, setLPassWord] = useState('')
  const [users, setUsers] = useState('')
  const [validateMsg, setValidateMsg] = useState(null)
  let navigate = useNavigate();

  //get the users

  useEffect(() => {
      setUsers(data ? data:[])
      }, [data]
      )
  const handleSubmit=(event)=>
    {
      event.preventDefault()
      let matchedEmail=false
        for (let u of users)
        {
          console.log(u, "Email")
          if (LEmail===u?.email)
          {
            console.log(u, "password verification")
            matchedEmail=true
            if (LPassWord===u?.password)
            {
              setUser(u)
              console.log(u)
              navigate('/');
            }
            else
            {
                alert('incorrect password - please try again.');
            }
          }
        }
        if (!matchedEmail)
        {
          alert('unknown email - please register first.');
        }
    }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'centre',
            color: 'black',
            fontFamily: 'League Spartan',
                    }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'black' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" fontFamily={"League Spartan"} color={"black"}>
            sign in to sneakerhub. 
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} fontFamily={"League Spartan"}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="email address."
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e=>setLEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="password."
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e=>setLPassWord(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="remember me."
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, fontFamily: "League Spartan" }}
            >
              sign in.
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color="primary" fontFamily={"League Spartan"} >
                  forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2" fontFamily={"League Spartan"}>
                  {"no account? sign up here."}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}