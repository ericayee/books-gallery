import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import { Link } from "gatsby"

export default function FourohFour() {
  return (
    <Layout style={{ color: `teal` }}>
      <h3>Hmm...</h3>
      <p>This probably isn't the page you're looking for</p>
      <p>How about going back to the <Link to="/">gallery</Link>?</p>
      <Footer />
    </Layout>
  )
}