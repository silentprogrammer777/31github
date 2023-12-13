import React from 'react';
import './css/style.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from "./menu";
import Recipe from "./recipe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
          <Route path="/" element={<Recipe/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
