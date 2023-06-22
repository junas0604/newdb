import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Profile from "./components/Profile"
import DeleteRecord from "./components/DeleteRecord"
import ChangePassword from "./components/ChangePassword"
import HomePage from "./components/HomePage"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/HomePage" element={<HomePage/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/DeleteRecord" element={<DeleteRecord/>} />
          <Route path="/ChangePassword" element={<ChangePassword/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;