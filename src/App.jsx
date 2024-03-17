import { useState } from 'react'
import { Routes, Route } from "react-router-dom"


import MyNavbar from "./components/MyNavbar.jsx";

//pages
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import List from './pages/List.jsx'
import Home from './pages/Home.jsx'

//css
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/list" element={<List></List>} />
      </Routes>
    </>
  )
}

export default App
