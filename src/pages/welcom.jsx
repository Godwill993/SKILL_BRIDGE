import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "../components/navi.jsx";
import LandingPage from "../components/landigPage.jsx";
import "../index.css";
import Cardprop from "../components/cardprop.jsx";
import  App  from "./App";
import Bot from "../components/chatbot.jsx";
 function  Welcome () {
  return (
  <>
    <Nav></Nav>
    <LandingPage></LandingPage>
    <Cardprop></Cardprop>
    <Bot></Bot>
    
 </>
  );
}
export default Welcome;