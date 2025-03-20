import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/OurTeam.css';
import team1 from '../image/team-1.jpg';
import team2 from '../image/team-2.jpg';
import team3 from '../image/team-3.jpg';
import team4 from '../image/team-4.jpg';
import { FaShareAlt, FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const teamMembers = [
    { id: 1, name: 'Linda Carlson', role: 'English Teacher', img: team1 },
    { id: 2, name: 'John Doe', role: 'Math Teacher', img: team2 },
    { id: 3, name: 'Sarah Smith', role: 'Science Teacher', img: team3 },
    { id: 4, name: 'Michael Brown', role: 'History Teacher', img: team4 },
];

export default function OurTeam() {
    return (
        <div className="Our_team">
            <Container>
                <Row>
                    <Col>
                        <h4 className="fs-3 OurTeam">Our Team</h4>
                        <h1 className="display-4 OurTeam_Header">
                            Meet With Our<br /> Expert Teacher
                        </h1>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5 pb-5">
                    {teamMembers.map(member => (
                        <Col key={member.id} md={6} lg={4} xl={3} className="fade-in mb-3">
                            <div className="OurTeam_card">
                                <img src={member.img} className="img-fluid w-100" alt={member.name} />
                                <div className="team-icon d-flex align-items-center justify-content-center">
                                    <Link to="#" className="share-icon"><FaShareAlt /></Link>
                                    <Link to="https://www.facebook.com" className="social-icon"><FaFacebookF /></Link>
                                    <Link to="https://www.twitter.com" className="social-icon"><FaTwitter /></Link>
                                    <Link to="https://www.instagram.com" className="social-icon"><FaInstagramSquare /></Link>
                                </div>
                                <div className="team-content text-center py-3">
                                    <h4 className="member_name">{member.name}</h4>
                                    <p className="mb-2 member_role">{member.role}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
