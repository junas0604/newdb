import React, { useState } from 'react';
//import axios from 'axios';
import {
    MDBContainer,
    MDBInput,
    MDBBtn,
    MDBCard,
    MDBCardBody
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

function AddSchedule() {
    const history = useNavigate();

    const handleProfileClick = () => {
        history('/Homepage');
    };

    const [officerName, setOfficerName] = useState('');
    const [date, setDate] = useState('');
    const [startShift, setStartShift] = useState('');
    const [endShift, setEndShift] = useState('');

    const handleSaveClick = () => {
        history('/Signup');
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
                  <Dropdown.Item href="/Login">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </nav>

            <div
                className="bg-image d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: `url("https://www.bjmp.gov.ph/images/files/107507100_197367938408005_8328798389745902524_o.jpg")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    minHeight: '110vh',
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
                    <MDBContainer>
                        <div className='d-flex align-items-center justify-content-center'>
                            <MDBCard className='w-100' style={{ maxWidth: '600px' }}>
                                <MDBCardBody className='px-5'>
                                    <h2 className="text-uppercase text-center mb-5" style={{ fontWeight: "bold" }}>Create a Schedule</h2>
                                    <h5 className="text-uppercase text-center mb-5" style={{ fontWeight: "bold" }}>{/* This page is under constructions */}</h5>
                                    <MDBInput
                                        label='Officer Name'
                                        value={officerName}
                                        onChange={(e) => setOfficerName(e.target.value)}
                                    />
                                    <MDBInput
                                        label='Date'
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                    <MDBInput
                                        label='Start Shift'
                                        value={startShift}
                                        onChange={(e) => setStartShift(e.target.value)}
                                    />
                                    <MDBInput
                                        label='End Shift'
                                        value={endShift}
                                        onChange={(e) => setEndShift(e.target.value)}
                                    />
                                    <div className='text-center mt-4'>
                                        <MDBBtn onClick={handleSaveClick}>Save</MDBBtn>
                                        &nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;
                                        <MDBBtn onClick={handleProfileClick}>Cancel</MDBBtn>
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

export default AddSchedule;
