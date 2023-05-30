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

  const handleProfileClick3 = () => {
    history("/ChangePassword");
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
    <ul className="navbar-nav">
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

      <MDBContainer fluid className="d-flex align-items-center justify-content-center bg-image" >
        <div className="mask gradient-custom-3">
          <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
            <MDBCardBody className="px-5">
              <h2 className="text-center mb-5">
               Hello {location.state.id} and welcome 
              </h2>

              {/* Profile Button */}
              <div className="text-center">
              <MDBBtn className="mb-4" onClick={handleProfileClick}>
                More Options
              </MDBBtn>
              </div>

              <div className="text-center">
              <MDBBtn className="mb-4" onClick={handleProfileClick3}>
                Change Password
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
      </div>
    </form>
  );
}

export default Home;
