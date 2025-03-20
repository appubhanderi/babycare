import React from 'react';
import '../styles/Programs.css';
import Layout from '../components/Layout';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Background from '../components/Background';
import Button from '../components/Button';
import team1 from '../image/program-1.jpg';
import team2 from '../image/program-2.jpg';
import team3 from '../image/program-3.jpg';
import team4 from '../image/program-teacher.jpg';
import team5 from '../image/program-teacher.jpg';
import team6 from '../image/program-teacher.jpg';
import { FaWheelchair, FaClock } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";

export default function Programs() {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  const programs = [
    {
      id: 1,
      image: team1,
      price: "$60.99",
      title: "English For Today",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur.",
      authorImg: team4,
      authorName: "Mary Mordern",
      designation: "Arts Designer"
    },
    {
      id: 2,
      image: team2,
      price: "$45.50",
      title: "Graphics Arts",
      description: "Enhance your writing skills with interactive lessons and practical exercises.",
      authorImg: team5,
      authorName: "John Doe",
      designation: "English Instructor"
    },
    {
      id: 3,
      image: team3,
      price: "$50.75",
      title: "General Science",
      description: "Art Teacher General Science Explore creativity with  engaging painting and craft sessions.",
      authorImg: team6,
      authorName: "Sophie Williams",
      designation: "Art Teacher"
    }
  ];

  return (
    <Layout>
      <Background>
        <h1 className='display-3 fw-bold text-center'>Programs</h1>
      </Background>

      <Container className="py-lg-5 py-md-4 py-3">
        <Row className="text-center">
          <Col>
            <h4 className="Programs_Title mb-4">Our Programs</h4>
            <h1 className="Programs_Header display-4 mb-4">
              We Offer An Exclusive <br /> Program For Kids
            </h1>
          </Col>
        </Row>

        <Row className="pt-5 g-3 justify-content-center">
          {programs.map((program) => (
            <Col key={program.id} md={6} lg={4}>
              <Card className="Programs_card">
                <div className="Programs_card_image position-relative">
                  <Card.Img src={program.image} alt={program.title} />
                  <div className="Programs_price">{program.price}</div>
                </div>
                <Card.Body className="Programs_card_content">
                  <a href="#" className="h4 Programs_card_title">
                    {program.title}
                  </a>
                  <p className='Programs_card_designation'>{program.description}</p>
                  <div className="Programs_card_author">
                    <img src={program.authorImg} alt={program.authorName} />
                    <div>
                      <p className="Programs_card_name">{program.authorName}</p>
                      <p className="Programs_card_designation">{program.designation}</p>
                    </div>
                  </div>
                </Card.Body>
                <div class="Programs_card_pogram d-flex justify-content-around text-center p-2  rounded-bottom">
                  <small class="text-white"><FaWheelchair /> 30 Sits</small>
                  <small class="text-white"><FaBook /> 11 Lessons</small>
                  <small class="text-white"><FaClock /> 60 Hours</small>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <Button
            label="View All Programs"
            onClick={handleButtonClick}
            variant="primary"
            size="lg"
            className="btn-custom"
          />
        </div>
      </Container>
    </Layout>
  );
}
