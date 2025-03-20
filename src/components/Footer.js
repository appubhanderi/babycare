import React from 'react';
import '../styles/Footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import packages1 from '../image/galary-1.jpg';
import packages2 from '../image/galary-2.jpg';
import packages3 from '../image/galary-3.jpg';
import packages4 from '../image/galary-4.jpg';
import packages5 from '../image/galary-5.jpg';
import packages6 from '../image/galary-6.jpg';


export default function Footer() {

  const gallery = [
    { img: packages1, link: '/#' },
    { img: packages2, link: '/#' },
    { img: packages3, link: '/#' },
    { img: packages4, link: '/#' },
    { img: packages5, link: '/#' },
    { img: packages6, link: '/#' },
  ];

  return (
    <Container className="footer py-5 wow fadeIn" fluid data-wow-delay="0.1s">
      <Container>
        <Row className="g-5">
          {/* Footer Section 1 */}
          <Col xl={3} lg={4} md={6}>
            <div className="newsletter footer-item">
              <h2 className="fw-bold mb-3">
                <span style={{ color: '#ff488c' }}>Baby</span>
                <span style={{ color: '#4d65f9' }}>Care</span>
              </h2>
              <p className="newsletter-description">
                There cursus massa at urnaaculis estieSed aliquamellus vitae ultrs condmentum leo massamollis its
                estiegittis miristum.
              </p>
              <div className="newsletter-box p-3 rounded">
                <h5 className="newsletter-title mb-3">Newsletter</h5>
                <div className="newsletter-input-box position-relative mx-auto">
                  <input
                    className="newsletter-input form-control border-0 py-3 "
                    type="text"
                    placeholder="Your email"
                  />
                  <button
                    type="button"
                    className="btn btn-primary newsletter-button text-white"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </Col>

          {/* Footer Section 2 */}
          <Col xl={3} lg={4} md={6}>
            <div className="footer-item">
              <div
                className="d-flex flex-column p-4 ps-4"
                style={{ border: '1px solid #ff488c', borderRadius: '50% 20% / 10% 40%' }}
              >
                <p>Monday: 8am to 5pm</p>
                <p>Tuesday: 8am to 5pm</p>
                <p>Wednesday: 8am to 5pm</p>
                <p>Thursday: 8am to 5pm</p>
                <p>Friday: 8am to 5pm</p>
                <p>Saturday: 8am to 5pm</p>
                <p className="mb-0">Sunday: Closed</p>
              </div>
            </div>
          </Col>

          {/* Footer Section 3 */}
          <Col xl={3} lg={4} md={6} className='p-0 ps-2'>
            <div className="footer-item ">
              <h4 className="mb-4 p-2 fs-5">LOCATION</h4>
              <div>
                <div className="mb-4">
                  <FaLocationDot className="me-2 service_icon" />
                  <Link to="#" className='service'>
                    104 North tower New York, USA
                  </Link>
                </div>
                <div className="mb-4">
                  <FaPhoneAlt className="me-2 service_icon" />
                  <Link to="#" className='service'>
                    (+012) 3456 7890 123
                  </Link>
                </div>
                <div className="mb-4">
                  <IoMdMail className="me-2 service_icon" />
                  <Link to="#" className='service'>
                    exampleemail@gmail.com
                  </Link>
                </div>
                <div className="mb-4">
                  <FaClock className="me-2 service_icon" />
                  <Link to="#" className='service'>
                    24/7 Hours Service
                  </Link>
                </div>
                <div className="footer-icon d-flex">
                  <Link className="btn btn-primary btn-sm-square me-3 rounded-circle text-white" to="#">
                    <FaFacebookF />
                  </Link>
                  <Link className="btn btn-primary btn-sm-square me-3 rounded-circle text-white" to="#">
                    <FaTwitter />
                  </Link>
                  <Link className="btn btn-primary btn-sm-square me-3 rounded-circle text-white" to="#">
                    <FaSquareInstagram />
                  </Link>
                  <Link className="btn btn-primary btn-sm-square rounded-circle text-white" to="#">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          {/* Footer Section 4 */}
          <Col xl={3} lg={4} md={6}>
            <div className="footer-item">
              <h4 className="mb-4 p-2 fs-5">OUR GALLERY</h4>
              <div className="row g-3 footer-galary-img">
                {gallery.map((item, index) => (
                  <div key={index} className="col-4 p-0">
                    <Link className="nav-link active footer_dotted_circle" to={item.link}>
                      <img
                        src={item.img}
                        alt={`Gallery ${index + 1}`}
                        className="img-fluid footer_rounded_circle"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}