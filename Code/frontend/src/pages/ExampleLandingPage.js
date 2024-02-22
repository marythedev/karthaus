import React from "react";
import { Container, Navbar, Nav, Card, Button, Badge, Tab, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS
import "./ExampleLandingPage.css"; // Assuming you have custom styles in this file

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">E-Commerce Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Products</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
      <h3>Welcome to our store!</h3>
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Product Category 1">
            
            <div className="product-grid d-flex">
              <Card className="card">
                <Card.Img className="card-img-top" variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title className="card-title">Product 1</Card.Title>
                  <Card.Text className="card-text">Descriptions.......</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <Card.Text className="card-price">Price: $19.99</Card.Text>
                    </div>
                    <Badge bg="danger">Sale</Badge>
                  </div>
                  <Button className="card-button" variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "12rem", marginRight: "10px" }}>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Product 2</Card.Title>
                  <Card.Text>Descriptions.......</Card.Text>
                  <Card.Text>Price: $29.99</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "12rem", marginRight: "10px" }}>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Product 3</Card.Title>
                  <Card.Text>Descriptions.......</Card.Text>
                  <Card.Text>Price: $39.99</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "12rem", marginRight: "10px" }}>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Product 4</Card.Title>
                  <Card.Text>Descriptions.......</Card.Text>
                  <Card.Text>Price: $49.99</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "12rem" }}>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Product 5</Card.Title>
                  <Card.Text>Descriptions.......</Card.Text>
                  <Card.Text>Price: $59.99</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </div>
          </Tab>
          <Tab eventKey="products" title="Product Category 2 ">
            <div className="product-grid d-flex">
              

              

              <Card style={{ width: "12rem", marginRight: "10px" }}>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Product 4</Card.Title>
                  <Card.Text>Descriptions.......</Card.Text>
                  <Card.Text>Price: $49.99</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "12rem" }}>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Product 5</Card.Title>
                  <Card.Text>Descriptions.......</Card.Text>
                  <Card.Text>Price: $59.99</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </div>
          </Tab>
          <Tab eventKey="about" title="Product Category 3">
          <div className="product-grid d-flex">
              <Card className="card">
                <Card.Img className="card-img-top" variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title className="card-title">Product 1</Card.Title>
                  <Card.Text className="card-text">Descriptions.......</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <Card.Text className="card-price">Price: $19.99</Card.Text>
                    </div>
                    <Badge bg="danger">Sale</Badge>
                  </div>
                  <Button className="card-button" variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </div>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default LandingPage;
