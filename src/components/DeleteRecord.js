import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import Dropdown from 'react-bootstrap/Dropdown';

function DeleteRecord() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form input
    if (email === '') {
      setErrorMessage('Please enter the email of the record to delete.');
      return;
    }

    try {
      // Call the API to delete the record
      const response = await axios.delete(`http://localhost:8000/delete/${email}`);

      // Reset the form field
      setEmail('');
      setErrorMessage('');

      // Show a success message
      alert(response.data+"\nAccount Succesfully Deleted");
    } catch (error) {
      // Handle the error
      console.error('Error deleting record:', error);
      setErrorMessage('Failed to delete record. Please try again.');
    }
  };

  return (
    <div>
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

      <Container
        fluid
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="mask gradient-custom-3">
          <MDBCard className="m-5" style={{ maxWidth: '1000px' }}>
          <MDBCardBody className="px-5" style={{ position: 'relative', zIndex: 2, maxWidth: '1000px' }}>
              <h2 style={{fontWeight: 'bold'}}>DELETE RECORD FORM</h2>
              {errorMessage && <div className="error">{errorMessage}</div>}
              <form onSubmit={handleSubmit}>
                <MDBInput
                  label="Enter the Email that you want to delete"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <p></p>
                <p></p>
                <Button
                  variant="danger"
                  type="submit"
                  style={{ backgroundColor: 'blue', margin: 'auto', display: 'block' }}
                >
                  Delete Record
                </Button>
              </form>
            </MDBCardBody>
          </MDBCard>
        </div>
      </Container>
    </div>
    </div>
  );
}

export default DeleteRecord;
