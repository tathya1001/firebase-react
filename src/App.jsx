import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import MyNavbar from "./components/MyNavbar.jsx";

//pages
// import Register from './pages/Register.jsx'
import Register from "./pages/RegisterNew.jsx";
// import Login from './pages/Login.jsx'
import Login from "./pages/LoginNew.jsx";
import List from "./pages/List.jsx";
// import Home from './pages/Home.jsx'
import Home from "./pages/HomeNew.jsx";
import Credit from "./pages/Credit.jsx";
import Debit from "./pages/Debit.jsx";
// import Category from './pages/Category.jsx'
import FormNew from "./pages/FormNew.jsx";

//css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Category from './pages/Category.jsx';
import Category from "./pages/CategoryNew.jsx";
import Log from "./pages/LogNew.jsx";
import Income from "./pages/Income.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <MyNavbar /> */}
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/list" element={<List></List>} />
        <Route path="/create/credit" element={<Credit />} />
        <Route path="/create/debit" element={<Debit />} />
        <Route path="/create/category" element={<Category />} />
        <Route path="/create/log" element={<Log />} />
        <Route path="/create/income" element={<Income />} />
        <Route path="/form" element={<FormNew />} />
      </Routes>
    </>
  );
}

export default App;
