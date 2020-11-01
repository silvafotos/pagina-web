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
          <Col xs="12" md="12" lg="12" xl="6" className="fadein d-flex ">
            <Card className="flex-fill ">
              <article>
                <Card.Body className="p-0">
                  <Card.Text className="p-0 m-0 text-center">
                    <img
                      className="w-100 "
                      src="/full/mascotas/02.jpg"
                      alt=""
                      title=""
                    />
                  </Card.Text>
                </Card.Body>
              </article>
            </Card>
          </Col>
          <Col xs="12" md="12" lg="12" xl="6" className="fadein d-flex ">
            <Card className="flex-fill ">
              <article>
                <Card.Body className="p-0">
                  <Card.Text className="p-0 m-0 text-center">
                    <img
                      className="w-100 "
                      src="/full/mascotas/03.jpg"
                      alt=""
                      title=""
                    />
                  </Card.Text>
                </Card.Body>
              </article>
            </Card>
          </Col>
          <Col xs="12" md="12" md="6" lg="4" xl="4" className="fadein d-flex portrait">
            <Card className="flex-fill ">
              <article>
                <Card.Body className="p-0">
                  <Card.Text className="p-0 m-0 text-center">
                    <img
                      className="w-100 "
                      src="/full/mascotas/01.jpg"
                      alt=""
                      title=""
                    />
                  </Card.Text>
                </Card.Body>
              </article>
            </Card>
          </Col>
        </Row>
      </main>
    </Layout>
  )
}
