import React from "react"
import { useLocation,Link } from 'react-router-dom';

function Homepage() {

    const location = useLocation()
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
          </ul>
        </div>
      </nav>

            <p>This is Home Page!!</p>

            <h1>Hello {location.state.id} and welcome to the home</h1>

            <div className="text-center">
                                <h2>
                                     <Link to="/Login"> Logout</Link>
                                </h2>
                            </div>

        </form>

    );
}
export default Homepage;