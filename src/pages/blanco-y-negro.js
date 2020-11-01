import React from "react"
import Layout from "../components/Layout"
import galleryData from "../../data/gallery.json"
import { Card, Col, Row } from "react-bootstrap"
import Category from "../components/Category"

export default () => {
  return (
    <Layout title="Retratos">
      <main id="gallery">
        <Row noGutters>
          <Col xs="12" className="fadein d-flex ">
            <Card className="flex-fill ">
              <article>
                <Card.Body className="p-0">
                  <Card.Text className="p-0 m-0 text-center">
                    <img className="w-100 " src="/full/blanco-y-negro/01.jpg" alt="" title="" />
                  </Card.Text>
                </Card.Body>
              </article>
            </Card>
          </Col>
        </Row>
        <Row noGutters>
          {galleryData[3].images.map((category, index) => {
            return (
              <Category
                key={`photo-${index}`}
                portrait={true}
                thumbnail={category.thumbnail}
                title={category.title}
              />
            )
          })}
        </Row>
      </main>
    </Layout>
  )
}
