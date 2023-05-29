import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Profile from "./components/Profile"
import DeleteRecord from "./components/DeleteRecord"

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
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/DeleteRecord" element={<DeleteRecord/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;