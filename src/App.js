import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import AppTheme from './colors.js';
import ThemeContext from "./context/ThemeContext"
import HeroSection from './components/HeroSection';
import ThemeToggler from './components/ThemeToggler';
import Header from './components/Header';
function App() {
  const themehook= useState("light");
  return (


<ThemeContext.Provider value ={themehook}>
<div>
<Header/>
<ThemeToggler/>
 
<HeroSection/>


</div>

</ThemeContext.Provider>

  );
}

export default App;
