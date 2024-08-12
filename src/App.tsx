import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Popular from './Components/popular/Popular';
import Featured from './Components/featured/Featured';
import DontMiss from './Dontmiss/DontMiss';
import Member from './Components/Member/Member';
import Footer from './Components/Footer/Footer';
import Footer2 from './Components/Footer2/Footer2';


function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Popular/>
      <Featured/>
      <DontMiss/>
      <Member/>
      <Footer/>
      <Footer2/>
    </div>
  );
}

export default App;
