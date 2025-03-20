import React from 'react';
import '../styles/Services.css';
import Layout from '../components/Layout';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { FaGamepad, FaSortAlphaDown, FaUsers, FaUserNurse } from "react-icons/fa";
import Background from '../components/Background';

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <FaGamepad />,
      title: "Study & Game",
      description: " Engaging learning with games, boosting creativity, problem-solving, and teamwork in a fun way."
    },
    {
      id: 2,
      icon: <FaSortAlphaDown />,
      title: "Creative Activities",
      description: "Spark imagination with art, music, and storytelling, helping kids express themselves joyfully."
    },
    {
      id: 3,
      icon: <FaUsers />,
      title: "Outdoor Fun",
      description: "Exciting outdoor activities promoting fitness, teamwork, and adventure in a safe environment."
    },
    {
      id: 4,
      icon: <FaUserNurse />,
      title: "Qualified Teachers",
      description: "Skilled educators providing guidance, nurturing curiosity, and ensuring a supportive learning journey."
    }
  ];

  const handleButtonClick = () => {
    alert("More details coming soon!");
  };

  return (
    <Layout>
      <Background>
        <h1 className='display-3 fw-bold text-center'>Services</h1>
      </Background>

      <div className="">
        <Container className="py-lg-5 py-md-4 py-3">
          <Row className="text-center ">
            <Col className=''>
              <h4 className="Services_Title mb-4 m-auto">What We Do</h4>
              <h1 className="Services_Header display-4 mb-4">Thanks To Get Started<br /> With Our School</h1>
            </Col>
          </Row>

          <Row className="g-3">
            {services.map((service) => (
              <Col key={service.id} md={6} lg={3}>
                <div className="Services_Card text-center p-4 ">
                  <div className="display-1 icon mb-3">{service.icon}</div>
                  <h4 className='Services_Card_Title' style={{ color: '#393d72' }}>{service.title}</h4>
                  <p className="my-3 Services_Card_description" style={{ color: '#70747f' }}>{service.description}</p>

                  <Button
                    onClick={handleButtonClick}
                    variant="primary"
                    size="lg"
                    className="btn-custom Services_Card_btn"
                  >
                    Read More
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
