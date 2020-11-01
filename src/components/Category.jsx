import React from "react"
import { Link } from "gatsby"
import { Card, Col } from "react-bootstrap"

export default ({ link, thumbnail, title, portrait }) => {
  const containerClass = portrait ? "portrait" : "thumbnail"
  const toRender =
    link != null ? (
      <Link to={link}>
        <img src={thumbnail} alt={title} title={title} />
      </Link>
    ) : (
      <img src={thumbnail} alt={title} title={title} />
    )
  return (
    <Col
      xs="12"
      sm="12"
      md="6"
      lg="4"
      xl="4"
      className={`fadein d-flex ${containerClass}`}
    >
      <Card className="flex-fill ">
        <article>
          <Card.Body className="p-0">
            <Card.Text className="p-0 m-0">{toRender}</Card.Text>
            <h2>{title}</h2>
          </Card.Body>
        </article>
      </Card>
    </Col>
  )
}
