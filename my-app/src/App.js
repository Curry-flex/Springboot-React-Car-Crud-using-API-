import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import CarList from './component/CarList';
import Header from './component/Header';
import Footer from './component/Footer'; 
import {BrowserRouter as Router,Route,Routes,withRouter,Switch} from 'react-router-dom';
import CreateCar from './component/CreateCar';
import UpdateCar from './component/UpdateCar';
import ViewRecord from './component/ViewRecord';





const App =()=>{
  return (
     <>
     <Router>
      
     
       <Header />
       <div className="container">
         <Routes>
           
          <Route path="/" exact element={<CarList/>}></Route>
          <Route path="/car" element={<CarList/>}></Route>
          <Route path="/add-car/:id" element={<CreateCar/>}></Route>
          <Route path="/view-car/:id" element={<ViewRecord/>}></Route>

          
          </Routes>
         </div>
       <Footer />
       
    
    </Router>
    </>
   
  )
}














export default App;


