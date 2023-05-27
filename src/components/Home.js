  import React from "react"
  import { useLocation,Link } from 'react-router-dom';
  import {
    MDBContainer,
    MDBCard,
    MDBCardBody
  } from "mdb-react-ui-kit";
  

  function Home() {

      const location = useLocation()
      return (
          <form>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/Homepage">Jail Management System</a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"/>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/Homepage">Home <span class="sr-only"></span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Login">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Signup">Registration</a>
              </li>
            </ul>
          </div>
        </nav>

        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundColor: 'Grey' }}>
        <div className='mask gradient-custom-3'>
          <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
            <MDBCardBody className='px-5'>
              <h2 className="text-uppercase text-center mb-5">Jail Guard Officer Home Page</h2>
              <p>  </p>
              <p>  </p>
              <h1>Hello {location.state.id} and welcome to the home</h1>
              
              <div className="text-center">
                    <button  style={{ backgroundColor: 'blue', color: 'white',}}>
                        <Link to="/"> Logout</Link>
                    </button>
              </div>

              <div className="text-center">
                    <button  style={{ backgroundColor: 'blue', color: 'white',}}>
                        <Link to="/Profile"> Profile</Link>
                    </button>
              </div>

              </MDBCardBody>
          </MDBCard>
        </div>
      </MDBContainer>

          </form>

      );
  }
  export default Home;