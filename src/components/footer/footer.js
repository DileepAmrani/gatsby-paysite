import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import Logo from "./../../assets/logo.png"
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGooglePlusG,
} from "react-icons/fa"
import "./footer.css"
export default function Footer() {
  return (
    <div className="_footer">
      <Container>
        <Row>
          <Col lg={2}>
            <Image src={Logo} alt="" className="footer_logo" />
            <ul class="footermenu">
              <li>
                <a href="#" className="nav-links">
                  Paysite
                </a>
              </li>
              <li>
                <a href="#" className="nav-links">
                  Paysite
                </a>
              </li>
              <li>
                <a href="#" className="nav-links">
                  Paysite
                </a>
              </li>
              <li>
                <a href="#" className="nav-links">
                  Paysite
                </a>
              </li>
              <li>
                <a href="#" className="nav-links">
                  Paysite
                </a>
              </li>
              <li>
                <a href="#" className="nav-links">
                  Paysite
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={2}>
            <h6>COMPANY</h6>
            <ul class="footermenu">
              <li>
                <a href="#" className="nav-links">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="nav-links">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#" className="nav-links">
                  Board of Directors
                </a>
              </li>
              <li>
                <a href="#" className="nav-links">
                  Investors
                </a>
              </li>
              <li>
                <a href="#" className="nav-links">
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={2}>
            <h6>PAYSITE</h6>

            <ul class="footermenu">
              <li>
                <a href="#" className="nav-links">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="nav-links">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="nav-links">
                  Apps
                </a>
              </li>
              <li>
                <a href="#" className="nav-links">
                  Customers
                </a>
              </li>

              <li>
                <a href="#" className="nav-links">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="nav-links">
                  Blog
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={2}>
            <h6>TOP FEATURES</h6>
            <ul class="footermenu">
              <li>
                <a href="#" className="nav-links">
                  Ticketing
                </a>
              </li>

              <li>
                <a href="#" className="nav-links">
                  Reporting & Analytics
                </a>
              </li>
              <li>
                <a href="#" className="nav-links">
                  Secure Helpdesk
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={2}>
            <h6>SOLUTIONS</h6>

            <ul class="footermenu">
              <li>
                <a href="#" className="nav-links">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="nav-links">
                  SMB
                </a>
              </li>
              <li>
                <a href="#" className="nav-links">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#" className="nav-links">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="nav-links">
                  Education
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={2}>
            <h6>MOBILE APPS</h6>
            <br />
            <br />
            <h6>CONNECT WITH US</h6>
            <FaLinkedinIn size={25} className="social_icons" />
            <FaFacebookF size={25} className="social_icons" />
            <FaTwitter size={25} className="social_icons" />
            <br /> <FaYoutube size={25} className="social_icons" />
            <FaGooglePlusG size={25} className="social_icons" />
          </Col>
        </Row>
      </Container>

      <div className="sub_footer">
        <Container>
          <Row>
            <Col>
              <a href="#" className="nav-links">
                Terms of Service
              </a>
              &nbsp; - &nbsp;
              <a href="#" className="nav-links">
                Privacy Notice
              </a>
              &nbsp; - &nbsp;
              <a href="#" className="nav-links">
                Takedown Policy
              </a>
              &nbsp; - &nbsp;
              <a href="#" className="nav-links">
                GDPR
              </a>{" "}
              &nbsp;- &nbsp;
              <a href="#" className="nav-links">
                Security
              </a>
            </Col>
            <Col style={{ textAlign: "right"}}>
              <a href="#" className="nav-links">
                Copyright © Paysite LTD. All Rights Reserved
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
