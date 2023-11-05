import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getInventory } from "../../Redux/action";
import InventoryCard from "./InventoryCard";
import SideBar from "./SideBar";
import "./HomePage.css";
const HomePage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const inventoryData = useSelector((store)=>{
    return store.inventoryReducer.inventory
  });

   let obj = {
    params:{
      mileage: searchParams.getAll("mileage"),
      color: searchParams.getAll("color"),
      _sort:searchParams.get("order") && "price",
      _order: searchParams.get("order")
    }
   }

   useEffect(()=>{
    dispatch(getInventory(obj.params))
   },[location.search])

  console.log(inventoryData);


  return (
    <div className="homepage">
      <div>
        <SideBar />
      </div>
      <div>
      {inventoryData && inventoryData.map((el)=>(

      <InventoryCard key={el._id} car={el} />
      ))}
      </div>
    </div>
  )
}

export default HomePage;
