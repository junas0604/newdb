import React, { useState } from 'react';
import { Container} from 'react-bootstrap';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdb-react-ui-kit';


function ChangePassword() {
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form inputs
    if (email === '') {
      setErrorMessage('Please enter your email or username.');
      return;
    }

    if (currentPassword === '') {
      setErrorMessage('Please enter your current password.');
      return;
    }

    if (newPassword === '') {
      setErrorMessage('Please enter a new password.');
      return;
    }

    if (confirmPassword === '') {
      setErrorMessage('Please confirm your new password.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage('New password and confirm password do not match.');
      return;
    }

    try {
      // Call the API to update the password
      const response = await axios.put(`http://localhost:8000/update/${email}`, {
        newPassword: newPassword,
      });

      // Reset the form fields
      setEmail('');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setErrorMessage('');

      // Show a success message
      alert(response.data +"\n Your Password is Succesfully Changed");
    } catch (error) {
      // Handle the error
      console.error('Error updating password:', error);
      setErrorMessage('Failed to update password. Please try again.');
    }
  };

  return (
    <div className="div1">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Bureau_of_Jail_Management_and_Penology.png" alt="Logo" width="40" height="40" className="d-inline-block align-top" style={{ marginLeft: '20px' }} />
    <span className="ml-2" style={{ marginLeft: '10px' }}>BJMP Employee Scheduling</span>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
      <a className="nav-link" href="/HomePage">Home <span className="sr-only"></span></a>
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

      <Container fluid style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className='mask gradient-custom-3'>
          <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
            <MDBCardBody className='px-5'>

              <h2 className="text-center mb-5">CHANGE PASSWORD</h2>
              {errorMessage && <div className="error">{errorMessage}</div>}
              <form onSubmit={handleSubmit}>
                <MDBInput
                  label="Email/Username"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email or Username"
                />
                <MDBInput
                  label="Current Password"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Current Password"
                />
                <MDBInput
                  label="New Password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New Password"
                />
                <MDBInput
                  label="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                />

                <div className="d-flex justify-content-center mt-4">
                  < MDBBtn className="mb-4"
                    variant="primary"
                    type="submit"
                  >
                    Change Password
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </div>
      </Container>
      </div>
    </div>
  );
}

export default ChangePassword;
