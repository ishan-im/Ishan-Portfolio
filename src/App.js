import  {React} from 'react'
import './App.css';

import useLocalStorage from 'use-local-storage'


import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import Service from './Components/Services/Service';
import Portfolio from './Components/Portfolio/Portfolio';



function App() { 

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')

  
 
  const changeTheme =  () =>{
      
    const newTheme = (theme === 'dark' ? 'light' : 'dark')

    console.log(`${newTheme} theme enabled!`);
    setTheme(newTheme)
  }


  
  


  return (

    <div className='app' data-theme={theme} >
      
      <Header theme = {theme} changeTheme = {changeTheme}/>
      <Nav/>
      <About/>
      <Experience/>
      <Service/>
      <Portfolio/>
      <Contacts/>
      <Footer/>

    </div>
    
  );
}

export default App;
