import { Container, Row, Col } from 'react-bootstrap'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
export default function Contact() {
    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from('.tittle1 h2', {
            x: -100,
            opacity: 0,
        })
        tl.from('.tittle1 p', {
            x: 100,
            opacity: 0
        })
        tl.from('.about-body1', {
            y: 50,
            opacity: 0,
        })
        tl.from('.contact-me', {
            y: 50,
            opacity: 0,
            stagger: 0.20,
        })
        tl.from('.tittle2 h2', {
            x: -100,
            opacity: 0,
        })
        tl.from('.tittle2 div p', {
            y: 100,
            opacity: 0,
            stagger: 0.20,
            rotate: 30,
        })
        tl.from('.contact1 p', {
            x: -100,
            opacity: 0,
            stagger: 0.20,
        })
        tl.from('.contact2 ', {
            x: 100,
            opacity: 0,
        })
        tl.from('.rights', {
            y: 50,
            opacity: 0,
        })
    }, [])
    return (
        <>
            <Container fluid>
                <div className='contact-container overflow-hidden'>
                    <div>
                        <div className='tittle-div d-block mb-5 tittle1 '>
                            <h2><span className='levender-color'>/</span>Contact</h2>
                            <p style={{ fontSize: '12px' }} className="gray-color">Who am i</p>
                        </div>
                        <Row>
                            <Col md={4}>
                                <div className="about-body1 " >
                                    <p className='gray-color' style={{ fontSize: '13px' }}>
                                        I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                                    </p>
                                </div>
                            </Col>
                            <Col md={7}>
                                <div className="about-body2 d-flex justify-content-md-end justify-content-center flex-wrap w-100" >
                                    <div className='contact-me m-1'>
                                        <h3 className='fs-6 m-0 p-3'>Suport me here</h3>
                                        <p className=' m-0 my-1 mx-2 '> <a href="tel:+919944487227" className='gray-color text-decoration-none'>+91 99444 87227</a></p>
                                    </div>
                                    <div className='contact-me m-1 mb-5'>
                                        <h3 className='fs-6 m-0 p-3'>Message Me Here</h3>
                                        <a href="https://wa.me/+919944487227?text=Hello%20Broo...!%20" className='text-decoration-none' target="_blank"><p className=' m-0 my-1 mx-2 gray-color'><i className="ri-whatsapp-fill me-2"></i>Whstsapp</p></a>
                                        <a href="mailto:stmugesh123@gmail.com" className='text-decoration-none gray-color'> <p className=' m-0 my-1 mx-2 '><i className="ri-mail-fill"></i> Email</p></a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className='tittle-div d-block mt-5 pt-5 tittle2'>
                            <h2><span className='levender-color'>/</span>All-media</h2>
                            <div className='d-flex flex-wrap'>
                                <p style={{ fontSize: '12px' }} className="gray-color ms-2">Insta</p>
                                <p style={{ fontSize: '12px' }} className="gray-color ms-2">whatsapp</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
            <div className='footer my-3 overflow-hidden'>
                <div className='d-flex justify-content-around my-4 border-top flex-wrap'>
                    <div className='mt-4 footer-body-1 contact1'>
                        <p>Surya <span className='gray-color' style={{ fontSize: '10px' }}>suryasanthoshh@gmail.com</span></p>
                        <p className='gray-color' style={{ fontSize: '12px' }}>Web designer and front-end developer</p>
                    </div>
                    <div className='mt-4 footer-body-2 ' >
                        <div className='contact2'>
                            <p className='m-0 fs-5'>Media</p>
                            <div>
                                <a href="https://github.com/Surya-developer-max" className='text-decoration-none gray-color'><i className=" mx-1 ri-github-fill"></i></a>
                                <a href="https://www.linkedin.com/in/suryawebdeveloper/" className='text-decoration-none gray-color'><i className=" mx-1 ri-linkedin-box-fill"></i></a>
                                <a href="https://wa.me/+919944487227?text=Hello%20Broo...!%20" className='text-decoration-none gray-color'><i className="ri-whatsapp-fill"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <center>
                        <p className='gray-color mt-5 rights' style={{ fontSize: '10px' }}>© Copyright 2022. Made by Surya</p>
                    </center>
                </div>
            </div>
        </>
    );
}