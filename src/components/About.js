import React from "react";
import { useNavigate} from "react-router-dom";
import { MDBContainer, MDBCard, MDBCardBody, MDBBtn } from "mdb-react-ui-kit";
import Dropdown from 'react-bootstrap/Dropdown';

function About() {

  const history = useNavigate();


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
        className="bg-image"
        style={{
          backgroundImage: `url("https://www.bjmp.gov.ph/images/files/107507100_197367938408005_8328798389745902524_o.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '160vh',
          
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
            height: '160%',
          }}
        ></div>

      <MDBContainer fluid className="d-flex align-items-center justify-content-center bg-image" >
        <div className="mask gradient-custom-3">
          <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
            <MDBCardBody className="px-5">
            <h1>About us</h1>
            
            <h5>About the BJMP (Bureau of Jail Management and Penology): The Bureau kf Jail Management and Penology (BJMP) is a government agency in the Philippines responsoble for he administration and management of the city, district, and municipal jails. Established in 1991, the BJMP aims to ensure the safe custody and rehabilitation of detainees and to promote their humane treatment. The bureau operates under the Department of the Interior and Local Government (DILG) and works closely with other law enforcement agencies to maintain peace and order within the jails.</h5>

            <h5>The BJMP Employee Shift Scheduling refers to the process of organizing and managing work shift for BJMP personnel assigned to various jail facilities. As the BJMP operates 24/7, it isessential to have an efficient scheduling system to ensure adequate staffing coverage and the smooth operation of jails.</h5>

            <h5>The shifft scheduing system takes into account such as the number of available employees, their roles and responsibilities, and the required staffing levels for each shift. It aims to optimize the allocation of resources while ensuring that essential task and responsonsibilities are adequately coverd at all times.</h5>
              {/* Profile Button */}
              <div className="text-center">
              <MDBBtn className="mb-4" onClick={handleProfileClick}>
                More Options
              </MDBBtn>
               &nbsp;&nbsp;&nbsp;
               &nbsp;&nbsp;&nbsp;
               &nbsp;&nbsp;&nbsp;
              <MDBBtn className="mb-4" onClick={handleProfileClick3}>
                Change Password
              </MDBBtn>
              &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;
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

export default About;
