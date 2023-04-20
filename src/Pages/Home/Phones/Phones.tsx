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
                        <Typography
                            sx={{ float: 'left', marginLeft: '130px', mt: 15, fontWeight: 600, fontSize: '40px', width: '300px', lineHeight: 1, letterSpacing: '-.45px', boxSizing: 'inherit', textAlign: 'left' }}>
                            Restaurants in your pocket</Typography>
                        <Typography
                            sx={{
                                mt: 1,
                                float: 'left',
                                marginLeft: '130px',
                                fontSize: '20px',
                                width: '400px',
                                fontWeight: 300,
                                paddingTop: '20px',
                                paddingBottom: '60px',
                                color: '#7e808c',
                                lineHeight: '1.2',
                                textAlign: 'left'
                            }}>
                            Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</Typography>
                        <img style={{ float: 'left', marginLeft: '130px', }} height="54" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"></img>
                        <img style={{ marginTop: '-54px', float: 'left', marginLeft: '350px', }} height="54" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"></img>
                    </Grid>
                    <Grid item xs={3}>
                        <img width="384" height="400" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"></img>
                    </Grid>
                    <Grid item xs={3}>
                        <img style={{ marginRight: '12px' }} width="384" height="440" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"></img>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Phones