import React from "react";
import BgIcon from "../../assets/images/footer-bg-icon.png";
import Logo from "../../assets/images/footer-logo.svg";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./footer.css";
import { ENV } from "../../config/config";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="home-footer">
        <div className="bg-icon">
          <img src={BgIcon} alt="icon" />
        </div>
        <Container>
          <Row>
            <Col lg={3} className='mb-2 mb-md-4'>
              <strong className='mb-2 d-block'>
                <img className='img-fluid' src={Logo} alt='logo' />
              </strong>
              <span className="d-block mb-3">© All Rights Reserved 2023</span>
              <div className="social-media-icons">
                <ul className="list-unstyled d-flex">
                  <li>
                    <a className="socialMedia-icon-holder me-2">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li>
                    <a className="socialMedia-icon-holder me-2">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li>
                    <a className="socialMedia-icon-holder me-2">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={9}>
              <Row>
                <Col lg={3} md={4} sm={6} className="mb-4">
                  <h3>Products</h3>
                  <ul className="list-unstyled p-0 m-0 footer-links-ul">
                    <li>
                      <Link to="/">API for Developers</Link>
                    </li>
                    <li>
                      <Link to="/">Creative RealityTM Studio</Link>
                    </li>
                    <li>
                      <Link to="/">{ENV?.appName}</Link>
                    </li>
                    <li>
                      <Link to="/">Integrations</Link>
                    </li>
                  </ul>
                </Col>
                <Col lg={3} md={4} sm={6} className='mb-4'>
                    <h3>Technology</h3>
                    <ul className='list-unstyled p-0 m-0 footer-links-ul'>
                      <li><Link to="/">Speaking Portrait</Link></li>
                      <li><Link to="/">Live Portrait</Link></li>
                    </ul>
                  </Col>
                  <Col lg={3} md={4} sm={6} className='mb-4'>
                    <h3>Company</h3>
                    <ul className='list-unstyled p-0 m-0 footer-links-ul'>
                      <li><Link to="/">About</Link></li>
                      <li><Link to="/">Leadership</Link></li>
                      <li><Link to="/">Careers</Link></li>
                      <li><Link to="/">Blog</Link></li>
                      <li><Link to="/">News</Link></li>
                    </ul>
                  </Col>
                  <Col lg={3} md={4} sm={6} className='mb-4'>
                    <h3>Pricing</h3>
                    <ul className='list-unstyled p-0 m-0 footer-links-ul'>
                      <li><Link to="/">API</Link></li>
                      <li><Link to="/">Creative RealityTM Studio</Link></li>
                    </ul>
                  </Col>
               </Row>
              </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};
export default Footer;
