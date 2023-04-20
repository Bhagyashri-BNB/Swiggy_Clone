import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import Grid from '@mui/material/Grid'
import Typography from "@mui/material/Typography"
const Messages = () => {
  return (
    <div>
        <Box
            height="300px"
            width="fullwidth"
            sx={{backgroundColor: '#2B1E16'}}
        >
            <Grid container>
                <Grid item xs={4}>
                <img width="105" height="199" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"></img>
                <Typography sx={{color:'white', fontWeight: 'bold'}}>No Minimum Order</Typography>
                <Typography sx={{color:'white', textAlign: 'center', fontSize: '10px'}}>Order in for yourself or for the group, <br />with no restrictions on order value</Typography>
                </Grid>
                <Grid item xs={4}>
                <img width="112" height="206" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"></img>
                <Typography sx={{color:'white', fontWeight: 'bold'}}>Live Order Tracking</Typography>
                <Typography sx={{color:'white', textAlign: 'center', fontSize: '10px'}}>Know where your order is at all times, from the restaurant to your doorstep</Typography>
                </Grid>
                <Grid item xs={4}>
                <img width="124" height="188" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"></img>
                <Typography sx={{mt: 2,color:'white', fontWeight: 'bold'}}>Lightning-Fast Delivery</Typography>
                <Typography sx={{color:'white', textAlign: 'center', fontSize: '10px'}}>Experience Swiggy's superfast delivery for food delivered fresh & on time</Typography>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default Messages