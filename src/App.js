import React from 'react';
//import logo from './logo.svg';
import Navbar from './Parts/Navbar';
import Header from './Parts/Header/Header';
import Body from './Parts/Body/Body';
import Footer from './Parts/Footer/Footer';
import Dummy from './Parts/Body/Dummy';
import './App.css';
import {
  BrowserRouter as Router,
  Route} from 'react-router-dom';

function Homepage(){
  return(
    <>
      <Navbar/>
      <Header/>
      <Body/>
      <Footer/>
    </>
  )
}


function AppRouter(){
  return(
    <Router>
      <Route path="/" exact component={Homepage} />
      <Route path="/more" component={Dummy} />
    </Router>
  )
}
  

export default AppRouter;