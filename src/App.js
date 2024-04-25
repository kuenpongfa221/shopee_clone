import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./components/Home/Homepage";
import SignUp from "./components/SignUpLogin/SignUp/SignUp";
import Login from "./components/SignUpLogin/Login/Login";
import SearchPage from "./components/SearchPage/SearchPage";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="SignUp" element={<SignUp />}></Route>
          <Route path="Login" element={<Login />}></Route>
          <Route path="search/:keyword" element={<SearchPage />}></Route>
          <Route path="ShoppingCart" element={<ShoppingCart />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
