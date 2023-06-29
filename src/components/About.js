import React from "react";
import { MDBContainer, MDBCardBody } from "mdb-react-ui-kit";
import Dropdown from 'react-bootstrap/Dropdown';

function About() {

  return (
    <form>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/HomePage">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/97/Bureau_of_Jail_Management_and_Penology.png"
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top"
            style={{ marginLeft: '20px' }}
          />
          <span className="ml-2" style={{ marginLeft: '10px' }}>
            BJMP Employee Scheduling
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/HomePage" style={{ marginLeft: '780px' }}>
                Home <span className="sr-only"></span>
              </a>
            </li>
          </ul>
          <div>
            <Dropdown>
              <Dropdown.Toggle className="bg-dark" variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/HomePage">Dashboard</Dropdown.Item>
                <Dropdown.Item href="/Profile">View Profile</Dropdown.Item>
                <Dropdown.Item href="/AddSchedule">Create Schedule</Dropdown.Item>
                <Dropdown.Item href="/ChangePassword">Edit Password</Dropdown.Item>
                <Dropdown.Item href="/DeleteRecord">Delete Record</Dropdown.Item>
                <Dropdown.Item href="/About">About Us</Dropdown.Item>
                <Dropdown.Item href="/Login">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </nav>

      <div
        className="bg-image"
        style={{
          backgroundImage: `url("https://www.bjmp.gov.ph/images/files/107507100_197367938408005_8328798389745902524_o.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100vh',
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
            height: '100%',
          }}
        >

        <MDBContainer fluid className="d-flex align-items-center justify-content-center bg-image" >
          <div className="mask gradient-custom-3">
            <MDBCardBody className="px-5" style={{ position: 'relative', zIndex: 2, maxWidth: '1000px' }}>
              <h1 style={{ textAlign: 'center', color: '#fff', marginBottom: '35px', marginTop: '50px', fontFamily: 'Arial', fontWeight: 'bold' }}>About us</h1>
              <h5 style={{ marginBottom: '35px', textAlign: 'justify', color: '#fff', fontFamily: 'Arial' }}>About the BJMP (Bureau of Jail Management and Penology): The Bureau of Jail Management and Penology (BJMP) is a government agency in the Philippines responsoble for he administration and management of the city, district, and municipal jails. Established in 1991, the BJMP aims to ensure the safe custody and rehabilitation of detainees and to promote their humane treatment. The bureau operates under the Department of the Interior and Local Government (DILG) and works closely with other law enforcement agencies to maintain peace and order within the jails.</h5>
              <h5 style={{ marginBottom: '35px', textAlign: 'justify', color: '#fff', fontFamily: 'Arial' }}>The BJMP Employee Shift Scheduling refers to the process of organizing and managing work shift for BJMP personnel assigned to various jail facilities. As the BJMP operates 24/7, it isessential to have an efficient scheduling system to ensure adequate staffing coverage and the smooth operation of jails.</h5>
              <h5 style={{ marginBottom: '35px', textAlign: 'justify', color: '#fff', fontFamily: 'Arial' }}>The shifft scheduing system takes into account such as the number of available employees, their roles and responsibilities, and the required staffing levels for each shift. It aims to optimize the allocation of resources while ensuring that essential task and responsonsibilities are adequately coverd at all times.</h5>
            </MDBCardBody>
          </div>
        </MDBContainer>
      </div>
      </div>
    </form>
  );
}

export default About;
