import React from 'react'
import "./InventoryCard.css";
import { useNavigate } from 'react-router-dom';

const InventoryCard = ({car}) => {

  const navigate = useNavigate();

  const onClick = ()=>{
    navigate(`/${car._id}`)
  }


  return (
    <div className='inventory-card' onClick={onClick}>
        <div className='inventory-image'>
        <img src={car.image} alt={car.model} />
        </div>
        <div className='inventory-details'>
          <p>{car.model}</p>
          <div>
            <p>Color:{car.originalPaint}</p>
            <p>Price:₹{car.price}</p>
            <p>Location:{car.registrationPlace}</p>
          </div>
        </div>
    </div>
  )
}

export default InventoryCard;
