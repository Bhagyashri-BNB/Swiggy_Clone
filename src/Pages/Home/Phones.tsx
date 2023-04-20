import React from 'react'
import Box from '@mui/material/Box/Box'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
const Phones = () => {
  return (
    <div>
        <Box
            height='400px'
            width='fullwidth'
        >
            <Grid container>
                <Grid item xs={5}>
                    <Typography sx={{mt: 15, fontWeight: 'bold',float: 'left', marginLeft:'130px', display:'flex'}}>Restaurants in<br/>your pocket</Typography>
                    <Typography sx={{mt: 1,float: 'left', marginLeft:'130px', color: 'grey'}}>Order from your favorite restaurants & track <br/>on the go, with the all-new Swiggy app.</Typography>
                </Grid>
                <Grid item xs={3}>
                <img width="384" height="400" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"></img>
                </Grid>
                <Grid item xs={3}>
                <img  style={{marginRight:'12px'}} width="384" height="440" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"></img>
                </Grid>

            </Grid>

        </Box>
    </div>
  )
}

export default Phones