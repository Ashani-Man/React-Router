import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import blue from "./Blue"
import red from "./Red"
function App() {

  return (
    <>
    <div id="container">
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element = {blue()}/>
          <Route path="/red" element={red()} />
        </Routes>       
        </div>
    </div>
    </>
  )
}

export default App
