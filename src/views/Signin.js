import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Navigate,Link  } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useDispatch,useSelector } from 'react-redux';
import { LOGIN } from '../actions/authActions';
import signin from '../images/signin.png';
import '../styles/signin.css';
import { Container } from 'react-bootstrap';

function Signin() {

  const dispatch = useDispatch();
  const isLoggedIn =  useSelector(getStoreValues);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send login request)
  };
 
  function handleGoogleLoginSuccess(credentialResponse){ //this function get call when user get signed it 
      console.log(credentialResponse)
      const decoded = jwtDecode(credentialResponse.credential);  // the credentials we got wat jwt encoded thats  y used jwtdecode to get the user info
      console.log(decoded.email); 

      const email = decoded.email; // wanted only email id of user from jwt reponse
      
      dispatch({ type : LOGIN , payload : { username :email }})
      localStorage.setItem("username",email)
  }

  function handleGoogleLoginError (){
    console.log('Login Failed');
  }
  
  function getStoreValues (state){
    return (state.authReducer.isLoggedIn);
  }

  if (isLoggedIn === true) {
    return <Navigate to="/" replace />
  }

  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div>
              <Row>
              <Col>Logo Here</Col>
              <Col>Dont Have an Account <Link to= "/signup">Sign Up ! </Link></Col>
              </Row>
            </div>
            <h1 className='app-title mb-3 mt-3' >Welcome Back</h1>
            <h5 className='login-subheading' >Log into your account</h5>
            <div className='google-login-container'>
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginError}
                className='google-login-btn mb-3'
              />
            </div>  
            <p className='continue-with-text mt-4'>or continue with</p>
            <form onSubmit={handleSubmit}  className="form-narrow-centered">
              <div className="form-group">
                <label  htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-control mb-3"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control mb-3"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary mb-5">
                Sign In
              </button>
            </form>
          </Col>
          <Col>
            <img src={signin} alt="signin" className="signin-image"  />
          </Col>
        </Row>
        </Container>  
    </div>
  )
}

export default Signin