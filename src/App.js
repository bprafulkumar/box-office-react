import React from "react"
import { Route , Routes  } from "react-router-dom"


function App() {
  return (
    <Routes>
      <Route  path="/" element={"Prafulkumar"}/>
      <Route  path="/name" element={"DUDE"}/>
      <Route  path="/tools" element={"Powerpack"}/>
      <Route  element={"404 ERROR"}/>

      
    </Routes>
  );
}

export default App;
