import React from 'react';
import { Route, Routes, Navigate  } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Questions from './components/Questions/questions'
import Login  from './components/Login/login';
import HomePage from './components/HomePage/homePage';
import Register from './components/Register/register';
import Tour1 from './components/HomePage/Tours/Tour1';
import Tour2 from './components/HomePage/Tours/Tour2';
import Tour3 from './components/HomePage/Tours/Tour3';
import Tour4 from './components/HomePage/Tours/Tour4';
import Tour5 from './components/HomePage/Tours/Tour5';
import Tour6 from './components/HomePage/Tours/Tour6';



function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="homepage" element={<HomePage />} />
      <Route path="homepage/tour1" element={<Tour1/>}/>
      <Route path="homepage/tour2" element={<Tour2/>}/>
      <Route path="homepage/tour3" element={<Tour3/>}/>
      <Route path="homepage/tour4" element={<Tour4/>}/>
      <Route path="homepage/tour5" element={<Tour5/>}/>
      <Route path="homepage/tour6" element={<Tour6/>}/>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path='*' element={<Navigate to="homepage" replace/>} />
    </Routes>
    <Questions/>
    <Footer/>
  </div>
  );
}

export default App;
