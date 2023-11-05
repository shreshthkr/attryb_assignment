import React, { useState } from "react";
import Dealerlogin from "./Dealerlogin";
import "./DealerSignup.css";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const DealerSignup = () => {
  const [state, setState] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(null);
  const [city, setCity] = useState("");
  const [stateloc, setStateloc] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSignup = () => {
    const payload = {
      name: name,
      email: email,
      age: age,
      city: city,
      state: stateloc,
      password: password,
    };
    fetch("http://localhost:8080/dealers/register", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        toast({
          title: "Successfull",
          description: "Signup Successful",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setState(true);
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Error",
          description: "Couldn't signup, Something Wrong",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <div className="dealer-sec">
      {state ? (
        <div className="dealer-loginbox">
          <Dealerlogin />{" "}
        </div>
      ) : (
        <div className="dealer-signup">
          <h2>Register yourself as Dealer</h2>
          <div className="dealersignup-form">
            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Age</label>
              <input
                type="number"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div>
              <label>City</label>
              <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <label>State</label>
              <input
                type="text"
                placeholder="Enter state name"
                value={stateloc}
                onChange={(e) => setStateloc(e.target.value)}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Create your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="submit-button">
              <button onClick={handleSignup}>Signup</button>
            </div>
          </div>
        </div>
      )}
      <div className="state-define">
        {state ? (
          <p>
            Register yourself as a <span onClick={() => setState(false)}>Dealer</span>
          </p>
        ) : (
          <p>
            Already Registered <span onClick={() => setState(true)}>Login</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default DealerSignup;
