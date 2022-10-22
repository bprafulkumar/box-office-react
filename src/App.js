import React from "react"
import { Route , Routes  } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home";
import Starred from "./pages/Starred";


function App() {
  return (
    <div>
      <Nav/>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/starred" element={<Starred/>}/>
    </Routes>
    </div>
  );
}

export default App;
