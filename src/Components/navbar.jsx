import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
export default function navbar() {

    const [menu ,setMenu]=useState(false)
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
            stagger:0.20,
        });
    }, []);

    function handleMenu() {
        setMenu(!menu);
        if (menu) {
            gsap.to('.nav-items', {
                y: "0%",
                translateY: "0%",
                duration: 0.5,
                ease: "power3.out"
            });
        } else {
            gsap.to('.nav-items', {
                // y: "-100%",
                translateY: "-100%",
                duration: 0.5,
                ease: "power3.in"
            });
        }
    }
    return (
        <>
            <div className="navbar">
                <div className="nav-hero">
                    <h2>Surya</h2>
                </div>
                <div className="menu-icon">
                    <i className="ri-menu-2-fill" onClick={() => { handleMenu() }}></i>
                </div>
                <div className="nav-items">
                    <div className="close-icon" onClick={() => { handleMenu() }}>
                        <i className="ri-close-fill"></i>
                    </div>
                    <h3 className='gray-color nav-h3'><span className='levender-color'>#</span>Home</h3>
                    <h3 className='gray-color nav-h3'><span className='levender-color'>#</span>About-me</h3>
                    <h3 className='gray-color nav-h3'><span className='levender-color'>#</span>Service</h3>
                    <h3 className='gray-color nav-h3'><span className='levender-color'>#</span>Contacts</h3>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}