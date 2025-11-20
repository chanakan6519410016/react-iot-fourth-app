import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AddTodo from "./pages/AddTodo.jsx";
import UpdateTodo from "./pages/UpdateTodo.jsx";
import ShowAllTodo from "./pages/ShowAllTodo.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtodo" element={<AddTodo />} />
          <Route path="/updatetodo" element={<UpdateTodo />} />
          <Route path="/showalltodo" element={<ShowAllTodo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
