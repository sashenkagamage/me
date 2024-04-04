import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Routes, Route}
from 'react-router-dom';
import {Link} from 'react-router-dom';
import Home from './components/Home';
import Project1 from './components/pages/project1';
import Project2 from './components/pages/project2';
import Project3 from './components/pages/project3';

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/project1' element={<Project1 />}/>
          <Route exact path='/project2' element={<Project2 />}/>
          <Route exact path='/project3' element={<Project3 />}/>
        </Routes>
</Router>
      
    </>
  );
}

export default App;
