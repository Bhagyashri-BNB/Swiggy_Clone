import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import Grid from '@mui/material/Grid'
import { images } from '../../../utils/constants/images'
import Typography from "@mui/material/Typography"
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { orange } from '@mui/material/colors'
import Divider from '@mui/material/Divider/Divider'
import { useState, useEffect, useCallback } from 'react'

const Login = () => {
    const customStyles = {
        border: '1px solid black',
        borderRadius: '5px',
        padding: '5px',
        color: 'orange',
        backgroundColor: 'blue'
    };
    const [location, setLocation] = useState('');
    const [newName, setnewName] = useState("");
    const names = [
        'Hungry?', 'Unexpected Guest?', 'Cooking Gone Wrong?', 'Movie Maratgthon?', 'Late Night at Office?'
    ]

    const handleLocation = (event: any) => {
        setLocation(event.target.value);
    }
    const handleClearLocation = () => {
        setLocation('');
    }
    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 2000);
        return () => clearInterval(intervalID);
    }, [shuffle])

    const cities = [
        'Ahmedabad', 'Bangalore', 'Chennai', 'Delhi', 'Gurgaon', 'Hyderabad', 'Kolkata', 'Mumbai', 'Pune', '& more.'
    ]
    return (
        <div>
            <Box
                height='400px'
                width='100%'
               sx={{display:"flex", flexWrap:"wrap"}}
            >
                <Grid container>
                    <Grid item xs={6}>
                        <img src={images.logo} alt="logo" height='40px' width='140px' style={{ float: 'left', marginTop: '60px', marginLeft: '100px' }} ></img>
                        <Button style={{ marginTop: '60px', marginLeft: '80px', color: 'black', fontWeight: 'bold' }}>Login</Button>
                        <Button style={{ marginTop: '60px', marginLeft: '80px', color: 'white', backgroundColor: 'black', fontWeight: 'bold' }}>Sign Up</Button>
                        <Box >
                            <Typography sx={{ mt: 3, fontWeight: 'bold', float: 'left', marginLeft: '100px', height: '125px', width: '300px', position: 'absolute', textAlign: 'left', fontFamily: 'ProximaNova,arial,Helvetica Neue,sans-serif', fontSize: '20px' }}>{newName} </Typography>
                            <Typography sx={{ mt: 7, float: 'left', marginLeft: '100px' }}>Order food from favourite restaurants near you.</Typography>
                        </Box>
                        <Box sx={{ marginLeft: '-70px' }}>
                            <TextField variant="outlined" value={location} onChange={handleLocation} style={{ border: '1px solid oranage' }} placeholder='Enter your delivery location'
                                InputProps={{
                                    sx: {
                                        borderRadius: 0,

                                        borderColor: 'orange'
                                    },
                                    endAdornment: (
                                        <>
                                            <MyLocationIcon sx={{ color: 'grey' }} />
                                            <>
                                                {
                                                    location.length > 0 ? (
                                                        <Button onClick={handleClearLocation} size="small" sx={{ mt: 1, fontSize: "10px", borderRadius: '0px' }}>Clear</Button>
                                                    ) : (
                                                        <Button size="small" sx={{ mt: 1, fontSize: "10px", borderRadius: '0px' }}>Locate Me</Button>
                                                    )
                                                }
                                            </>
                                        </>
                                    )
                                }}
                            />
                            <Button size="small" sx={{ color: 'white', fontWeight: 'bold', backgroundColor: '#FC8019', height: "56px", borderRadius: '0px' }}>Find Food</Button>
                        </Box>
                        <Box sx={{ marginLeft: '-0.1px', marginTop: '-90px' }}>
                            <Typography sx={{ mt: 8, fontSize: '11px', float: 'left', marginLeft: '100px', color: 'grey', fontFamily: 'ProximaNova,arial,Helvetica Neue,sans-serif' }}>POPULAR CITIES IN INDIA</Typography>

                        </Box>
                        <Box sx={{ mt: 4, width: '590px', marginLeft: '90px', marginTop: '120px' }}>
                            {cities.map((city, index) => {
                                const color = index % 2 === 0 ? 'black' : 'grey';
                                return <span style={{ color: color, fontFamily: 'ProximaNova,arial,Helvetica Neue,sans-serif', textAlign: 'left', float: 'left', marginLeft: '10px', fontSize: '15px' }} key={index} ><span>{city + " "}</span></span>;

                            })}
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <img src="	https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq" alt="logo" height='400px' width='100%'></img>

                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Login