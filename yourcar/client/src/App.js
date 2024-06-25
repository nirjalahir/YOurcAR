
import './App.css';
import Finalpage from './componants/Finalpage';
import FirstForm from './componants/FirstForm';
import Hero from './componants/Hero';
import Login from './componants/Login';
import Navbar from './componants/Navbar';
import { Route, Routes } from 'react-router-dom';

import React from 'react'
import News from './componants/News';
import Readonly from './componants/Readonly';
import FilterInfo from './componants/FilterInfo';


export default function App() {
  return (
      <>
      <Navbar />
  
      <Routes>
        <Route path='/' element={
          <Hero />
        }>
        </Route>
        <Route path='/form' element={<FirstForm/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/CarsInfo' element={<Finalpage/>}></Route>
        <Route path='/newspage' element={<News/>}></Route>
        <Route path='/readinfo' element={<Readonly/>}></Route>
        <Route path='/filtered' element={<FilterInfo/>}></Route>
      </Routes>
    </>
  )
}
