import React, { useState } from 'react'
import {Typography,TextField,Button} from '@mui/material'

const Statebasics = () => {
    var [fname, setFname] = useState("")
    var [val, setval] = useState("")
    
    const handleinput = (e) => {
        setFname(e.target.value)
        console.log(fname)


    }
    const submithandler= () => {
        setval(fname)
       
    }
  return (
      <div>
          <Typography variant='h6'>WELCOME {val}</Typography>
          <TextField variant='outlined' onChange={handleinput} />
          <Button variant='outlined' onClick={submithandler}>click
          </Button>
              
        
          
          
      </div>
  )
}

export default Statebasics
