import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Auth/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import PetFood from "./pages/Services/PetFood/PetFood";
import About from "./pages/About/About";
import PetAccessories from "./pages/Services/PetAccessories/PetAccessories";
import Register from "./pages/Auth/Register/Register";
// import AuthProvider from "./Contexts/AuthProvider/AuthProvider";

function App() {
  return (
    <div className="App">
      {/* <AuthProvider> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/pet-food" element={<PetFood />} />
            <Route
              path="/services/pet-toy-accessories"
              element={<PetAccessories />}
            />
            <Route path="/services/pet-care" element={<PetAccessories />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
