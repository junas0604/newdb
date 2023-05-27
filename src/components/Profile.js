import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Profile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:8000/");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
      <h1>Welcome to Profile page</h1>

      {/* Render the fetched data */}
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            Email: {item.email}, Password: {item.password}, Username: {item.username}, Re-entered Password: {item.repassword}
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

