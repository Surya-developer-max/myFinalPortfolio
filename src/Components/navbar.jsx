import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Project from "./project";
export default function navbar() {

    const [menu, setMenu] = useState(false)
    const tl2 = gsap.timeline();
    useGSAP(() => {
        const tl = gsap.timeline();
        

        tl.from('.nav-hero', {
            y: -50,
            opacity: 0,
            duration: 0.5
        });
        tl.from('.nav-items h3', {
            y: -20,
            opacity: 0,
            stagger: 0.20,
        });

        tl2.to('.nav-items', {
            y: "0%",
            duration: 0.5,
            ease: "power3.out"
        });
        tl2.from('.close-icon',{
            x:-50,
            opacity:0,
            rotate:360,
        })
        tl2.pause();
    }, []);
    return (
        <>
            <div className="navbar ">
                <div className="nav-hero">
                    <h2>Surya</h2>
                </div>
                <div className="menu-icon">
                    <i className="ri-menu-2-fill" onClick={() => {  tl2.play() }}></i>
                </div>
                <div className="nav-items">
                    <div className="close-icon" onClick={() => { tl2.reverse() }}>
                        <i className="ri-close-fill"></i>
                    </div>
                    <h3 onClick={() => { tl2.reverse() }} className='gray-color nav-h3 '><Link className="text-decoration-none text-light" to='/'><span className='levender-color'>#</span>Home</Link></h3>
                    <h3 onClick={() => { tl2.reverse() }} className='gray-color nav-h3 '><Link className="text-decoration-none text-light"><span className='levender-color'>#</span>About-me</Link></h3>
                    <h3 onClick={() => { tl2.reverse() }} className='gray-color nav-h3 '><Link className="text-decoration-none text-light" to="/project"><span className='levender-color'>#</span>Projects</Link></h3>
                    <h3 onClick={() => { tl2.reverse() }} className='gray-color nav-h3 '><Link className="text-decoration-none text-light"><span className='levender-color'>#</span>Contacts</Link></h3>
                </div>
                <div>

                </div>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Project />} />
            </Routes>
        </>
    )
}