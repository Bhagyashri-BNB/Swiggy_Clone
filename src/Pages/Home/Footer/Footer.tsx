import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import Grid from '@mui/material/Grid'
import Typography from "@mui/material/Typography"

const Footer = () => {
  return (
    <div>
        <Box
        height="60px"
        width="fullwidth"
        sx={{backgroundColor: 'black'}}
        >
            <Grid container>
                <Grid item xs={4}>
                    <img style={{marginTop: '6px'}}width="142" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"></img>
                </Grid>
                <Grid item xs={4}>
                    <Typography sx={{ color: 'white', marginTop: '10px'}}>@ 2023 By Bhagyashri</Typography>
                </Grid>
                <Grid item xs={4}>
                    <img style={{margin: '10px'}}width="24" height="24" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"></img>
                    <img style={{margin: '10px'}}width="24" height="24" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd"></img>
                    <img style={{margin: '10px'}}width="24" height="24" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"></img>
                    <img style={{margin: '10px'}}width="24" height="24" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"></img>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default Footer