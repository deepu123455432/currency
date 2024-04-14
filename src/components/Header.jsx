import { AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material'
import React from 'react'
import './Header.css'
import { useNavigate} from 'react-router-dom';
import { CryptoState } from '../CryptoContex';

const darkTheme= createTheme({
  palette:{
    primary:{
      main:"#fff",
    },
    type:"dark",
  },
});
const Header = () => {
  
  const Navigate=useNavigate();
  const {currency,setCurrency}=CryptoState();
  console.log(currency);
  
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <Typography  onClick={()=> Navigate("/")} className='text' variant='h6'>Crypto Hunter</Typography>
          <Select variant="outlined"
          style={{
            width:100,
            height:40,
            marginRight:15,
            
          }}
          value={currency}
          onChange={(e)=> setCurrency(e.target.value)}
          
          
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>

    </AppBar>
    </ThemeProvider>
  )
}

export default Header