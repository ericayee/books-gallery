import React from "react"
import { Link } from "gatsby"
import {Helmet} from "react-helmet";
import {favicon} from "../../static/ey.png"
// const ListLink = props => (
//   <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//     <Link to={props.to}>{props.children}</Link>
//   </li>
// )

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem` }}>
      <Helmet
        title="My book recommendations"
        link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
        ]}
      />
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline`, fontSize: `2em` }}>My book recommendations</h3>
        </Link>
        {/* <ul style={{ listStyle: `none`, margin: `1em 0`, fontSize: `1em` }}>
          <ListLink to="/">Gallery</ListLink>
          <ListLink to="/about/">About</ListLink>
        </ul> */}
      </header>
      {children}
    </div>
  )
}