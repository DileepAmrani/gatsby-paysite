import React from "react"
import {
  Navbar,
  Nav,
  DropdownButton,
  Dropdown,
  Button,
  Image,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap"
import "./topbar.css"
export default function TopBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg" style={{borderBottom: "1px solid #e3dddc"}}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Company" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Partners</Nav.Link>
            <Nav.Link href="#home">Blog</Nav.Link>
            <Nav.Link href="#home">Request Demo</Nav.Link>
            <Nav.Link href="#home">Support</Nav.Link>
            <Nav.Link href="#home">Log in</Nav.Link>
            <Nav.Link href="#home">Contact Us</Nav.Link>
            <NavDropdown title="English (US)" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
