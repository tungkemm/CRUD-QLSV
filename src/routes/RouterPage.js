import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Manage from "../page/Manage";
import Login from "../page/Login";
import Decentralization from "../page/Decentralization";

const RouterPage = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/manage" element={<Manage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/decentralization" element={<Decentralization />} />
    </Routes>
  );
};

export default RouterPage;
