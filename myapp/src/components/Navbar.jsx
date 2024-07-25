import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
          <AppBar>
              <Toolbar>
                  <Typography variant="h4" component="div" sx={{flexGrow: 1 }}>
                      Myapp</Typography>
                  <Link to='/sign'><Button variant="contained" color="secondary">Signup</Button></Link>&nbsp;
          <Link to='/login'><Button variant="contained" color="secondary">Login</Button></Link>&nbsp;
          <Link to='/statebasics'><Button variant="contained" color="secondary">Statebasics</Button></Link>&nbsp;
          <Link to='/counter'><Button variant="contained" color="secondary">Counter</Button></Link>&nbsp;
          <Link to='/greet'><Button variant="contained" color="secondary">Greet</Button></Link>&nbsp;
          <Link to='/map'><Button variant="contained" color="secondary">Map</Button></Link>&nbsp;
          <Link to='/api'><Button variant="contained" color="secondary">Api</Button></Link>&nbsp;
          <Link to='/post'><Button variant="contained" color="secondary">Post</Button></Link>&nbsp;
          <Link to='/poki'><Button variant="contained" color="secondary">Poki</Button></Link>&nbsp;
              </Toolbar>
          </AppBar>
          <br /><br /><br /><br /><br />
    </div>
  )
}

export default Navbar
