import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";
import ProductAnalyze from "./pages/ProductAnalyze";
import Profile from "./pages/Profile";

const App = () => {

  const [token, setToken] = useState(false);

  if(token){
    sessionStorage.setItem("token",JSON.stringify(token))
  }

  useEffect(()=> {
    if(sessionStorage.getItem("token")){
      let data = JSON.parse(sessionStorage.getItem("token"))
      setToken(data)
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Login setToken={setToken}/>} />
      <Route path="/register" element={<Register />} />
      {token?<Route path="/dashboard" element={<Dashboard />} /> : ""}
      {token?<Route path="/product-analyze" element={<ProductAnalyze />} /> : ""}
      {token?<Route path="/profile" element={<Profile />} /> :""}
    </Routes>
  );
};

export default App;
