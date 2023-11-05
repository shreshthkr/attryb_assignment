import React from 'react'
import {Routes,Route} from "react-router-dom";
import HomePage from '../Pages/HomePage/HomePage';
import Login from '../Pages/Authentication/Login';
import CarDetailsPage from '../Pages/CarDetail/CarDetailsPage';
import InventoryPage from '../Pages/Inventory/InventoryPage';
import DealerSignup from '../Pages/Authentication/DealerAuthentication/DealerSignup';
import PrivateRoute from './PrivateRoute';
import AdminPrivateRoute from './AdminPrivateRoute';
import OemSpecs from '../Pages/OemSpec/OemSpecs';
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />}/>
      <Route path="/:id" element={
      <PrivateRoute>
          <CarDetailsPage />
      </PrivateRoute>
     } />
      <Route path="/inventory" element={
      <AdminPrivateRoute>
 <InventoryPage />
      </AdminPrivateRoute>
     } />
      <Route path="/dealer" element={<DealerSignup />}/>
      <Route path='/oem' element={<AdminPrivateRoute>
        <OemSpecs />
      </AdminPrivateRoute>} />
    </Routes>
  )
}

export default AllRoutes;
