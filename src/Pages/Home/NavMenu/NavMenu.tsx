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
        height='360px'
        width='fullwidth'
        // sx={{backgroundColor: 'black'}}
        sx={{backgroundColor: 'black',  borderTop: '1px solid gray', mt: 5,  }}
        >
            <Grid container>
                <Grid item xs={3}>
                    <Typography sx={{mt: 7, color:'white', fontWeight:'bold'}}>COMPANY</Typography>
                        {company.map((com,index)=>{
                                return(
                                <Typography sx={{mt:1, color:'white', fontSize:'13px', fontFamily:'ProximaNova,arial,Helvetica Neue,sans-serif', textAlign: 'left', marginLeft: '130px'}} key={index}>{com}</Typography>
                            )
                        })}
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={{mt: 7, color:'white', fontWeight:'bold'}}>CONTACT</Typography>
                    {contact.map((cont,index)=>{
                                return(
                                <Typography sx={{mt:1, color:'white', fontSize:'13px', fontFamily:'ProximaNova,arial,Helvetica Neue,sans-serif', textAlign: 'left', marginLeft: '130px'}} key={index}>{cont}</Typography>
                            )
                        })}
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={{mt :7 ,color:'white', fontWeight:'bold'}}>LEGAL</Typography>
                    {legal.map((leg,index)=>{
                                return(
                                <Typography sx={{mt:1,color:'white', fontSize:'13px', fontFamily:'ProximaNova,arial,Helvetica Neue,sans-serif', textAlign: 'left', marginLeft: '130px'}} key={index}>{leg}</Typography>
                            )
                        })}   
                </Grid>
                <Grid item xs={3}>
                <img style={{marginTop: '60px', width:'170px'}} alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"></img>
                <img style={{marginTop: '15px', width:'170px'}} alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"></img>
                </Grid>
            </Grid>
            <hr  style={{width: '1200px', alignItems: 'center'}}/>
        </Box>
    </div>
  )
}

export default NavMenu