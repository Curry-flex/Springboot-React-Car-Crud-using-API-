

import React, { Component ,useState,useEffect} from 'react';

import CarService from '../service/CarService';
import{useNavigate,Link,useParams} from 'react-router-dom';


const ViewRecord=()=>{
    let {id} =useParams()
    const[car,setCar] =useState([]);

    useEffect(()=>{
     CarService.getCarByID(id).then(res=>{
         setCar(res.data)
     })
    },[])
    return(
    <>
    <div className="card col-md-6 offset-md-3 m-t-10" >
        <h3 className="text-center pt-10">Car details</h3>
        <div className="card-body">

        <div className="row">
          <h6>Car name</h6>
          <div>{car.car_name}</div>
        </div>
        <hr/>

        <div className="row">
          <h6>Car model</h6>
          <div>{car.car_model}</div>
        </div>
        <hr/>

        <div className="row">
          <h6>Car Price</h6>
          <div>{car.car_price}</div>
        </div>
         <hr/>

        <div className="row">
          <h6>Car number</h6>
          <div>{car.car_number}</div>
        </div>

        </div>

    </div>
    </>
        
     )
}


export default ViewRecord;