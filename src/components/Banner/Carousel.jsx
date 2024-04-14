import React, { useEffect, useState } from 'react'
import './Carousel.css'
import axios from 'axios'
import { TrendingCoins } from '../../config/api'
import { CryptoState } from '../../CryptoContex'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'
const Carousel = () => {
    const [trending,setTrending]= useState([])
    const {currency}=CryptoState();
    const fetchTrendingcoin = async () => {
        try {
            const data  = await axios.get(TrendingCoins(currency));
            setTrending(data);
        } catch (error) {
            console.error('Error fetching trending coins:', error);
            // Handle error (e.g., display an error message to the user)
        }
    };
    
    //console.log(trending);
    useEffect(()=>{
        fetchTrendingcoin();
    },[currency]);
    let items;
    if (!Array.isArray(trending)){
       
    }
    else{
    const items= trending.map((coin)=>{
        
        return(
            <Link
            className="carouselitems"
            to={`/coins/${coin.id}`}
            
            >
                <img
                src={coin?.image}
                alt={coin.name}
                height="80"
                style={{marginBottom:10}}
                />
               
            </Link>
        );
    });
}
    const responsive={
        0:{
            items:2,
        },
        512:{
            items:4,
        },
    };
    
  return (
    
    <div className='carousel'>
      <AliceCarousel
      mouseTracking
      infinite
      autoPlayInterval={1000}
      animationDuration={1500}
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      autoPlay
      items={items}
      
      
      />
    </div>
  )
}

export default Carousel
