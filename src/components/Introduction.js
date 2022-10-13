import React from "react";
import { Container, Row, Col } from "reactstrap";

const Introduction = () => {
  return (
    <div
      className="section section-download"
      data-background-color="black"
      id="introduction"
    >
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h2 className="title">
              Fascinating universe
            </h2>
            <h4 className="description">
              The universe is more than just stars, dust, and empty space.
              Explore some of the objects that make up our universe, from comet to black holes.
            </h4>
          </Col>
          {/*<Col className="text-center" lg="8" md="12">
            <Button
              className="btn-round"
              color="info"
              href="https://www.creative-tim.com/product/blk-design-system-react?ref=blkdsr-index-page-download-section"
              role="button"
              size="lg"
            >
              Download React
            </Button>
          </Col>*/}
        </Row>

      </Container>
    </div>
  );
}

export default Introduction;