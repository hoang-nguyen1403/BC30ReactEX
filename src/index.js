import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route}  from "react-router-dom"
import LayoutExcercise from './LayoutExcercise/LayoutExcercise';
import Glasses from './Glasses/Glasses'
import Description from './MainCompent/Description';
import Cart from './PropsPractice/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='' element={<App />}>
          <Route path='' element={<Description/>}></Route>
          <Route path='BTLayout' element={<LayoutExcercise></LayoutExcercise>}></Route>
          <Route path='Glasses' element={<Glasses/>}></Route>
          <Route path='Props' element={<Cart/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
