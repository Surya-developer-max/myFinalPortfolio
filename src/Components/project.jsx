import ProjectProvider from "./projectProvider";
import { ProjectContext } from "../App";
import { useContext } from "react";
import { Container } from 'react-bootstrap'

export default function project() {

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
    
    const projects = useContext(ProjectContext)
    return (
        <>
        <Container fluid>
            <div className="">
                <div className="main-project-container">
                    <div className='tittle-div d-block'>
                        <h2><span className='levender-color'>/</span>projects</h2>
                        <p style={{ fontSize: '12px' }} className="gray-color ms-3">List Of My Projects</p>
                    </div>
                    <div>
                        <div className='tittle-div d-block mt-5'>
                            <h3><span className='levender-color'>#</span>Complete-apps</h3>
                        </div>
                        <div className="project-body">
                            {projects.map((val) => {
                                return (
                                    <>
                                        <div id="project-cards">
                                            <ProjectProvider img={val.img} tittle={val.tittle} tools={val.tools} summary={val.summary} key={val.index} link={val.page_link} />
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    < div className='tittle-div d-block mt-5'>
                        <h3><span className='levender-color'>#</span>Small Projects</h3>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center justify-content-md-start mt-5">
                        {smallProjects.map((val) => {
                            return (
                                <>
                                    <div className='project-card m-1' >
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
                        <p className='gray-color mt-5 ' style={{ fontSize: '10px' }}>© Copyright 2022. Made by Elias</p>
                    </center>
                </div>
            </div>
        </>
    );
}