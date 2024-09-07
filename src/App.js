import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Blog from './pages/Blog';
import Home from './pages/Home';
import  updateProduct  from './Product/actions';
import AddForm from './Product/AddForm';
import './App.css'
import axios from 'axios';

function App() {
 

  return (
    <>
    <div className='navBar'>
      <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<Blog />} />

      <Route path="/create-product" element={<AddForm />} />
      <Route path="/update-product/:id" element={<updateProduct />} />
    </Routes>
    </>
  );
}


export default styled(App)`
  height: 48px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #ffffff;
  border-bottom: 1px solid #dee2e6;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);

  padding: 2rem;
  position: fixed;
  z-index: 100;

  .brand {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;