import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import { TopBar, Navbar, Footer } from "./../components/index"
import { Container, Button, Image, Row, Col } from "react-bootstrap"
import HomePageBanner from "./../assets/home-banner-image.svg"
import {
  Vitafoam,
  Inlinks,
  Fadias,
  CheckMarkIcon,
  IsoImage1,
  IsoImage2,
} from "./../assets/index"
export default function Home() {
  return (
    <div>
      {/* TOP Bar */}
      <div className="_top_bar"> 

      <TopBar />
      </div>
      {/* Navbar Bar */}
      <Navbar />
      {/* HOME Section */}
      <div className="home_page_main_section">
        <Container>
          <Row>
            <Col lg={7}>
              <div className="heading_box">
                <br />
                <br />
                <span className="main_heading_text">
                  Intuitive, feature-rich, affordable customer support payment
                  gateway
                </span>
              </div>
              <br />
              <Button
                style={{ backgroundColor: "#556589", borderColor: "#556589" }}
              >
                SIGN UP FOR FREE
              </Button>
              <br />
              <br />
              <br />

              <span className="_text">
                Several <b>businesses</b> trust us.
              </span>
              <br />
              <Row>
                <Image src={Vitafoam} className="companys_logo" />
                <Image src={Inlinks} className="companys_logo" />
                <Image src={Fadias} className="companys_logo" />
              </Row>
              <br />
              <br />
              <br />
              <div className="heading_box">
                <span className="main_heading_text">
                  With Paysite, you can?
                </span>
              </div>

              <span className="_answers">
                <Image width="23px" src={CheckMarkIcon} /> <b>Run </b>a plug and
                play ecommerce store
              </span>
              <span className="_answers">
                <Image width="23px" src={CheckMarkIcon} /> <b>Accept </b>all
                card payments via Visa, MasterCard and Verve
              </span>
              <span className="_answers">
                <Image width="23px" src={CheckMarkIcon} /> <b>Receive</b> world
                class customer support and reporting...See all features
              </span>
              <br />
              <br />
              <br />
            </Col>
            <Col lg={5}>
              <Image
                src={HomePageBanner}
                alt="Home Page Banner"
                className="home_banner"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="second_section">
        <Container>
          <span className="main_heading_text" style={{ fontSize: "44px" }}>
            So, what brings you here today?
          </span>
          <br />
          <br />
          <Row>
            <Col>
              <div className="_card">
                <Image src={IsoImage1} alt="" />
                <span
                  className="main_heading_text"
                  style={{ fontSize: "37px" }}
                >
                  I want an ecommerce store
                </span>
                <br />
                <Button
                  style={{ backgroundColor: "#556589", borderColor: "#556589" }}
                >
                  START MY STORE
                </Button>
              </div>
            </Col>
            <Col>
              <div className="_card">
                <Image src={IsoImage2} alt="" />
                <span
                  className="main_heading_text"
                  style={{ fontSize: "37px", lineHeight: "40px" }}
                >
                  I want to recieve one off payments
                </span>
                <br />
                <Button
                  style={{ backgroundColor: "#556589", borderColor: "#556589" }}
                >
                  START MY STORE
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="third_section">
        <Container>
          <span className="main_heading_text" style={{ fontSize: "44px" }}>
            Here is why our clients love us
          </span>
          <span className="main_heading_text" style={{ fontSize: "23.8px" }}>
            Start your free trial. No credit card required. No strings attached.
          </span>
          <br />

          <Button
            style={{ backgroundColor: "#556589", borderColor: "#556589" }}
          >
            SIGN UP FOR FREE
          </Button>
        </Container>
      </div>

      <div className="fourth_section">
        <Container>
          <span className="main_heading_text" style={{ fontSize: "44px" }}>
            Try us. You will love the Paysite experience.
          </span>
          <span className="main_heading_text" style={{ fontSize: "13.6px" }}>
            Start your free trial. No credit card required. No strings attached.
          </span>
          <br />

          <Button
            style={{ backgroundColor: "#556589", borderColor: "#556589" }}
          >
            SIGN UP FOR FREE
          </Button>
        </Container>
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  )
}
