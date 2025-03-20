import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import packages1 from '../image/blog-1.jpg';
import packages2 from '../image/blog-2.jpg';
import packages3 from '../image/blog-3.jpg';
import packages4 from '../image/program-teacher.jpg';
import { FaCalendar } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import '../styles/Blog.css';

export default function Blog() {
    const handleButtonClick = () => {
        console.log('Button clicked!');
    };

    const blogData = [
        {
            image: packages1,
            authorImage: packages4,
            date: '29 Nov 2023',
            comments: 'Comments (15)',
            author: 'Mary Mordern',
            category: 'Baby Care',
            title: 'How to pay attention to your child?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus',
        },
        {
            image: packages2,
            authorImage: packages4,
            date: '15 Dec 2023',
            comments: 'Comments (20)',
            author: 'John Smith',
            category: 'Parenting Tips',
            title: 'Building a strong bond with your child',
            description: 'Aenean euismod elementum nisi, quis eleifend quam adipiscing vitae proin.',
        },
        {
            image: packages3,
            authorImage: packages4,
            date: '10 Jan 2024',
            comments: 'Comments (10)',
            author: 'Emily Rose',
            category: 'Health & Wellness',
            title: 'Tips to ensure your child’s safety',
            description: 'Suspendisse in est ante in nibh mauris cursus mattis molestie a.',
        },
    ];

    return (
        <div className="blog">
            <Container>
                <Row>
                    <Col>
                        <h4 className="fs-3 Blog_Title">Latest News & Blog</h4>
                        <h1 className="display-4 Blog_Header">Read Our Latest <br /> News & Blog</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    {blogData.map((blog, index) => (
                        <Col md={4} key={index}>
                            <Card className="blog_Card mb-4">
                                <div className="blog_img overflow-hidden position-relative">
                                    <Card.Img
                                        variant="top"
                                        src={blog.image}
                                        className="img-fluid  blog_img_hover"
                                        alt="Blog"
                                    />
                                </div>
                                <div
                                    className="d-flex justify-content-between px-4 py-3 border-bottom blog-date-comments"
                                    style={{ color: '#393d72' }}
                                >
                                    <small>
                                        <FaCalendar /> {blog.date}
                                    </small>
                                    <small>
                                        <FaCommentAlt /> {blog.comments}
                                    </small>
                                </div>
                                <div className="blog_content d-flex align-items-center px-4 py-3">
                                    <div className="overflow-hidden blog_rounded_circle">
                                        <img
                                            src={blog.authorImage}
                                            className="img-fluid p-2"
                                            alt="Author"
                                            style={{
                                                width: '70px',
                                                height: '70px',
                                            }}
                                        />
                                    </div>
                                    <div className="ms-3">
                                        <h6 style={{ color: '#ff4880' }}>{blog.author}</h6>
                                        <p style={{ color: '#6c757d' }}>{blog.category}</p>
                                    </div>
                                </div>
                                <Card.Body className="px-4 pb-4">
                                    <Card.Title>
                                        <a href="#" className="h4 blog_card_title">
                                            {blog.title}
                                        </a>
                                    </Card.Title>
                                    <Card.Text
                                        className="mt-3 mb-4"
                                        style={{ color: '#6c757d' }}
                                    >
                                        {blog.description}
                                    </Card.Text>
                                    <div className="text-center">
                                        <Button
                                            variant="primary"
                                            size="lg"
                                            className="btn-custom"
                                            onClick={handleButtonClick}
                                        >
                                            View Details
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
