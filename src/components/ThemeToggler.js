import React,{useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
import AppTheme from '../colors'
const ThemeToggler = () => {
    const [themeMode,setThemeMode]= useContext(ThemeContext)
  return (
    <div onClick={()=>{
        setThemeMode(themeMode==="light"?"dark" : "light")
        console.log("clicked");

    }}>
         <span>{themeMode === "light" ? "Turn Off" : "Lights On"}</span>





    </div>
    
   
  )
}

export default ThemeToggler
