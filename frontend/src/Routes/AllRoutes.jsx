import React from 'react'
import {Routes,Route} from "react-router-dom";
import HomePage from '../Pages/HomePage/HomePage';
import Login from '../Pages/Authentication/Login';
import CarDetailsPage from '../Pages/CarDetail/CarDetailsPage';
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />}/>
      <Route path="/:id" element={<CarDetailsPage />} />
    </Routes>
  )
}

export default AllRoutes;
