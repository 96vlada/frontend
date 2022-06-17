import Head from 'next/head'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import AppsIcon from '@mui/icons-material/Apps';


export default function Home() {
  return (
    <div>
      <Container maxWidth="xs" sx={{ flexGrow: 1, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Card sx={{ minWidth: 275, padding: '40px 10px' }}>
          <Grid container spacing={2} alignItems="center"
            justifyContent="center">
            <Grid item xs={10}>
              <h2 id="app_title" sx={{ fontFamily: 'Merriweather' }}><AppsIcon /> Innonde App</h2>
            </Grid>

            <Grid item xs={10}>
              <TextField id="outlined-basic" label="Username" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={10}>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                fullWidth
              />
            </Grid>
            <Grid item xs={10} sx={{ textAlign: 'center' }}>
              <Button variant="outlined">Login</Button>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </div>


  )
}
