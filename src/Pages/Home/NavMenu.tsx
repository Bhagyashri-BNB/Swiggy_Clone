import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import Grid from '@mui/material/Grid'
import Typography from "@mui/material/Typography"
import Divider from '@mui/material/Divider/Divider'
const NavMenu = () => {
    const company=[
        'About us',
        'Team',
        'Careers',
        'Swiggy Blog',
        'Bug Bounty',
        'Swiggy One',
        'Swiggy Corporate',
        'Swiggy Instamart',
        'Swiggy Genie'
    ]
    const contact=[
       ' Help & Support',
        'Partner with us',
        'Ride with us'
    ]
    const legal=[
        'Terms & Conditions',
       ' Refund & Cancellation',
        'Privacy Policy',
        'Cookie Policy',
        'Offer Terms',
       ' Phishing & Fraud',
        'Corporate – Swiggy Money Codes Terms and Conditions',
        'Corporate - Swiggy Discount Voucher Terms and Conditions'
    ]
  return (
    <div>
        <Box
        height='500px'
        width='fullwidth'
        // sx={{backgroundColor: 'black'}}
        sx={{backgroundColor: 'black',  borderTop: '1px solid gray', mt: 5}}
        >
            <Grid container>
                <Grid item xs={3}>
                    <Typography sx={{mt: 7, color:'white', fontWeight:'bold'}}>COMPANY</Typography>
                        {company.map((com,index)=>{
                                return(
                                <Typography sx={{mt:1, color:'white', fontSize:'13px', fontFamily:'ProximaNova,arial,Helvetica Neue,sans-serif'}} key={index}>{com}</Typography>
                            )
                        })}
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={{mt: 7, color:'white', fontWeight:'bold'}}>CONTACT</Typography>
                    {contact.map((cont,index)=>{
                                return(
                                <Typography sx={{mt:1, color:'white', fontSize:'13px', fontFamily:'ProximaNova,arial,Helvetica Neue,sans-serif'}} key={index}>{cont}</Typography>
                            )
                        })}
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={{mt :7 ,color:'white', fontWeight:'bold'}}>LEGAL</Typography>
                    {legal.map((leg,index)=>{
                                return(
                                <Typography sx={{mt:1,color:'white', fontSize:'13px', fontFamily:'ProximaNova,arial,Helvetica Neue,sans-serif'}} key={index}>{leg}</Typography>
                            )
                        })}
                        
                </Grid>
                <Grid item xs={3}>
                        <Divider sx={{ width: 'fullwidth',height: '100px', color:'white'}}/>
                </Grid>
               <Divider />
            </Grid>
        </Box>
    </div>
  )
}

export default NavMenu