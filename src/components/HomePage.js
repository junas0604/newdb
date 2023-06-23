import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody
} from "mdb-react-ui-kit";

function HomePage() {
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
    <form>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Bureau_of_Jail_Management_and_Penology.png" alt="Logo" width="40" height="40" className="d-inline-block align-top" style={{ marginLeft: '20px' }} />
          <span className="ml-2" style={{ marginLeft: '10px' }}>BJMP Employee Scheduling</span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={{ marginLeft: '780px' }}>
            <li className="nav-item">
              <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Signup">Registration</a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className="bg-image"
        style={{
          backgroundImage: `url("https://www.bjmp.gov.ph/images/files/107507100_197367938408005_8328798389745902524_o.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '110vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          className="overlay"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            position: 'absolute',
            top: 65,
            left: 0,
            width: '100%',
            height: '110%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MDBContainer fluid className="d-flex align-items-center justify-content-center">
            <div className='mask gradient-custom-3'>
              <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                <MDBCardBody className='px-5 text-center'>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <table style={{ borderCollapse: 'collapse', border: '1px solid black', width: '100%' }}>
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
                </MDBCardBody>
              </MDBCard>
            </div>
          </MDBContainer>
        </div>
      </div>
    </form>
  );
}

export default HomePage;
