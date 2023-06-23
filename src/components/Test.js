import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Test() {
  const [data, setData] = useState([]);
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate().toString().padStart(2, '0');

  const nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + 1);
  const nextDay = nextDate.getDate().toString().padStart(2, '0');

  const tnextDate = new Date(nextDate);
  tnextDate.setDate(nextDate.getDate() + 1);
  const tnextDay = tnextDate.getDate().toString().padStart(2, '0');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/'); // Replace '/api/data' with your actual API endpoint
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
      <thead>
                      <tr>
                        <th colSpan="4">
                          {currentMonth} {currentDay}, {currentYear}
                        </th>
                      </tr>
                      <tr>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Names</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>
                          {currentDay} {currentMonth} {currentYear}
                        </th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>
                          {nextDay} {currentMonth} {currentYear}
                        </th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>
                          {tnextDay} {currentMonth} {currentYear}
                        </th>
                      </tr>
                    </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.fullName}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}></td>
              <td style={{ border: '1px solid black', padding: '8px' }}></td>
              <td style={{ border: '1px solid black', padding: '8px' }}></td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Test;
