import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import { Home, About, Contact } from './pages/index'
import './scss/index.scss'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='contact' element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
