import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Header(){
    return(
        <Container className="entry">
        <Row>
          <Col><div><h1 className="headerbrand">ImpactW</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div></Col>
          <Col>
          <div className="card-inner">
          <div className="panel">
          <div className="creditcard card--front">
          <div className="creditcard__number">4145 5441 1271 6781</div>
          <div className="creditcard__expiry-date">10/27</div>
          <div className="creditcard__owner">Jane Doe</div>
          <img className="creditcard__logo" src="../../public/visa.png"/>
          </div>
         </div>
         </div>
  
   </Col>
        </Row>
        </Container>

)}
export default Header;
