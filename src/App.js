import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppHome from "./AppHome";
import Appstake from "./Appstake";
function App() {
  return (
    // <div className="App">
    //   <div className="content">
    //     <Home />
    //   </div>
    // </div>
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          {/* <Route exact path="/" element={<AppHome />} />
           */}
          <Route exact path="/" element={<AppHome />} />
          {/* <Route exact path="/Presale" element={<AppPresale />} /> */}
          <Route exact path="/Stake" element={<Appstake />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
