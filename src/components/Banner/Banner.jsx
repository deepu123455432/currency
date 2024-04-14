import React from 'react'
import { Container, Typography} from '@mui/material';
import './Banner.css'
import Carousel from './Carousel';

  
const Banner = () => {
  
  return (
    <div className='banner'>
      
      
        <Container className='conatiner'>
        <div className='tagline'>
         <Typography 
         variant='h2'
         style={{
          fontWeight:"bold",
          marginBottom:15,
          fontFamily:"monospace",
          alignItems:"center",
          justifyContent:"center",
         }}
         
         >
        crypto Hunter
         </Typography>
         <Typography
         variant='subtitle2'
         style={{
          color:"darkgray",
          textTransform:"capitalize",
          fontFamily:"-moz-initial"
         }}
         
         
         >
          Get all the info regarding your favourite crypto currency
         </Typography>
        </div>
        <Carousel/>
        </Container>
      
    </div>
  )
}

export default Banner
