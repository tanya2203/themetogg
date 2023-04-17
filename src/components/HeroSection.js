import { useContext } from "react"
import React from 'react'
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../colors.js";

const HeroSection = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
  return (
    <div style={{
   padding:"10 px",
   backgroundColor:`${currentTheme.backgroundColor}`,
   color:`${currentTheme.textColor}`,
   textAlign:"center"




    }} > 
        <button
        style={{
 backgroundColor:"pink",
 padding: "30px",
 margin: "30px",
 color:`${currentTheme.border}`
 





        }}
        
        
        
        
        
        
        > click me</button>
    </div>
  )
}

export default HeroSection