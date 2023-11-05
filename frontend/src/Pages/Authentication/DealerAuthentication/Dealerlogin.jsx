import React, { useState } from 'react'
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./Dealerlogin.css";
const Dealerlogin = () => {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();
    const navigate = useNavigate();
const handleLogin = () => {
    const payload = {
        email: email,
        password: password,
      };
      fetch("https://alert-rose-lovebird.cyclic.app/dealers/login", {
          method: "POST",
          headers: {
            "Content-type": "Application/json",
          },
          body: JSON.stringify(payload),
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            localStorage.setItem("token", res.token,);
            localStorage.setItem("dealerID",res.dealerID);
            toast({
              title: "Login Successfull",
              status: "success",
              duration: 10000,
              isClosable: true,
            });
            setEmail("");
            setPassword("");
            return navigate("/inventory")
          })
          .catch((err) => {
            console.log(err);
            toast({
              title: "Invalid Credentials",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          });
}


  return (
    <div className='Dealer-login'>
      <div className='dealer-login-header'>
      <h2>Dealer Login</h2>
      </div>
      <div className='DealerLogin-form'>
          <div>
            <label>Email</label>
            <input type="email" 
            placeholder='Enter registered email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input type="password" 
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='dealerlogin-button'>
            <button onClick={handleLogin}>Login</button>
          </div>
      </div>
    </div>
  )
}

export default Dealerlogin;
