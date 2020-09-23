import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import React from 'react';
import Signin from './components/form/SignIn';
import Signup from './components/form/SignUp';

function App() {
  return (
    <div >
      <Home></Home>
      {/* <Header></Header>
     <Signin></Signin> 
     <Signup></Signup> */}
    </div>
  );
}

export default App;
