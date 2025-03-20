import React, { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/Events.css';
import { Card, Col, Container, Row, Modal, Button } from 'react-bootstrap';
import Background from '../components/Background';
import { FaCalendar, FaSearchPlus } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import event1 from '../image/event-1.jpg';
import event2 from '../image/event-2.jpg';
import event3 from '../image/event-3.jpg';

const Events = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open modal
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  // Function to close modal
  const handleClose = () => setShowModal(false);

  const EventsData = [
    {
      id: 1,
      image: event1,
      date: '10:00AM - 12:00PM',
      month: '15 March 2025',
      location: 'New York City, NY',
      title: 'Music & Drawing Workshop',
      description: 'Join us for an exciting music and art workshop where kids can explore their creativity with expert guidance.',
    },
    {
      id: 2,
      image: event2,
      date: '02:00PM - 04:00PM',
      month: '20 March 2025',
      location: 'Los Angeles',
      title: 'Why need study',
      description: 'A session that explores the significance of education in shaping young minds and creating a better future.',
    },
    {
      id: 3,
      image: event3,
      date: '11:00AM - 01:00PM',
      month: '25 March 2025',
      location: 'San Francisco',
      title: 'Child health consciousness',
      description: 'An engaging science workshop where kids can explore fun experiments and learn about science in an exciting way.',
    },
  ];

  return (
    <Layout>
      <Background>
        <h1 className='display-3 fw-bold text-center'>Our Events</h1>
      </Background>

      <Container className='py-lg-5 py-md-4 py-3'>
        <Row className="text-center">
          <Col>
            <h4 className="Events_Title mb-4">Our Events</h4>
            <h1 className="display-4 Events_Header">Join Our Exciting Events</h1>
          </Col>
        </Row>

        <Row className="text-center pt-5 g-4">
          {EventsData.map((event) => (
            <Col md={4} key={event.id}>
              <Card className="Events_Card mb-4 shadow-lg border-0">
                <div className="Events_card_image overflow-hidden position-relative">
                  <Card.Img src={event.image} alt={event.title} />
                  <div className="Events_Card_month">{event.month}</div>
                  {/* Search Icon */}
                  <FaSearchPlus className='search' onClick={() => handleImageClick(event.image)} />
                </div>
                <Card.Body className="Events_card_content1">
                  <div className="d-flex justify-content-between Events_card_content">
                    <small className="text-muted">
                      <FaCalendar style={{ color: '#ff4880' }} className="me-1" /> {event.date}
                    </small>
                    <small className="text-muted">
                      <FaLocationDot style={{ color: '#ff4880' }} className="me-1" /> {event.location}
                    </small>
                  </div>
                  <Card.Title className="mt-3 Events_Card_title">{event.title}</Card.Title>
                  <Card.Text className="text-muted Events_Card_description">{event.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for Full Image Preview */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body className="p-0">
          <img src={selectedImage} alt="Event Full View" className="img-fluid w-100" />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="danger" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default Events;
