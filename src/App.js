import React from "react"
import { Route , Routes  } from "react-router-dom"
import Home from "./pages/Home";
import Starred from "./pages/Starred";


function App() {
  return (
    
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/starred" element={<Starred/>}/>
    </Routes>
  );
}

export default App;
