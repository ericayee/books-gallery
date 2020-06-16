import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import PhotoGallery from "../components/gallery"


export default function Home() {
  return (
    <Layout>
      <PhotoGallery />
      <Footer />
    </Layout>
  )
}