import React from "react";
import { Browser as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog"
import NotFound from "./pages/NotFound";
import Onas from "./pages/Onas";
import Login from "./pages/Login";
// import { Home } from "./pages";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/onas" element={<Onas/>} />
            
        </Routes>
      </Router>
    </div>
  );
};

export default App;
