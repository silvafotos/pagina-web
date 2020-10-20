import React from "react"
import PhotoCard from "../components/PhotoCard"
import galleryData from "../../data/gallery.json"
import { Row } from "react-bootstrap"

export default () => {
  console.log("data is: ", galleryData)
  return (
    <main id="gallery">
        <Row noGutters>
          {galleryData.map((category, index) => (
            <PhotoCard
              key={`photo-${index}`}
              thumbnail={category.thumbnail}
              title={category.title}
            />
          ))}
        </Row>
      
    </main>
  )
}
