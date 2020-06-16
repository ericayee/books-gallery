import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"

export default function About() {
  return (
    <Layout style={{ color: `teal` }}>
      <h3>About the project</h3>
      <p>This is a collection of Instagram posts I designed for a series of book recommendations on my personal account. Feel free to browse the gallery.</p>
      <p>If you decide to check out a book, I encourage you to support your local library and/or independent bookstore if possible!</p>
      <Footer />
    </Layout>
  )
}