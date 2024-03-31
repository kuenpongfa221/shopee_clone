import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./components/Home/Homepage";
import SignUp from "./components/SignUpLogin/SignUp/SignUp";
import Login from "./components/SignUpLogin/Login/Login";
import SearchPage from "./components/SearchPage/SearchPage";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="SignUp" element={<SignUp />}></Route>
          <Route path="Login" element={<Login />}></Route>
          <Route path="search/:keyword" element={<SearchPage />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
