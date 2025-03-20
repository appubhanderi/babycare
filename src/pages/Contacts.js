import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Layout from '../components/Layout'
import Background from '../components/Background'
import '../styles/Contacts.css';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contacts() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().min(3, 'નામ ઓછામાં ઓછું 3 અક્ષરોનું હોવું જોઈએ').required('નામ જરૂરી છે'),
            email: Yup.string().email('અમાન્ય ઇમેઇલ એડ્રેસ').required('ઈમેલ જરૂરી છે'),
            message: Yup.string().min(10, 'સંદેશ ઓછામાં ઓછો 10 અક્ષરોનો હોવો જોઈએ').required('સંદેશ જરૂરી છે'),
        }),
        onSubmit: (values) => {
            console.log('Contact Data:', values);
            alert('Message Sent Successfully!');
        },
    });

    return (
        <Layout>
            <Background>
                <h1 className='display-3 fw-bold text-center'>Contact Us</h1>
            </Background>

            <Container className='py-lg-5 py-md-4 py-3'>
                <Row className="text-center">
                    <Col>
                        <h4 className="Contacts_Title mb-4">Contact Us</h4>
                        <h1 className="display-4 Contacts_Header">Contact For Any Query</h1>
                        <p style={{ color: '#70747f' }}>
                            The contact form is currently inactive. Get a functional and working
                            contact form with <br /> Ajax & PHP in a few minutes. Just copy and paste the
                            files, add a little code and you're <br />done. Download Now.
                        </p>
                    </Col>
                </Row>

                <Row className="pt-5 ">
                    <Col md={4}>
                        <div className='d-flex Contacts_box mb-2'>
                            <FaLocationDot style={{ color: '#ff4880' }} className="me-3 fs-1" />
                            <div className='text-start'>
                                <h5 style={{ color: '#393d72' }}>Address</h5>
                                <p style={{ color: '#70747f' }}>D-303,Star Residency</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='d-flex Contacts_box mb-2'>
                            <IoMdMail style={{ color: '#ff4880' }} className="me-3 fs-1" />
                            <div className='text-start'>
                                <h5 style={{ color: '#393d72' }}>Mail Us</h5>
                                <p style={{ color: '#70747f' }}>appu.bhanderi@gmail.com</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='d-flex Contacts_box'>
                            <FaPhoneAlt style={{ color: '#ff4880' }} className="me-3 fs-1" />
                            <div className='text-start'>
                                <h5 style={{ color: '#393d72' }}>Telephone</h5>
                                <p style={{ color: '#70747f' }}>9374815450</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='pt-5'>
                    <Col md={6} className='mb-4'>
                        <form className="contact-form " onSubmit={formik.handleSubmit}>
                            {/* Name Field */}
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <div className="invalid-feedback">{formik.errors.name}</div>
                                )}
                            </div>

                            {/* Email Field */}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div className="invalid-feedback">{formik.errors.email}</div>
                                )}
                            </div>

                            {/* Message Field */}
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className={`form-control ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''}`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.message}
                                ></textarea>
                                {formik.touched.message && formik.errors.message && (
                                    <div className="invalid-feedback">{formik.errors.message}</div>
                                )}
                            </div>

                            {/* Submit Button */}
                            <Button type="submit" variant="primary" className="w-100 mt-3" disabled={formik.isSubmitting}>
                                Submit
                            </Button>
                        </form>
                    </Col>
                    <Col md={6}>
                        <iframe
                            title="Google Map"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3718.6362286837884!2d72.85626571744385!3d21.246268999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sus!4v1742311857796!5m2!1sen!2sus"
                        ></iframe>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}
