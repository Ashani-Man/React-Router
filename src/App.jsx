import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import blue from "./Blue"
import red from "./Red"
import homePage from "./home"
function App() {

  return (
    <>
    <div id="container">
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to ="/home"> Home</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element = {blue()}/>
          <Route path="/red" element={red()} />
           <Route path="/home" element ={homePage()}></Route>
        </Routes>       
        </div>
    </div>
    </>
  )
}

export default App
