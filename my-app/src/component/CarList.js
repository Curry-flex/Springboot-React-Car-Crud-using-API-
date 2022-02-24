import React, { Component ,useState,useEffect} from 'react';

import CarService from '../service/CarService';
import updateCar from './UpdateCar';
import{useNavigate,Link, useParams} from 'react-router-dom';
import { withRouter } from './withRouter';

const CarList=()=>{

    const [car,setCar] =useState([]);
    const[carName,setCarName]=useState('')
    const[carModel,setCarModel]=useState('')
    const[carPrice,setCarPrice]=useState('')
    const[carNumber,setCarNumber]=useState('')
    
    let navigate = useNavigate()
    let {id} =useParams()

    //update method
    const updateCar=(id)=>{
        
       navigate(`/add-car/${id}`)
    }

    useEffect(()=>{
        CarService.getCar().then(res=>{
            setCar(res.data)
        })
    },[])

  //delete method
    const deleteCar=(id)=>{
        CarService.deleteCar(id).then(res=>{
          setCar(car.filter(car =>car.id !==id))
        })
    }

   //view record
   const viewCar=(id)=>
   {
       navigate(`/view-car/${id}`)
   } 

    return(
        <>
           <h1 className="text-center">Car List</h1>
     
        <div style={{marginBottom:"10px"}}>
        <Link to="/add-car/-1" className="btn btn-primary" >Add</Link>
        </div>
 
    
     
             <div className="row">

              
                 <table className="table table-striped table-bordered">
                   <thead>
                       <tr>
                           <th>ID</th>
                           <th>Car Name</th>
                           <th>Car model</th>
                           <th>Car price</th>
                           <th>Car number</th>
                           <th>Action</th>
                       </tr>
                   </thead>

                   <tbody>
                       {
                           car.map(cars=>
                               
                               <tr key={cars.id}>
                                    <td>{cars.id}</td>
                                   <td>{cars.car_name}</td>
                                   <td>{cars.car_model}</td>
                                   <td>{cars.car_price}</td>
                                   <td>{cars.car_number}</td>
                                   <td>
                                       <button onClick={()=>updateCar(cars.id)} className="btn btn-info">Update</button>
                                   </td>

                                   <td>
                                       <button onClick={()=>deleteCar(cars.id)} className="btn btn-danger">Delete</button>
                                   </td>

                                   
                                   <td>
                                       <button onClick={()=>viewCar(cars.id)} className="btn btn-success">View</button>
                                   </td>


                               </tr>
                           )
                       }
                   </tbody>
                 </table>

                 </div>
                
    
        </>
    )
}




//  class CarList extends Component {
//     constructor(props)
//     {
//         super(props)
//         this.state={
//             car:[],
//             redirection:true
//         }

//         this.addCar = this.addCar.bind(this);
//         this.updateCar= this.updateCar.bind(this);
//     }

//      updateCar=(id)=>{
     
//        // this.props.history.push(`update-car/${id}`)
//       // this.props.navigate(`update-car/${id}`)
      
//        this.state.redirection && <Navigate to='/add-car'/>

//     }

//     addCar()
//     {
//         //this.props.history.push("/add-car")
//     }
//     componentDidMount(){
//         CarService.getCar().then((res)=>{
            
        
//             this.setState({car:res.data})
            
            
//         });
//     }
//   render() {
//     return <div>

//     <h1 className="text-center">Car List</h1>
//      <div className="container">
//      <Link to="/add-car" className="btn btn-primary">Add</Link>
//      </div>
     
//              <div className="container">
//                  <table className="table table-striped table-bordered">
//                    <thead>
//                        <tr>
//                            <th>ID</th>
//                            <th>Car Name</th>
//                            <th>Car model</th>
//                            <th>Car price</th>
//                        </tr>
//                    </thead>

//                    <tbody>
//                        {
//                            this.state.car.map(cars=>
                               
//                                <tr key={cars.id}>
//                                     <td>{cars.id}</td>
//                                    <td>{cars.car_name}</td>
//                                    <td>{cars.car_model}</td>
//                                    <td>{cars.car_price}</td>
//                                    <td>
//                                        <button onClick={()=>this.updateCar(cars.id)} className="btn btn-info">Update</button>
//                                    </td>
//                                </tr>
//                            )
//                        }
//                    </tbody>
//                  </table>
                
//              </div>
         
//     </div>
//   }
// }




export default CarList
