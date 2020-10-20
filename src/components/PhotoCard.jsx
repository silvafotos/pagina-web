import React from "react"
import { Card, Col } from "react-bootstrap"

export default ({ thumbnail, title }) => (
  <Col xs="12" sm="12" md="6" xl="3" className="d-flex thumbnail">
    <Card className="flex-fill ">
      <article>
        <Card.Body className="p-0">
          <Card.Text className="p-0 m-0">
            <img src={thumbnail} alt={title} title={title}/>
          </Card.Text>
          <h2>{title}</h2>
        </Card.Body>
      </article>
    </Card>
  </Col>
)
