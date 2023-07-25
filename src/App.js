//import logo from './logo.svg';
//import "./App.css";
import React from "react";
import NewsPage from "./pages/NewsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category?" element={<NewsPage />} />
    </Routes>
  );
}

export default App;
