import ProjectProvider from './projectProvider'
import { ProjectContext } from "../App";
import { useContext } from "react";
import { useRef } from 'react';

import OutlineImg from '../assets/StyleOutline.png'
import Dots from '../assets/Dots.png'
import Person from '../assets/Image.png'
import Quets from '../assets/quets.png'
import Rectangle from '../assets/ract.png'
import Person2 from '../assets/person2.png'
import rect2 from '../assets/rect-2.png'

import { Container, Row, Col } from 'react-bootstrap'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

import { Link } from 'react-router-dom'

export default function home() {
    const content1Rf = useRef();
    const contentMainRf = useRef();
    const skill_card_ref = useRef();
    const projects = useContext(ProjectContext)
    useGSAP(() => {
        const elements = gsap.utils.toArray(content1Rf.current.children)
        const elements2 = gsap.utils.toArray(contentMainRf.current.children)
        const skill_card = gsap.utils.toArray(skill_card_ref.current.children)
        const tittles = document.querySelectorAll('.tittle-div h2')
        const tittle_line = document.querySelectorAll('.tittle-line')
        const tittle_viewall = document.querySelectorAll('.viewall')
        const project_cards = document.querySelectorAll('#project-cards')

        // ------------------------TEXT SPLITER VFX-------------------------------
        const tex = document.querySelector(".con2-p").textContent;
        const split_text = tex.split("");
        var final_text = ""
        split_text.forEach(v => {
            if (v == " ") {
                final_text += `<span>_</span>`
            }
            else {
                final_text += `<span>${v}</span>`
            }

        })
        document.querySelector(".con2-p").innerHTML = final_text;

        // --------------------------LOADING PAGE VFX------------------------

        const tl = gsap.timeline();
        tl.from('.said-cotainer', {
            y: -100,
            opacity: 0,
        })
        elements2.forEach(val => {
            tl.from(val, {
                y: 50,
                opacity: 0,
                duration: 0.3,
                ease: 'power1.in'
            })
        })
        elements.forEach(val => {
            tl.from(val, {
                x: 100,
                opacity: 0,
                duration: 0.2,
                rotate: 10,
            })
        })
        // --------------CON-PART-2-----------------
        tl.from('.part2-bottom-div p', {
            opacity: 0,
        })
        tl.from('.content-2 .c2-part-1', {
            y: 100,
            opacity: 0,
        })
        tl.from('.con2-p span', {
            y: 30,
            stagger: 0.1,
            opacity: 0,
            duration: 0.2,
        })
        tl.from('.content-2 .rect-img', {
            x: 50,
            opacity: 0,
        })

        // -------------------------------SCROLL TRIGGER EFX----------------------------

        // -------------------------ALL TITTLES-----------------

        tittles.forEach((val) => {
            gsap.from(val, {
                x: -100,
                opacity: 0,
                scrollTrigger: {
                    trigger: val,
                    start: "top 90%",
                    end: "top 30%",
                    scroller: "body",
                    scrub: true,
                },
                stagger: 0.15,
            })
        })
        tittle_line.forEach((val) => {
            gsap.from(val, {
                x: 100,
                opacity: 0,
                scrollTrigger: {
                    trigger: val,
                    start: "top 90%",
                    end: "top 30%",
                    scroller: "body",
                    scrub: true,
                }
            })
        })
        tittle_viewall.forEach((val) => {
            gsap.from(val, {
                opacity: 0,
                scrollTrigger: {
                    trigger: val,
                    start: "top 90%",
                    end: "top 30%",
                    scroller: "body",
                    scrub: true,
                }
            })
        })

        // --------------------PROJECT CARD VFX------------------
        project_cards.forEach((val) => {
            gsap.from(val, {
                x: 200,
                opacity: 0,
                scrollTrigger: {
                    trigger: val,
                    start: 'top 90%',
                    end: 'top 10%',
                    scrub: true,
                }
            })
        })

        // --------------------------SIKILL VFX ----------------------
        gsap.from('.skil-body-1 img', {
            x: -100,
            y: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: '.skil-body-1 img',
                start: 'top 90%',
                end: 'top 20%',
                scrub: true,
            },
            rotate: 90,

            stagger: {
                from: 'random',
                amount: 1,
            }
        })
        skill_card.forEach((val) => {
            gsap.from(val, {
                x: 100,
                opacity: 0,
                scrollTrigger: {
                    trigger: val,
                    start: 'top 90%',
                    end: 'top 20%',
                    scrub: true,
                },
                rotate: 20,
            })
        })
        gsap.from('.skill-card-body p', {
            y: 10,
            opacity: 0,
            scrollTrigger: {
                trigger: '.skill-card-body p',
                start: 'top 90%',
                end: 'top 20%',
                scrub: true,
            }
        })

        // -----------------------------------ABOUT VFX------------------------------
        gsap.from('.about-body-1 p', {
            y: 50,
            opacity: 0,
            stagger: 0.12,
            scrollTrigger: {
                trigger: '.about-body-1 p',
                start: 'top 90%',
                end: 'top 20%',
                scrub: true,
            }
        })
        gsap.from('.about-img-container img', {
            x: 100,
            opacity: 0,
            stagger: 0.20,
            scrollTrigger: {
                trigger: '.about-img-container img',
                start: 'top 90%',
                end: 'top 20%',
                scrub: true,
            }
        })

        // -----------------------------------CONTACT VFX------------------------
        gsap.from('.contact-us', {
            x: -50,
            opacity: 0,
            stagger: 0.20,
            scrollTrigger: {
                trigger: '.contact-us',
                start: 'top 80%',
                end: 'top 50%',
                scrub: true,
            }
        })
        gsap.from('.contact-me', {
            x: 50,

            opacity: 0,
            stagger: 0.20,
            scrollTrigger: {
                trigger: '.contact-me',
                start: 'top 80%',
                end: 'top 50%',
                scrub: true,
            },
        })
        // -----------------------FOOTER VFX-------------------------------------
        gsap.from('.footer-body-2', {
            opacity: 0,

            x: 80,
            scrollTrigger: {
                trigger: '.footer-body-2',
                start: 'top 90%',
                end: 'top 70%',
                scrub: true,
            },
            rotate: 30,
        })
        gsap.from('.footer-body-1', {
            opacity: 0,
            x: -80,
            scrollTrigger: {
                trigger: '.footer-body-1',
                start: 'top 90%',
                end: 'top 70%',
                scrub: true,
            },
            rotate: -30,
        })

    }, [])

    return (
        <>
            <Container fluid>
                <div className='said-cotainer'>
                    <div></div>
                    <i className="ri-github-fill"></i>
                    <i className="ri-linkedin-box-fill"></i>
                    <i className="ri-whatsapp-fill"></i>
                </div>

                <div className="main-container">
                    {/* -----------------------------------------------------------INTRO------------------------------------------------ */}
                    <div className="content-1">
                        <div className="part-1">
                            <div className='main-text-container' ref={contentMainRf}>
                                <h1 className='fs-2'>Surya is a <span className="levender-color"> web designer </span> and  <span className="levender-color"> full-stack developer</span></h1>
                                <p style={{ fontSize: '15px' }} className=" gray-color main-text-p">He crafts responsive websites where technologies meet creativity</p>
                                <button className="btn-varient-1">Contact me!!</button>
                            </div>
                        </div>
                        <div className="part-2" ref={content1Rf}>
                            <img src={OutlineImg} alt="" className='outline' />
                            <img src={Dots} alt="" className='dots' />
                            <img src={Person} alt="" className='person' />
                            <div className='part2-bottom-div'>
                                <p style={{ fontSize: '10px' }} className='p-0 m-0'>Currently working on Portfolio</p>
                            </div>
                        </div>
                    </div>
                    <div className='content-2 '>
                        <div className='c2-part-1'>
                            <p className='con2-p'>With great power comes great electricity bill</p>
                            <div className='c2-part-2'><p className='m-0'>- Surya</p></div>
                            <img src={Quets} alt="" className='quets-1' />
                            <img src={Quets} alt="" className='quets-2' />
                        </div>
                        <img src={Rectangle} alt="" className='rect-img' />
                    </div>

                    {/* ----------------------------------------------------------PROJECT----------------------------------------- */}
                    <div className='project-content-3 content-basic'>
                        <img src={Dots} alt="" className='project-dots' />
                        <img src={Rectangle} alt="" className='project-rect' />

                        <div className='tittle-div'>
                            <h2><span className='levender-color'>#</span>projects</h2>
                            <div className='tittle-line'></div>
                            <div className='viewall'><p><Link to="/project" className='text-decoration-none gray-color'>View all</Link></p></div>
                        </div>
                        <div className='project-body'>
                            {projects.map((val) => {
                                return (
                                    <>
                                        <div id="project-cards">
                                            <ProjectProvider img={val.img} tittle={val.tittle} link={val.page_link} tools={val.tools} summary={val.summary} key={val.index} />
                                        </div>
                                    </>
                                )

                            })}
                        </div>
                    </div>

                    {/* ---------------------------------------------------------SKILL----------------------------------------- */}
                    <div className='skil-content-4 content-basic '>
                        <div className='tittle-div'>
                            <h2><span className='levender-color'>#</span>Skils</h2>
                            <div className='tittle-line'></div>
                            <div className='viewall'><p>View all</p></div>
                        </div>
                        <Container>
                            <Row>
                                <Col xs={12} md={5}>
                                    <div className='skil-body-1'>
                                        <img src={Dots} alt="" className='skill-dots' />
                                        <img src={Dots} alt="" className='skill-dots-2' />
                                        <img src={rect2} alt="" className='skill-rect-2' />
                                        <img src={rect2} alt="" className='skill-rect-1' />
                                        <img src={OutlineImg} alt="" className='skill-outline' />
                                    </div>
                                </Col>
                                <Col xs={12} md={7}>
                                    <div className='skill-card-main-container' ref={skill_card_ref}>
                                        <div className='skill-card p-0' >
                                            <div className='skill-card-tittle'>
                                                <p className='m-0'>Languages</p>
                                            </div>
                                            <div className='skill-card-body p-0'>
                                                <p className='gray-color m-0'>Java</p>
                                                <p className='gray-color m-0'>Python</p>
                                            </div>
                                        </div>
                                        <div>
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
                                        </div>
                                        <div>
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
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    {/* ----------------------------------------------------------------------ABOUT ME---------------------------------------------- */}
                    <div className='about-content-5 content-basic'>
                        <div className='tittle-div '>
                            <h2><span className='levender-color'>#</span>AboutMe</h2>
                            <div className='tittle-line'></div>
                            <div className='viewall'><p><Link to="/about" className='text-decoration-none text-light gray-color'>View all</Link></p></div>
                        </div>
                        <Row>
                            <Col md={6}>
                                <div className='about-body-1'>
                                    <p className='gray-color'>Hello, i’m Surya!</p>
                                    <p className='gray-color'>I’m a self-taught front-end developer based in Tamilnadu, India. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. </p>
                                    <p className='gray-color'>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
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
                    {/* -----------------------------------CONTACT----------------------------------- */}
                    <div className='contact-content-6 content-basic'>
                        <div className='tittle-div '>
                            <h2><span className='levender-color'>#</span>Contact</h2>
                            <div className='tittle-line'></div>
                            <div className='viewall'><p>View all</p></div>
                        </div>
                        <Row>
                            <Col md={5}>
                                <p className='mt-5 gray-color contact-us'>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
                            </Col>
                            <Col md={7} className='d-flex justify-content-center align-items-center'>
                                <div className='contact-me'>
                                    <h3 className='fs-6 m-0 p-3'>Message Me Here</h3>
                                    <p className=' m-0 my-1 mx-2 gray-color'><i className="ri-whatsapp-fill"></i> Whstsapp</p>
                                    <p className=' m-0 my-1 mx-2 gray-color'><i className="ri-mail-fill"></i> Email</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>

            {/* ---------------------------------------------FOOTER----------------------------------- */}
            <div className='footer my-5         overflow-hidden'>
                <div className='d-flex justify-content-around my-4 border-top flex-wrap'>
                    <div className='mt-4 footer-body-1'>
                        <p>Surya <span className='gray-color' style={{ fontSize: '10px' }}>suryasanthoshh@gmail.com</span></p>
                        <p className='gray-color' style={{ fontSize: '12px' }}>Web designer and front-end developer</p>
                    </div>
                    <div className='mt-4 footer-body-2' >
                        <div>
                            <p className='m-0 fs-5'>Media</p>
                            <div>
                                <i className=" mx-1 ri-github-fill"></i>
                                <i className=" mx-1 ri-linkedin-box-fill"></i>
                                <i className=" mx-1 ri-whatsapp-fill"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <center>
                        <p className='gray-color mt-5 pt-5' style={{ fontSize: '10px' }}>© Copyright 2022. Made by Elias</p>
                    </center>
                </div>
            </div>
        </>
    )
}