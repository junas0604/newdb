import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/data");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Welcome to the Profile page</h1>

      

      <h2>User Data:</h2>
      <ul>
        {data.map((check) => (
          <li key={check._id}>
            Email: {check.email}, Password: {check.password}
          </li>
        ))}
      </ul>

      <div className="text-center">
        <button style={{ backgroundColor: "blue", color: "white" }}>
          <Link to="/">Logout</Link>
        </button>
      </div>
    </div>
  );
}

export default Profile;
