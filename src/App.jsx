import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import './App.css'
import Home from './components/Home/Home'
import Offers from './components/Offers/Offers'
import Products from './components/Products/Products'
import Why from './components/Why/Why'
import Blog from "./components/Blog/Blog";

function App() {

  return (
     <>
    <Home/>
    <Products/>
    <Offers/>
    <Why/>
    <Blog/>
    </>
      

      
  )
}

export default App
