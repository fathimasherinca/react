import React from 'react'
import { Typography, TextField, Button } from '@mui/material';



const Login = () => {
  return (
      <div>
          <Typography variant="h4">Login</Typography><br />
          <TextField id="standard-basic" label="Username" variant="standard" style={{ color:'green'}}/><br />
          <TextField id="standard-basic" label="Password" variant="standard" /><br /><br /><br /><br />
          <Button variant="contained">Login</Button>
          
      
    </div>
  )
}

export default Login
