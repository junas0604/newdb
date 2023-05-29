import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdb-react-ui-kit";

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:8000/", {
        email,
        password,
      });
  
      if (response.data === "exist") {
        history("/home", { state: { id: email } });
      } else if (response.data === "notexist") {
        alert("Invalid email or password");
      }
    } catch (error) {
      alert("Wrong details");
      console.log(error);
    }
  }
  


  return (
    <form>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/Homepage">Jail Management System</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
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
            <li className="nav-item">
              <a className="nav-link" href="/DeleteRecord">
                Delete
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundColor: 'Grey' }}>
        <div className='mask gradient-custom-3'>
          <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
            <MDBCardBody className='px-5'>
              <h2 className="text-uppercase text-center mb-5">Jail Guard Officer Login Form</h2>

              <MDBInput
                wrapperClass="mb-4"
                label="Your Email"
                size="lg"
                id="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />

              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                size="lg"
                id="Password"
                type="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />

              <div className="d-flex justify-content-between mx-3 mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <a href="#!">Forgot password?</a>
              </div>

              <MDBBtn className="mb-4" onClick={submit}>
                Sign in
              </MDBBtn>

              <div className="text-center">
                <p>
                  Not a member? <Link to="/signup">Sign up</Link>
                </p>
              </div>

            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBContainer>
    </form>
  );
}

export default Login;