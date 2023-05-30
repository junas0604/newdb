import React from "react";
import { useNavigate} from "react-router-dom";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBBtn
} from "mdb-react-ui-kit";


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
          </ul>
        </div>
      </nav>

      <MDBContainer fluid className="d-flex align-items-center justify-content-center bg-image" style={{ backgroundColor: 'grey' }}>
        <div className="mask gradient-custom-3">
          <MDBCard className="m-5" style={{ maxWidth: '600px' }}>
            <MDBCardBody className="px-5">
              <h2 className="text-uppercase text-center mb-5">
                Welcome to the Profile Page
              </h2>

              <h2>User Data:</h2>

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
    </form>
  );
}

export default Profile;
