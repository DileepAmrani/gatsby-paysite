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
import Logo from "./../../assets/logo.png"
import "./Navbar.css"
export default function NavigationBar() {
  return (
    <div>
      <Navbar bg="" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Image src={Logo} alt="" className="logo"/>
            <NavDropdown title="PRODUCT" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">PRICING</Nav.Link>
            <NavDropdown title="SUPPORT" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="DEVELOPER" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="ABOUT" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="SECURITY" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <Button variant="outline-secondary">SIGNUP</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
