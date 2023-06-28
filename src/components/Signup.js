import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import axios from "axios";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
} from 'mdb-react-ui-kit';

function Signup() {
    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [RePassword, setRePassword] = useState('');
    const [fullName, setfullName] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [rank, setRank] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/signup", {
                email,
                password,
                fullName,
                phoneNumber,
                rank,
            });

            if (response.data === "exist") {
                alert("User already exists");
            } else if (response.data === "notexist") {
                history("/home", { state: { id: email } });
            }
        } catch (error) {
            alert("wrong details");
            console.log(error);
        }
    }

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
    <ul className="navbar-nav" style={{ marginLeft: '780px' }}>
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
          height: '150vh',
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
            height: '150.1%',
          }}
        ></div>

            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
                <div className='mask gradient-custom-3'>
                    <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                        <MDBCardBody className='px-5'>
                            <MDBRow>
                                <h2 className="text-uppercase text-center mb-5">Create Account</h2>

                                <MDBInput wrapperClass="mb-4" label="Full Name" size="lg" id="fullName" type="text" value={fullName} onChange={(e) => setfullName(e.target.value)} />
                                
                                <MDBInput wrapperClass='mb-4' label='Email Address' size='lg' id='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />

                                <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='phoneNumber' type='phoneNumber' value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} />

                                <MDBInput wrapperClass='mb-4' label='Rank/Position' size='lg' id='rank' type='text' value={rank} onChange={(e) => setRank(e.target.value)} />

                                <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='Password' type='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

                                <MDBInput wrapperClass='mb-4' label='Confirm Password' size='lg' id='RePassword' type='Password' value={RePassword} onChange={(e) => setRePassword(e.target.value)} />


                                <MDBBtn className="mb-4" size="lg" onClick={submit}>
                                    Register
                                </MDBBtn>

                                <div className="text-center">
                                  <p>
                                    Already Have an Account? <Link to="/Login">Login</Link>
                                  </p>
                                </div>

                                <MDBCol md="10" lg="6" className="order-1 order-lg-2 d-flex align-items-center">
                                    <MDBCardImage src="" fluid />
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>


                    </MDBCard>
                    
                </div>
                
            </MDBContainer>
            </div>
        </form>
    );
}

export default Signup;
