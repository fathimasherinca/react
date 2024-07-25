import React, { useEffect, useState } from 'react'
import { Typography, Button } from '@mui/material'

const Greet = () => {
    const [greet, setGreet] = useState();
    const react = () => {
        setGreet("React");
    }
    const angular = () => {
        setGreet("Angular");
    }
    const view = () => {
        setGreet("View");
    }
    useEffect(() => { 
        angular()
    }, [])
    
  return (
      <div>
          <Typography variant='h3'> Welcome to { greet}</Typography>
          <Button style={{ fontSize: '30px', backgroundColor: 'green', fontWeight: 'bold', color: 'white' }} onClick={react}>React </Button> &nbsp;
          <Button style={{ fontSize: '30px', backgroundColor: 'green', fontWeight: 'bold', color: 'white' }} onClick={angular}>Angular</Button>  &nbsp;
          <Button style={{ fontSize: '30px', backgroundColor: 'green', fontWeight: 'bold', color: 'white' }} onClick={view}> View</Button> &nbsp;
    </div>
  )
}

export default Greet
