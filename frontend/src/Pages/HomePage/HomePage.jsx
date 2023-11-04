import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getInventory } from "../../Redux/action";
import InventoryCard from "./InventoryCard";
const HomePage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const inventoryData = useSelector((store)=>{
    return store.inventoryReducer.inventory
  });

   let obj = {
    params:{
      category: searchParams.getAll("category"),
    }
   }

   useEffect(()=>{
    dispatch(getInventory(obj))
   },[location.search])

  console.log(inventoryData);


  return (
    <div>
      {inventoryData && inventoryData?.map((el)=>(

      <InventoryCard key={el._id} car={el} />
      ))}
    </div>
  )
}

export default HomePage;
