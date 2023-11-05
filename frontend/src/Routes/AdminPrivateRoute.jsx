import React from 'react';
import { useToast } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";

const AdminPrivateRoute = ({ children }) => {
    const toast = useToast();
    const token = localStorage.getItem("token");
    const dealerID = localStorage.getItem("dealerID")

if(!token && !dealerID){
    toast({
        title: "Login First",
        position:"top",
        description: "only dealers can access this page",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return <Navigate to="/dealer" />;
}


  return children;
}

export default AdminPrivateRoute;
