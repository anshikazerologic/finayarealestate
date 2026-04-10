import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home'
import Learn from './pages/Learn';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/learn" element={<Learn/>} />
            <Route path="/sell" element={<Learn/>} />
            <Route path="/insure" element={<Learn/>} />
            <Route path="/getloan" element={<Learn/>} />
            
            
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
