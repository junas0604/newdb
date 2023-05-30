import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';

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
      alert(response.data);
    } catch (error) {
      // Handle the error
      console.error('Error deleting record:', error);
      setErrorMessage('Failed to delete record. Please try again.');
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/Homepage">
          Jail Management System
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/Homepage">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Signup">
                Registration
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/DeleteRecord">
                Delete
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <Container
        fluid
        style={{
          backgroundColor: 'Grey',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="mask gradient-custom-3">
          <MDBCard className="m-5" style={{ maxWidth: '600px' }}>
            <MDBCardBody className="px-5">
              <h2>WELCOME TO DELETE RECORD FORM</h2>
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
  );
}

export default DeleteRecord;
