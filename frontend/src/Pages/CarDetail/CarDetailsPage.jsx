import React, { useEffect, useState } from 'react'
import "./CarDetailsPage.css";
import axios from "axios";
import {useParams } from "react-router-dom";
const CarDetailsPage = () => {
  const [car, setCar] = useState([]);
  const params = useParams();
  const { id } = params;

 useEffect(()=>{
    axios.get(`http://localhost:8080/inventory/${id}`)
    .then((res)=>{
      setCar(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
 },[id]);



  return (
    <div className='car-details'>
      {car && (
        <div>
          <div>
            <img src={car.image} alt={car.model} />
          </div>
          <div className='car-statss'>
          <h2>{car.model}</h2>
          <p>Price: {car.price}</p>
          <p>Color: {car.originalPaint}</p>
          <p>Mileage: {car.mileage}</p>
          <p>Scratches: {car.scratches> 0 ? car.scratches : 'No'}</p>
          <p>Registration Place: {car.registrationPlace}</p>
          <p>Odometer Reading: {car.km_odeometer}</p>
          <p>Previous Buyer: {car.previousBuyer > 0 ? car.previousBuyer : "NO"}</p>
             <p>Description: {car.description}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default CarDetailsPage;
