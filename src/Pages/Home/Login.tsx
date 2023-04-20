import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import Grid from '@mui/material/Grid'
import { images } from '../../utils/constants/images'
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
      const [location, setLocation]=useState('');
      const [newName, setnewName] = useState("");
      const names = [
        'Hungry?', 'Unexpected Guest?', 'Cooking Gone Wrong?', 'Movie Maratgthon?', 'Late Night at Office?'
      ]
    
      const handleLocation=(event: any)=>{
        setLocation(event.target.value);
      }
      const handleClearLocation=()=>{
        setLocation('');
      }
      const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 1000);
        return () => clearInterval(intervalID);
    }, [shuffle])

    const cities=[
        'Ahmedabad', 'Bangalore', 'Chennai', 'Delhi', 'Gurgaon', 'Hyderabad', 'Kolkata', 'Mumbai', 'Pune', '& more.'
    ]
    return (
        <div>
            <Box
                height='400px'
                width='100%'
            >
                <Grid container>
                    <Grid item xs={6}>
                        <img src={images.logo} alt="logo" height='40px' width='140px' style={{ float: 'left', marginTop: '60px', marginLeft: '100px' }} ></img>
                        <Button style={{ marginTop: '60px', marginLeft: '80px', color: 'black', fontWeight: 'bold' }}>Login</Button>
                        <Button style={{ marginTop: '60px', marginLeft: '80px', color: 'white', backgroundColor: 'black', fontWeight: 'bold' }}>Sign Up</Button>
                        <Box >
                            <Typography sx={{mt: 3, fontWeight: 'bold',float: 'left', marginLeft:'0px'}}>{newName} </Typography>
                            <Typography sx={{mt: 1,float:'left', marginLeft:'100px' }}>Order food from favourite restaurants near you.</Typography>
                            <TextField variant="outlined"  value={location} onChange={handleLocation}  style={{ border: '1px solid oranage' }} placeholder='Enter your delivery location' 
                                InputProps={{
                                    sx:{
                                            borderRadius: 0,
                                            
                                            borderColor: 'orange'
                                    },
                                    endAdornment: (
                                        <>
                                            <MyLocationIcon sx={{ color: 'grey' }} />
                                            <>
                                            {
                                                location.length >0 ?(
                                                    <Button onClick={handleClearLocation} size="small" sx={{ mt: 1 , fontSize: "10px", borderRadius: '0px'}}>Clear</Button>  
                                                ): (
                                                    <Button size="small" sx={{ mt: 1 , fontSize: "10px", borderRadius: '0px'}}>Locate Me</Button>  
                                                )

                                            }
                                                
                                            </>
                                        </>
                                    )
                                }}
                            />
                             <Button size="small" sx={{color:'white',fontWeight:'bold', backgroundColor:'#FC8019',  height:"56px",borderRadius: '0px'  }}>Find Food</Button>
                        </Box>
                        <Typography sx={{mt: 2, fontSize: '11px',float: 'left', marginLeft: '100px',color:'grey', fontFamily:'ProximaNova,arial,Helvetica Neue,sans-serif'}}>POPULAR CITIES IN INDIA</Typography>
                        {cities.map((city,index)=>{
                              const color = index % 2 === 0 ? 'black' : 'grey';
                            return <Typography style={{marginTop:'30px' ,color: color, display: 'inline-block', float: 'left', marginLeft: '2px' , fontFamily:'ProximaNova,arial,Helvetica Neue,sans-serif' }} key={index} >{city}</Typography>;
                            
                        })}
                        {/* <Typography sx={{mt: 1, fontSize: '12px',float: 'left', marginLeft: '100px' , fontFamily:'ProximaNova,arial,Helvetica Neue,sans-serif'}}></Typography>
                        <Typography sx={{mt: 1, fontSize: '12px',float: 'left', marginLeft: '100px', fontFamily:'ProximaNova,arial,Helvetica Neue,sans-serif'}}>.</Typography> */}
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