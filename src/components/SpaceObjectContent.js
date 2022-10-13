import React from "react";
import {
  Container,
  Row,
  Col
} from "reactstrap";

const SpaceObjectContent = (props) => {
  return (
    <div className="section section-signup">
      <Container>
        <div className="squares square-1" />
        <div className="squares square-2" />
        <div className="squares square-3" />
        <div className="squares square-4" />

        <Row className="row-grid justify-content-between align-items-md-center">
          <Col lg="6">
            <h3 className="display-3 text-white">
              {props.header}
            </h3>
            <p className="text-white mb-3">
              {props.description}
            </p>
          </Col>
          <Col className="mb-lg-auto" lg="6">
            {props.children}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SpaceObjectContent;
