import ProjectProvider from "./projectProvider";
import { ProjectContext } from "../App";
import { useContext, useRef } from "react";
import { Container } from 'react-bootstrap'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
export default function project() {

    const projectRf = useRef()

    const smallProjects = [
        {
            tools: 'HTML CSS ',
            tittle: 'Lufthansa',
            summary: 'Start creating scalable js bot with in seconds',
            link: 'https://surya-developer-max.github.io/lufthansa/'
        }
        ,
        {
            tools: 'HTML CSS Bootstrap5',
            tittle: 'Kavery',
            summary: 'Config for neovim perfect for web developer',
            link: 'https://surya-developer-max.github.io/Kavery/'
        },
        {
            tools: 'HTML CSS + Animation',
            tittle: 'Ruby Mam',
            summary: 'For fun',
            link: 'https://surya-developer-max.github.io/RubyMam/'
        },


    ]

    useGSAP(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        console.log(isMobile)
        const tl = gsap.timeline();
        tl.from('.main-tittle', {
            x: -100,
            opacity: 0,
        })
            .from('.main-tittle p', {
                x: 100,
                opacity: 0,
            })
            .from('.scroll-tittle1 h3', {
                x: 100,
                opacity: 0,
            })
            .from('.project-cards', {
                y: 100,
                opacity: 0,
                stagger: 0.20,
            })

        const porjectCards = projectRf.current.querySelectorAll('.project-cards')
        console.log(porjectCards)
        {
            isMobile && porjectCards.forEach((val) => {
                gsap.to(val, {
                    x: "-130%",
                    scrollTrigger: {
                        trigger: val,
                        start: '0% 20%',
                        end: 'top 0%',
                        scrub: 0.2,
                    }
                })
            })
        }


        gsap.from('.scroll-tittle h3', {
            x: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: '.scroll-tittle h3',
                start: 'top 80%',
                end: 'top 45%',
                scrub: 1,
            }
        })
        gsap.from('.small-projects', {
            y: 80,
            opacity: 0,
            scrollTrigger: {
                trigger: '.small-projects',
                start: 'top 70%',
                end: 'top 55%',
                scrub: true,
            }
        })
        gsap.from('.contact-us1', {
            x: -50,
            opacity: 0,
            stagger: 0.20,
            scrollTrigger: {
                trigger: '.contact-us1',
                start: 'top 100%',
                end: 'top 80%',
                scrub: true,
            }
        })
        gsap.from('.contact-us2', {
            x: 50,
            opacity: 0,
            stagger: 0.20,
            scrollTrigger: {
                trigger: '.contact-us2',
                start: 'top 100%',
                end: 'top 80%',
                scrub: true,
            },
        })

        setTimeout(() => {
            console.log("hiiii")
            ScrollTrigger.refresh();
        }, 150);
    }, [])
    const projects = useContext(ProjectContext)
    return (
        <>
            <Container fluid>
                <div className=" overflow-hidden" >
                    <div className="main-project-container">
                        <div className='tittle-div d-block main-tittle'>
                            <h2><span className='levender-color'>/</span>projects</h2>
                            <p style={{ fontSize: '12px' }} className="gray-color ms-3">List Of My Projects</p>
                        </div>
                        <div>
                            <div className='tittle-div d-block mt-5 scroll-tittle1'>
                                <h3><span className='levender-color'>#</span>Complete-apps</h3>
                            </div>
                            <div className="project-body" ref={projectRf} >
                                {projects.map((val) => {
                                    return (
                                        <>
                                            <div className="project-cards" >
                                                <ProjectProvider img={val.img} tittle={val.tittle} tools={val.tools} summary={val.summary} key={val.id} link={val.page_link} />
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        < div className='tittle-div d-block mt-5 scroll-tittle'>
                            <h3><span className='levender-color'>#</span>Small Projects</h3>
                        </div>
                        <div className="d-flex flex-wrap justify-content-center justify-content-md-start mt-5">
                            {smallProjects.map((val) => {
                                return (
                                    <>
                                        <div className='project-card m-1 small-projects' >
                                            <div className="card-body p-0">
                                                <div className='cb-1'>
                                                    <p className='gray-color m-0' style={{ padding: "5px" }}>{val.tools}</p>
                                                </div>
                                                <div className='cb-2'>
                                                    <h3 className="fs-6">{val.tittle}</h3>
                                                    <p style={{ fontSize: '12px' }} className="gray-color">{val.summary}</p>
                                                    <div>
                                                        <button className='btn-varient-1 btn-sm'><a className="text-decoration-none  text-light" href={val.link} target="blank">Live</a></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
            <div className='footer my-3 overflow-hidden'>
                <div className='d-flex justify-content-around my-4 border-top flex-wrap'>
                    <div className='mt-4 footer-body-1 contact-us1'>
                        <p>Surya <span className='gray-color' style={{ fontSize: '10px' }}>suryasanthoshh@gmail.com</span></p>
                        <p className='gray-color' style={{ fontSize: '12px' }}>Web designer and front-end developer</p>
                    </div>
                    <div className='mt-4 footer-body-2 contact-us2' >
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