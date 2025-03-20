import React from 'react';
import Layout from '../components/Layout';
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/Home.css';
import Button from '../components/Button';
import Blog from './Blog';
import Testimonials from './Testimonials';
import OurTeam from './OurTeam';

export default function Home() {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <Layout>
      <div className='home_bc pt-4 pb-4'>
        <Container className=" py-lg-5 py-md-4 py-3 ">
          <Row className="justify-content-start">
            <Col md={8}>
              {/* Page Heading */}
              <div className="mb-4">
                <h1 className="display-6 We_Care">We Care Your Baby</h1>
                <h2 className="display-2 the_best">The Best Play Area <br /> For Your Kids</h2>
              </div>
              {/* Buttons */}
              <div className="d-flex justify-content-start gap-3">
                <Button
                  label="Get Started"
                  onClick={handleButtonClick}
                  variant="primary"
                  size="lg"
                  className="btn-custom"
                />
                <Button
                  label="Learn More"
                  onClick={handleButtonClick}
                  variant="primary"
                  size="lg"
                  className="btn-custom"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Blog />
      <Testimonials />
      <OurTeam />
    </Layout>
  );
}
