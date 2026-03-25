import OutlineImg from '../assets/StyleOutline.png'
import Dots from '../assets/Dots.png'
import Person from '../assets/Image.png'
import Quets from '../assets/quets.png'
import Rectangle from '../assets/ract.png'
import Person2 from '../assets/person2.png'
import rect2 from '../assets/rect-2.png'
import { Container, Row, Col } from 'react-bootstrap'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef, useState } from 'react'
export default function about() {
    const mainRf = useRef()
    const aboutBody1 = useRef()
    const skillRf = useRef()
    const tl = gsap.timeline();
    const [count,setCount]=useState()
    useGSAP(() => {
        const body1Elements = gsap.utils.toArray(aboutBody1.current.children)
        tl.from('.t2-div h2', {
            x: -100,
            opacity: 0,
        })
        tl.from('.t2-div p', {
            x: 100,
            opacity: 0,
        })
        body1Elements.forEach((val) => {
            tl.from(val, {
                y: 100,
                opacity: 0,
                duration: 0.2,
                ease: 'power.in'
            })
        })
        tl.from('.about-img-container img', {
            x: 100,
            opacity: 0,
            stagger: {
                from: 'random',
                amount: 0.20,
            }
        })
        const tittles = mainRf.current.querySelectorAll(".scroll-tittle h2")
        tittles.forEach((val) => {
            gsap.from(val, {
                x: -100,
                opacity: 0,
                scrollTrigger: {
                    trigger: val,
                    start: 'top 90%',
                    end: 'top 45%',
                    scrub: true,

                }
            })
        })
        const skillElements = gsap.utils.toArray(skillRf.current.children)
        skillElements.forEach((val) => {
            gsap.from(val, {
                x: 150,
                opacity: 0,
                rotate: 25,
                scrollTrigger: {
                    trigger: val,
                    start: 'top 80%',
                    end: 'top 45%',
                    scrub: true,

                }
            })
        })

        // fun-facts
        gsap.from('.fun-facts p', {
            y: 150,
            opacity: 0,
            rotate: 25,
            stagger: {
                from: "random",
                amount: 0.20,
            },
            scrollTrigger: {
                trigger: '.fun-facts p',
                start: 'top 90%',
                end: 'top 45%',
                scrub: true,

            }
        })
        gsap.from('.skil-body-1 img', {
            x: 150,
            opacity: 0,
            rotate: 25,
            stagger: {
                from: 'random',
                amount: 0.20,
            },
            scrollTrigger: {
                trigger: ".skil-body-1 img",
                start: 'top 90%',
                end: 'top 45%',
                scrub: true,
            }
        })

    }, [count])
    return (
        <>
            <Container fluid>
                <div className="about-container overflow-hidden" ref={mainRf}>
                    <div>
                        <div className=' t2-div '>
                            <h2><span className='levender-color '>/</span>About me</h2>
                            <p style={{ fontSize: '12px' }} className="gray-color">Who am i</p>
                        </div>
                    </div>
                    <div className='about-content-5 content-basic'>
                        <Row>
                            <Col md={6}>
                                <div className='about-body-1'>
                                    <div className='d-flex flex-column  justify-content-center' ref={aboutBody1}>
                                        <p className='gray-color'>Hello, i’m Surya!</p>
                                        <p className='gray-color'>I’m a self-taught front-end developer based in Tamilnadu, India. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. </p>
                                        <p className='gray-color'>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='about-body-2'>
                                    <div className='about-img-container'>
                                        <img src={Dots} alt="" className='about-dots' />
                                        <img src={Dots} alt="" className='about-dots-2' />
                                        <img src={Person2} alt="" className='about-img' />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='scroll-tittle'>
                        <h2><span className='levender-color'>#</span>Skills</h2>
                    </div>
                    <div className='skill-card-main-container mt-5 w-100' ref={skillRf} >
                        <div className='skill-card p-0' >
                            <div className='skill-card-tittle'>
                                <p className='m-0'>Languages</p>
                            </div>
                            <div className='skill-card-body p-0'>
                                <p className='gray-color m-0'>Java</p>
                                <p className='gray-color m-0'>Python</p>
                            </div>
                        </div>

                        <div className='skill-card p-0'>
                            <div className='skill-card-tittle'>
                                <p className='m-0'>DataBases</p>
                            </div>
                            <div className='skill-card-body'>
                                <p className='gray-color m-0'>MySql</p>
                                <p className='gray-color m-0'>Mongodb</p>
                            </div>
                        </div>
                        <div className='skill-card p-0'>
                            <div className='skill-card-tittle'>
                                <p>Others</p>
                            </div>
                            <div className='skill-card-body p-0'>
                                <p className='gray-color m-0'>HTML CSS Js Bootstrap React </p>
                            </div>
                        </div>
                        <div className='skill-card p-0'>
                            <div className='skill-card-tittle'>
                                <p className='m-0'>Tools</p>
                            </div>
                            <div className='skill-card-body'>
                                <p className='gray-color m-0'>VsCode Eclips Git GitHub Figma Postman</p>
                            </div>
                        </div>
                        <div className='skill-card p-0'>
                            <div className='skill-card-tittle'>
                                <p className='m-0'>FrameWorks</p>
                            </div>
                            <div className='skill-card-body p-0'>
                                <p className='gray-color m-0'>ReactVite Bootstarp5 SpringBoot</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 pt-5'>
                        <div className=' mt-5 scroll-tittle'>
                            <h2><span className='levender-color'>#</span>My-Fun-Facts</h2>
                        </div>
                        <Row>
                            <Col md={5}>
                                <div className='fun-facts'>
                                    <p className='gray-color'>I like winter more than summer</p>
                                    <p className='gray-color'>I often bike with my friends</p>
                                    <p className='gray-color'>I like pizza and pasta</p>
                                    <p className='gray-color'>I was in Egypt, Poland and Turkey</p>
                                    <p className='gray-color'>My favorite movie is The Green Mile</p>
                                    <p className='gray-color'>I am still in school</p>
                                    <p className='gray-color'>I  have  siblings</p>
                                </div>
                            </Col>
                            <Col md={7} >
                                <div className='w-100 d-flex justify-content-center justify-content-md-end'>
                                    <div className='skil-body-1  w-75' style={{ height: '300px' }}>
                                        <img src={Dots} alt="" className='skill-dots' />
                                        <img src={Dots} alt="" className='skill-dots-2' />
                                        <img src={rect2} alt="" className='skill-rect-2' />
                                        <img src={rect2} alt="" className='skill-rect-1' />
                                        <img src={OutlineImg} alt="" className='skill-outline' />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
            <div className='footer my-3 overflow-hidden'>
                <div className='d-flex justify-content-around my-4 border-top flex-wrap'>
                    <div className='mt-4 footer-body-1'>
                        <p>Surya <span className='gray-color' style={{ fontSize: '10px' }}>suryasanthoshh@gmail.com</span></p>
                        <p className='gray-color' style={{ fontSize: '12px' }}>Web designer and front-end developer</p>
                    </div>
                    <div className='mt-4 footer-body-2' >
                        <div>
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
                        <p className='gray-color mt-5 ' style={{ fontSize: '10px' }}>© Copyright 2022. Made by Elias</p>
                    </center>
                </div>
            </div>
        </>
    );
}