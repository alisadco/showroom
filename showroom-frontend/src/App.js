import React from 'react';
import Styles from './Styles.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Cars from './Components/Cars';
import SingleCar from './Components/SingleCar';
import ErrorPage from './Components/ErrorPage';

import { Route, Routes } from 'react-router-dom';



function App() {
  return (

    <>
      <Navbar />

      <Routes>

        <Route exact path='/' component={Home} />
        <Route exact path='/cars' component={Cars} />
        <Route exact path='/car/:slug' component={SingleCar} />
        <Route component={ErrorPage} />

      </Routes>
    </>


  );
}

export default App;
