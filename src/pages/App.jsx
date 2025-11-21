import React from "react";
import "../styles/App.css";
import Welcome from "./welcom.jsx";
import { Routes, Route} from "react-router-dom";
import Form  from "./form.jsx";
import  LandingPage  from "../components/landigPage.jsx";
function App() {

  return (
 
  <Routes>
     <Route path="/" element={<Welcome/>} />
     <Route path="/form" element={<Form/>} />  
     <Route path="/welcome " element={<Welcome/>}/>
   </Routes>
  

  );
};

export default App;

