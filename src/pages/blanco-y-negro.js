import React from "react"
import Layout from "../components/Layout"
import galleryData from "../../data/gallery.json"
import { Card, Col, Row } from "react-bootstrap"
import Category from "../components/Category"

export default () => {
  return (
    <Layout title="Blanco y Negro">
      <main id="gallery">
        <Row noGutters>
          <Col
            xs="12"
            sm="12"
            md="6"
            xl="3"
            className={`fadein d-flex `}
          >
            <Card className="flex-fill ">
              <article>
                <Card.Body className="p-0">
                  <Card.Text className="p-0 m-0">
                  <img src={galleryData[6].images[0].thumbnail} alt={galleryData[6].images[0].title} title={galleryData[6].images[0].title} />
                  </Card.Text>
                  <h2>{galleryData[6].images[0].title}</h2>
                </Card.Body>
              </article>
            </Card>
          </Col>
          )
          {/* {galleryData[6].images.map((category, index) => {
            return (
              <Category
                key={`photo-${index}`}
                portrait={false}
                thumbnail={category.thumbnail}
                title={category.title}
              />
            )
          })} */}
        </Row>
      </main>
    </Layout>
  )
}
