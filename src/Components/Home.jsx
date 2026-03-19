import OutlineImg from '../assets/StyleOutline.png'
import Dots from '../assets/Dots.png'
import Person from '../assets/Image.png'
import Quets from '../assets/quets.png'
import Rectangle from '../assets/ract.png'
import ProjectImg1 from '../assets/img1.png'
import ProjectImg2 from '../assets/img2.png'
import ProjectImg3 from '../assets/img3.png'
import ProjectImg4 from '../assets/img4.png'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
import { Container, Row, Col } from 'react-bootstrap'
import { useGSAP } from '@gsap/react'
import rect2 from '../assets/rect-2.png'
import Person2 from '../assets/person2.png'
import gsap from 'gsap'
import ProjectProvider from './projectProvider'
export default function home() {
    const Project = [
        {
            img: ProjectImg1,
            tools: "HTML CSS Bootstrap5 Js React ",
            tittle: "Portfolio",
            summary: "A Little Try",
            link: "pgLink"
        },
        {
            img: ProjectImg2,
            tools: "HTML CSS Bootstrap5 Js React ",
            tittle: "Junior Kuppanna",
            summary: "Built a scalable restaurant web application using React.js and Bootstrap.",
            link: "pgLink"
        },
        {
            img: ProjectImg3,
            tools: "HTML CSS Bootstrap5 Js React ",
            tittle: "The Kitchn",
            summary: " Optimized page load performance by approximately 25% through efficient front-end design.",
            link: "pgLink"
        },
        {
            img: ProjectImg4,
            tools: "HTML CSS Bootstrap5 Js React ",
            tittle: "My PortFolio",
            summary: "I Build a Scalable Portfolio for me. then, that's all",
            link: "pgLink"
        }
    ]
    const content1Rf = useRef();
    const contentMainRf = useRef();
    useGSAP(() => {
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

        const elements = gsap.utils.toArray(content1Rf.current.children)
        const elements2 = gsap.utils.toArray(contentMainRf.current.children)
        
        const tl = gsap.timeline({
            duration: 1,
        });
        tl.from('.said-cotainer', {
            y: -100,
            opacity: 0,
        })
        elements2.forEach(val => {
            tl.from(val, {
                y: 50,
                opacity: 0,
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
        const tittles = document.querySelectorAll('.tittle-div h2')
        console.log(tittles);
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
                    markers: true,
                },
                stagger: 0.15,
            })
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
                    <div className='content-2'>
                        <div className='c2-part-1'>
                            <p className='con2-p'>With great power comes great electricity bill</p>
                            <div className='c2-part-2'><p className='m-0'>- Surya</p></div>
                            <img src={Quets} alt="" className='quets-1' />
                            <img src={Quets} alt="" className='quets-2' />
                        </div>
                        <img src={Rectangle} alt="" className='rect-img' />
                    </div>
                    <div className='project-content-3'>
                        <img src={Dots} alt="" className='project-dots' />
                        <img src={Rectangle} alt="" className='project-rect' />

                        <div className='tittle-div'>
                            <h2><span className='levender-color'>#</span>projects</h2>
                            <div></div>
                            <div className='viewall'><p>View all</p></div>
                        </div>
                        <div className='project-body'>
                            {Project.map((val) => {
                                return (
                                    <>
                                        <ProjectProvider img={val.img} tittle={val.tittle} tools={val.tools} summary={val.summary} key={val.index} />
                                    </>
                                )

                            })}
                        </div>
                    </div>

                    <div className='skil-content-4'>
                        <div className='tittle-div'>
                            <h2><span className='levender-color'>#</span>Skils</h2>
                            <div></div>
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
                                    <div className='skill-card-main-container'>
                                        <div className='skill-card p-0'>
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

                    <div className='about-content-5 skil-content-4'>
                        <div className='tittle-div about-tittle'>
                            <h2><span className='levender-color'>#</span>AboutMe</h2>
                            <div></div>
                            <div className='viewall'><p>View all</p></div>
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
                </div>
            </Container>
        </>
    )
}