import React from 'react'
import {Routes,Route} from "react-router-dom";
import HomePage from '../Pages/HomePage/HomePage';
import Login from '../Pages/Authentication/Login';
import CarDetailsPage from '../Pages/CarDetail/CarDetailsPage';
import InventoryPage from '../Pages/Inventory/InventoryPage';
import DealerSignup from '../Pages/Authentication/DealerAuthentication/DealerSignup';
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />}/>
      <Route path="/:id" element={<CarDetailsPage />} />
      <Route path="/inventory" element={<InventoryPage />} />
      <Route path="/dealer" element={<DealerSignup />}/>
    </Routes>
  )
}

export default AllRoutes;
