import  { createContext, useContext, useEffect, useState } from 'react'
import React from 'react';
const Crypto= createContext();
const CryptoContex = ({children}) => {

const [symbol,setSymbol]= useState("₹");

    const [currency,setCurrency]=useState("INR");

    useEffect(()=>{
        if(currency==="INR") setSymbol("₹");
        else if(currency==="USD") setSymbol("$");

    },[currency]);
  return (
    <Crypto.Provider value={{currency,symbol,setCurrency}}>
        {children}
    </Crypto.Provider>
  )
};

export default CryptoContex;
export const CryptoState =()=>{
   return  useContext(Crypto);
}
