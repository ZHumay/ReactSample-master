import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { Col, Container, Row, } from 'reactstrap'

function Layout({children}) {
  return (
    <>
     <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">users</Link>
          </li>
         
        </ul>
      </nav>
      <Container>
        {children}
      </Container>

      <Outlet />
    </>
  )
}

export default Layout