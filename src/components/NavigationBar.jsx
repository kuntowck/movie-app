import { search } from "../api";
import { Navbar, Nav, Container, Form, Row, Col } from "react-bootstrap";

export default function NavigationBar({ setMovies }) {
  const searchMovie = async (request) => {
    if (request.length > 3) {
      const query = await search(request);
      setMovies(query.results);
    }
  };

  return (
    <Navbar variant="dark">
      <Container className="text-white">
        <Navbar.Brand>Movies</Navbar.Brand>
        <Nav>
          <Form>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search movies..."
                  className=" mr-sm-2"
                  onChange={({ target }) => searchMovie(target.value)}
                />
              </Col>
            </Row>
          </Form>
        </Nav>
      </Container>
    </Navbar>
  );
}
