import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import '../styles/Testimonials.css';
import parent1 from '../image//Our Clint.jpg';
import parent2 from '../image/Our Clint1.jpg';
import parent3 from '../image/Our Clint2.jpg';
import { FaStar, FaQuoteRight } from "react-icons/fa";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            image: parent1,
            feedback: 'This platform has truly changed how I connect with my child’s learning process. Highly recommended!',
            date: 'December 10, 2023',
        },
        {
            name: 'David Smith',
            image: parent2,
            feedback: 'The support team is amazing, and the experience is beyond expectations. My child feels more confident now!',
            date: 'November 25, 2023',
        },
        {
            name: 'Emily Brown',
            image: parent3,
            feedback: 'An excellent initiative that ensures child safety and development. Hats off to the team!',
            date: 'January 5, 2024',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="parents-say pb-md-5 ">
            <Container >
                <Row>
                    <Col>
                        <h4 className="fs-3 Latest_Testimonials">What Parents Say</h4>
                        <h1 className="display-4 Testimonials_Header">
                            Hear from Our Beloved <br /> Parents
                        </h1>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index}>
                                <Card className="testimonial-card mb-4 mx-3">
                                    <div className='d-flex gap-3 pb-3' style={{ borderBottom: "1px solid #ff4880" }}>
                                        <div className="testimonial-img text-center">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="img-fluid testimonial-rounded-circle"
                                            />
                                        </div>
                                        <div>
                                            <h5 className="parent-name">{testimonial.name}</h5>
                                            <p className="testimonial-date">{testimonial.date}</p>
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} style={{ color: "#ff4880" }} />
                                            ))}
                                        </div>
                                        <div>
                                            <FaQuoteRight style={{ color: "#ff4880" }} className='fs-3 ms-3' />
                                        </div>
                                    </div>
                                    <Card.Body className="text-center">
                                        <Card.Text className="testimonial-feedback">
                                            "{testimonial.feedback}"
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </Slider>
                </Row>
            </Container>
        </div>
    )
}
