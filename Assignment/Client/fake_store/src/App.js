import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cart from './Components/Cart';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
