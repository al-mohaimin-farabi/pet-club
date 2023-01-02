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
import Blog from "./pages/Blog/Blogs";
import AccPurchase from "./pages/Services/PetAccessories/Purchase";
import FoodPurchase from "./pages/Services/PetFood/Purchase";
import FullBlog from "./pages/Blog/FullBlog";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./pages/Auth/PrivateRoute/PrivateRoute";
import PaymentGuide from "./pages/PaymentGuide/PaymentGuide";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";
import SecureOrderSuccessRoute from "./pages/Auth/SecureOrderSuccessRoute/SecureOrderSuccessRoute";
import SecureAuthRoute from "./pages/Auth/SecureAuthRoute/SecureAuthRoute";
import PetCare from "./pages/Services/Petcare/PetCare";
import Dashboard from "./pages/Dashboard/Dashboard";
import AdminRoute from "./pages/Auth/AdminRoute/AdminRoute";
import WelcomeMessage from "./pages/Dashboard/WelcomeMessage";
import Myorder from "./pages/Dashboard/Myorder";
import Allorder from "./pages/Dashboard/Allorder";
import Manageallproduct from "./pages/Dashboard/Manageallproduct";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import AddFoodProduct from "./pages/Dashboard/AddFoodProduct";
import AddToyAccProduct from "./pages/Dashboard/AddToyAccProduct";
import GoToTop from "./pages/Shared/GoToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <GoToTop></GoToTop>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/pet-food" element={<PetFood />} />
            <Route
              path="/services/pet-food/purchase/:foodID"
              element={
                <PrivateRoute>
                  <FoodPurchase></FoodPurchase>
                </PrivateRoute>
              }
            />
            <Route
              path="/services/pet-toy-accessories"
              element={<PetAccessories />}
            />
            <Route
              path="/services/pet-toy-accessories/purchase/:accessoriesID"
              element={
                <PrivateRoute>
                  <AccPurchase></AccPurchase>
                </PrivateRoute>
              }
            />

            <Route path="/services/pet-care" element={<PetCare />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:blogTitle" element={<FullBlog />} />
            <Route path="/payment-guide" element={<PaymentGuide />} />
            <Route
              path="/orderingSuccess"
              element={
                <SecureOrderSuccessRoute>
                  <OrderSuccess />
                </SecureOrderSuccessRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }>
              <Route
                exact
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <WelcomeMessage />
                  </PrivateRoute>
                }
              />
              <Route
                path="myorders"
                element={
                  <PrivateRoute>
                    <Myorder />
                  </PrivateRoute>
                }
              />
              <Route
                path="addfoodProduct"
                element={
                  <AdminRoute>
                    <AddFoodProduct />
                  </AdminRoute>
                }
              />
              <Route
                path="addToyAndAccProduct"
                element={
                  <AdminRoute>
                    <AddToyAccProduct />
                  </AdminRoute>
                }
              />

              <Route
                path="makeadmin"
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              />
              <Route
                path="manageallorder"
                element={
                  <AdminRoute>
                    <Allorder />
                  </AdminRoute>
                }
              />
              <Route
                path="manageallproduct"
                element={
                  <AdminRoute>
                    <Manageallproduct />
                  </AdminRoute>
                }
              />
            </Route>
            <Route
              path="/login"
              element={
                <SecureAuthRoute>
                  <Login />
                </SecureAuthRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <SecureAuthRoute>
                  <Register />
                </SecureAuthRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
