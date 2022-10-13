import React from "react";
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

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
              Do you love this Bootstrap 4 React Design System?
            </h2>
            <h4 className="description">
              Cause if you do, it can be yours for FREE. Hit the button below to
              navigate to Creative Tim where you can find the design system in
              React format. Start a new project or give an old Bootstrap project
              a new look!
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