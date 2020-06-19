import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import PhotoGallery from "../components/gallery"


export default function Home() {
  return (
    <Layout>
      <p>This is a collection of Instagram posts I designed for a series of book recommendations on my personal account. Feel free to browse the gallery.</p>
      <p>If you decide to check out a book, I encourage you to support your local library and/or independent bookstore if possible!</p>
      <PhotoGallery />
      <Footer />
    </Layout>
  )
}