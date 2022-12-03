import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Login from "./views/Login";
import Users from "./views/Users";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("CurrentUsers")) {
      localStorage.setItem("CurrentUsers", JSON.stringify([
        {
          user: "admin",
          password: "admin",
          role: "admin",
          firstName: "Gerset",
          lastName: "Linarez"
        }
      ]))
    }
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/home' element={<Navbar><Home /></Navbar>} />
        <Route path='/users' element={<Navbar><Users /></Navbar>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
