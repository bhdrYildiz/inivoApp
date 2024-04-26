import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";
import ProductAnalyze from "./pages/ProductAnalyze";
import Profile from "./pages/Profile";

//cmBD207Kg4Bku3wu (supabase password)

const App = () => {
  return (
   
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/product-analyze" element={<ProductAnalyze/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
    </Routes>

  );
};

export default App;