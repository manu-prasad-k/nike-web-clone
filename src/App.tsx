import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Popular from './Components/popular/Popular';
import Featured from './Components/featured/Featured';
import DontMiss from './Dontmiss/DontMiss';
import Member from './Components/Member/Member';


function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Popular/>
      <Featured/>
      <DontMiss/>
      <Member/>
    </div>
  );
}

export default App;
