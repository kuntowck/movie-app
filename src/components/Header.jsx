import { Button, Col, Container, Row } from "react-bootstrap";

export default function Header() {
  return (
    <div className="header d-flex">
      <Container className="text-white text-center d-flex justify-content-center align-items-end">
        <Row>
          <Col>
            <div className="title">WELCOME!</div>
            <div className="mt-3 ">
              <Button variant="dark">See Details</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
