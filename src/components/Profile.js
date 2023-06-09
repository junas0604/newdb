import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBBtn
} from "mdb-react-ui-kit";
import Dropdown from 'react-bootstrap/Dropdown';


function Profile() {
  const history = useNavigate();


  const handleProfileClick = () => {
    history("/Login");
  };

  const handleProfileClick1 = () => {
    history("/DeleteRecord");
  };








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
          height: '112vh',
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
            height: '112.1%',
          }}
        ></div>

        <MDBContainer fluid className="d-flex align-items-center justify-content-center bg-image">
          <div className="mask gradient-custom-3">
            <MDBCard className="m-5" style={{ maxWidth: '600px' }}>
              <MDBCardBody className="px-5">
                <h2 className="text-center mb-5">
                  Welcome to the Profile Page
                </h2>

                <div className="text-center">
                  <MDBBtn className="mb-4" onClick={handleProfileClick}>
                    Logout
                  </MDBBtn>
                </div>
                <div className="text-center">
                  <MDBBtn className="mb-4" onClick={handleProfileClick1}>
                    Delete an Account
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </div>
        </MDBContainer>
      </div>
    </form>
  );
}

export default Profile;
