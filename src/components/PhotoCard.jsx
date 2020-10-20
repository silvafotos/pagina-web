import React from "react"
import { Card, Col } from "react-bootstrap"

export default ({ thumbnail, title }) => (
  <Col xs="12" sm="12" md="6" xl="3" className="d-flex">
    <Card className="flex-fill thumbnail">
      <article>
        <Card.Body className="p-0">
          <Card.Text>
            <img src={thumbnail} alt={title} title={title}/>
          </Card.Text>
          <h2>{title}</h2>
        </Card.Body>
      </article>
    </Card>
  </Col>

  // <article className="thumb">
  //   <a href={'#'} className="image">
  //     <img src={thumbnail} alt={title} />
  //   </a>
  //   <h2>{title}</h2>
  // </article>
)
