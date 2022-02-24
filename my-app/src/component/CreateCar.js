import axios from 'axios';
import React, { Component ,useState,useEffect} from 'react';

import{useNavigate,Link,useParams} from 'react-router-dom';


import CarService from '../service/CarService';




const CreateCar=()=>{
    let {id} =useParams()
    let navigate =useNavigate()
    const[carName,setCarName]=useState('')
    const[carModel,setCarModel]=useState('')
    const[carPrice,setCarPrice]=useState('')
    const[carNumber,setCarNumber]=useState('')


   
    
     useEffect(()=>{
         if(id == -1)
         {
             return
         }
         else{
            CarService.getCarByID(id).then(res=>{
                let carData =res.data;
                setCarName(carData.car_name)
                setCarModel(carData.car_model)
                setCarPrice(carData.car_price)
                setCarNumber(carData.car_number)
              })

         }
            
      },[])

    
 

    const saveOrUpdateCar=(event)=>{

        event.preventDefault();
        
        let car={
            car_name:carName,
            car_model:carModel,
            car_price:carPrice,
            car_number:carNumber
        }

        if(id == -1)
        {
        CarService.createCar(car).then((res)=>{
           // this.props.history.push('/')
            navigate("/")
        });
        }

        else{
  
      CarService.updateCar(car,id).then(res=>{
               navigate("/")
      })
        }
        
    }

    return(
        <>
         <div className="container">
         <div className="row">

             <div className="card col-md-6 offset-md-3 0ffset-md-3">
             <h3 className="text-center">{id == -1? "Add Car" : "Update Car"}</h3>
             <div className="card-body">
               <form>
                   <div className="form-group">
                 
                       <input  placeholder="Car name" className="form-control" name="carName"
                        value={carName} onChange={(e)=>setCarName(e.target.value)}
                        
                       />

                   </div>

                   <div className="form-group">
             
                       <input type="text" placeholder="Car model"
                        value={carModel} onChange={(e)=>setCarModel(e.target.value)}
                        className="form-control"
                        
                       />

                   </div>

                   <div className="form-group">
                   
                       <input type="text" placeholder="Car price"
                        value={carPrice} onChange={(e)=>setCarPrice(e.target.value)}
                        className="form-control"
                       />

                   </div>

                   <div className="form-group">
                   
                       <input type="text" placeholder="Car number"
                        value={carNumber} onChange={(e)=>setCarNumber(e.target.value)}
                        className="form-control"
                       />

                   </div>
                       <div style={{marginTop:"10px"}} >
                       <button className="btn btn-success " onClick={saveOrUpdateCar}>Add</button>
                       </div>
                

               </form>
             </div>
             </div>

         </div>
          </div>
        </>
    )
}


export default CreateCar;







