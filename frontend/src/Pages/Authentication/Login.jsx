import React, { useState } from "react";
import CarLogo from "../../assets/CarLogo.png";
import "./Login.css";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const handleSignup = () => {
    const payload = {
      name: name,
      email: email,
      password: password,
    };
    fetch("http://localhost:8080/users/register", {
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
        setName("");
        setEmail("");
        setPassword("");
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

  const handleLogin = () => {
    const payload = {
      email: loginEmail,
      password: loginPassword,
    };
    fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.token);
          toast({
            title: "Login Successfull",
            status: "success",
            duration: 10000,
            isClosable: true,
          });
          setLoginEmail("");
          setLoginPassword("");
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
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    return navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <img src={CarLogo} alt="CarBuy logo" />
      </div>
      <div className="login-right">
        <div className="login-heading">
          {state ? <h2>Login</h2> : <h2>Signup</h2>}
        </div>
        {state ? (
          <div className="login-form">
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <div>
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        ) : (
          <div className="signup-form">
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
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button onClick={handleSignup}>Signup</button>
            </div>
          </div>
        )}
        <div className="signup">
          <p>
            Didn't have account{" "}
            <span onClick={() => setState(!state)}>SignUP</span> ?
          </p>
          <p>
            Register Yourself as <span>Dealer</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
