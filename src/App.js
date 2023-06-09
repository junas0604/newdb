import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Profile from "./components/Profile"
import DeleteRecord from "./components/DeleteRecord"
import ChangePassword from "./components/ChangePassword"
import HomePage from "./components/HomePage"
import Test from "./components/Test"
import AddSchedule from "./components/AddSchedule"
import About from "./components/About"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Login/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/HomePage" element={<HomePage/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/DeleteRecord" element={<DeleteRecord/>} />
          <Route path="/ChangePassword" element={<ChangePassword/>} />
          <Route path="/Test" element={<Test/>} />
          <Route path="/AddSchedule" element={<AddSchedule/>} />
          <Route path="/About" element={<About/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;