import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getInventory } from "../../Redux/action";
import CarCard from "./CarCard";
import "./Dealer.css";
const Dealer = () => {
    const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const inventoryData = useSelector((store)=>{
    return store.inventoryReducer.inventory
  });

  useEffect(()=>{
    dispatch(getInventory())
   },[location.search])

  return (
    <div className="dealer-den">
      {inventoryData && inventoryData.map((el)=>(

<CarCard key={el._id} cars={el} />
))}
    </div>
  )
}

export default Dealer;
