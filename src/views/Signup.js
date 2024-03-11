import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Row,Col } from 'react-bootstrap';
import signup from '../images/signup.png';
import '../styles/signup.css';

function Signup() {

  const isLoggedIn =  useSelector(getStoreValues)

  function getStoreValues (state){
    return (state.authReducer.isLoggedIn);
  }

  if (isLoggedIn === true) {
    return <Navigate to="/" replace />; 
  }

  return (
    <div>
      <Row>
        <Col>
          <img src={signup} alt="signup" className="signup-image"  />
        </Col>
        <Col>
          <h1>hello</h1>
        </Col>
      </Row>
    </div>
  )
}

export default Signup