import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'


import Home from './pages/Home'
import Convert from './pages/Convert'
import Saved from './pages/Saved'
import PageNotFound from './components/PageNotFound'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/convert" element={<Convert />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    <Footer />
  </Router>,
)
