import React from 'react'
import Header from '../components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
import Admin from '../views/Admin'
import Login from '../views/Login'
import Organization from '../views/Organization'
import ProtectedRoute from '../components/ProtectedRoute'


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route element={<ProtectedRoute Component={Admin} />} exact path='/admin' />
        <Route element={<ProtectedRoute Component={Organization} />} exact path='/info' />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
