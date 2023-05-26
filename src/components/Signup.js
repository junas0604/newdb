import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
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

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/signup", {
                email,
                password
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
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/Homepage">Jail Management System</a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/Homepage">Home <span class="sr-only"></span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/signup">Registration</a>
                        </li>
                    </ul>
                </div>
            </nav>


            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundColor: 'Grey' }}>
                <div className='mask gradient-custom-3'>
                    <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                        <MDBCardBody className='px-5'>
                            <MDBRow>
                                <h2 className="text-uppercase text-center mb-5">Jail Guard Officer Registration Form</h2>

                                
                                <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />

                                <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='Password' type='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

                                <MDBInput wrapperClass='mb-4' label='Re-Password' size='lg' id='RePassword' type='Password' value={RePassword} onChange={(e) => setRePassword(e.target.value)} />


                                <MDBBtn className="mb-4" size="lg" onClick={submit}>
                                    Register
                                </MDBBtn>



                                <MDBCol md="10" lg="6" className="order-1 order-lg-2 d-flex align-items-center">
                                    <MDBCardImage src="" fluid />
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>


                    </MDBCard>

                </div>
            </MDBContainer>
        </form>
    );
}

export default Signup;
