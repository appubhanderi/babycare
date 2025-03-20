import React from 'react';
import '../styles/About.css';
import Layout from '../components/Layout';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCircleCheck } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import Aboutimg from '../image/about.jpg';
import Button from '../components/Button';
import Background from '../components/Background';

export default function About() {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };
  return (
    <Layout>
      <Background >
        <h1 className='display-3' style={{ fontWeight: '700' }}>About Us</h1>
      </Background>
      <div className="AboutBg">
        <Container className="py-lg-5 py-md-4 py-3 pb-3">
          <Row className="">
            <Col lg={5} md={6} className='pt-md-5 pb-5'>
              <div className="position-relative pt-5">
                <img src={Aboutimg} alt="About" width={'100%'} style={{ borderRadius: '50% 20% / 10% 40%' }} className='' />
                <button
                  type="button"
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-bs-target="#videoModal"
                >
                  <FaPlay />
                </button>
              </div>

            </Col>
            <Col lg={7} md={6 }>
              <h4 className="About_Title mb-4">About Us</h4>
              <h1 className="About_Header display-6 mb-4">We Learn Smart Way To Build Bright Future For Your Children</h1>
              <p className='mb-4' style={{ color: '#393d72 ' }}>
                At BabyCare, we believe that every child deserves a safe, loving,
                and nurturing environment to grow and thrive. Our mission is
                to provide high-quality childcare that fosters emotional, social,
                and cognitive development from an early age. With a team of experienced
                caregivers and educators, we ensure that your little one receives
                the best possible care in a warm and engaging atmosphere
              </p>
              <div className="row mb-4" style={{ color: '#393d72 ' }}>
                <div className="col-lg-6">
                  <h6 className="mb-3"><FaCircleCheck /> Sport Activities</h6>
                  <h6 className="mb-3"><FaCircleCheck style={{ color: '#ff4880  ' }} /> Outdoor Games</h6>
                  <h6 className="mb-3"><FaCircleCheck style={{ color: '#4d65f9   ' }} /> Nutritious Foods</h6>
                </div>
                <div className="col-lg-6">
                  <h6 className="mb-3"><FaCircleCheck /> Highly Secured</h6>
                  <h6 className="mb-3"><FaCircleCheck style={{ color: '#ff4880  ' }} /> Friendly Environment</h6>
                  <h6 className=""><FaCircleCheck style={{ color: '#4d65f9   ' }} /> Qualified Teacher</h6>
                </div>
              </div>
              <Button
                label="More Details"
                onClick={handleButtonClick}
                variant="primary"
                size="lg"
                className="btn-custom"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}
