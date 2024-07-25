import React from 'react'
import {Button,Typography} from '@mui/material'

const Counter = () => {
    const [count, setCount] = React.useState(0);
    
    const handleDecrement = () => {
        setCount(count - 1)
    }

        const handleIncrement = () => {
            setCount(count + 1)
    }

  return (
    <div>
          <Button style={{ fontSize:'30px',backgroundColor:'green',fontWeight:'bold',color:'white'}}  onClick={handleDecrement}> - </Button>
          <Typography variant="h3" >Count: { count }</Typography> 
          <Button style={{ fontSize: '30px', backgroundColor: 'green', fontWeight: 'bold', color: 'white' }} onClick={handleIncrement}> + </Button>
    </div>
  )
}

export default Counter
