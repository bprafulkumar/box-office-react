import React from "react"
import { Route , Routes  } from "react-router-dom"
import Home from "./pages/Home";
import Showpage from "./pages/show";
import Starred from "./pages/Starred";


function App() {
  return (
    
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/starred" element={<Starred/>}/>
      <Route path="/show/:id" element ={<Showpage/>} />
    </Routes>
  );
}

export default App;
