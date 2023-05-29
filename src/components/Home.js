import React from "react";
import { useNavigate,useLocation} from "react-router-dom";
import { MDBContainer, MDBCard, MDBCardBody, MDBBtn } from "mdb-react-ui-kit";

function Home() {

  const history = useNavigate();
  const location = useLocation();

  const handleProfileClick = () => {
    history("/Profile");
  };

  const handleProfileClick2 = () => {
    history("/Login");
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
          <span className="navbar-toggler-icon" />
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

      <MDBContainer fluid className="d-flex align-items-center justify-content-center bg-image" style={{ backgroundColor: "Grey" }} >
        <div className="mask gradient-custom-3">
          <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
            <MDBCardBody className="px-5">
              <h2 className="text-uppercase text-center mb-5">
               Hello {location.state.id} Welcome to the Jail Guard Home
              </h2>

              {/* Profile Button */}
              <div className="text-center">
              <MDBBtn className="mb-4" onClick={handleProfileClick}>
                Delete Account
              </MDBBtn>
              </div>

              <div className="text-center">
              <MDBBtn className="mb-4" onClick={handleProfileClick2}>
                Logout
              </MDBBtn>
              </div>
             
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBContainer>
    </form>
  );
}

export default Home;
