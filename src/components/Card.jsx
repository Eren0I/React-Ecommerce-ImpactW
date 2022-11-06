import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Cardcomp(props) {
  return (



    <Card  className="card" >
      <Card.Img className="card--image" variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
      <Card.Body>
        <Card.Title className="card--title">{props.title}</Card.Title>
        <Card.Text className="card--price"><span className="bold">$ {props.price}</span></Card.Text>
        <Button size="md" variant="success">Add to Cart</Button>
        <Button size="md" variant="outline-danger">remove</Button>
      </Card.Body>
    </Card>

   

  );
}


export default Cardcomp;

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// function Cardcomp(){

//     //  props let badgeText
//     // if (props.openSpots === 0) {
//     //     badgeText = "SOLD OUT"
//     // } else if (props.location === "Online") {
//     //     badgeText = "ONLINE"
//     // }
//   return (
//     <Container>
//     <Row>
//     <Col >
//     {/* {badgeText && <div className="card--badge">{badgeText}</div>} */}
//     <Card className="card" style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={`../images/${props.coverImg}`} className="card--image" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text className="card--title">{props.title}</Card.Text>
//         <Card.Text className="card--price"><span className="bold">${props.price}</span></Card.Text>
//         <Button variant="success">Add to Cart</Button>
//       </Card.Body>
//     </Card>
//     </Col>
//     <Col></Col>
//     <Col></Col>
//     </Row>
//     </Container>
//   );
// }
// export default Cardcomp;
