import { Card, Col, Container, Row } from "react-bootstrap";

export default function MovieList({ movies }) {
  return (
    <>
      <Container>
        <Row>
          {movies.map((movie, i) => (
            <Col key={i} md={3} className="my-3">
              <Card className="text-center">
                <Card.Img
                  variant="top"
                  src={`${import.meta.env.VITE_BASEIMGURL}${movie.poster_path}`}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.release_date}</Card.Text>
                  <Card.Subtitle>{movie.vote_average}</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      ;
    </>
  );
}
