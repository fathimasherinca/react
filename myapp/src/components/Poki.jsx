import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';

const Poki = () => {
    var [poku, setPoku] = useState([])
    useEffect(() => { })
    axios.get("https://dummyapi.online/api/pokemon")
        .then((response) => {
            console.log(response)
            setPoku(response.data)
        })

    return (
        <div>
            <Grid container spacing={2}>
                {poku.map((val, i) => {
                    return (
                
                    
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={val.image_url}
                                    
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {val.pokemon}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>

        </div>
    )
}

export default Poki
