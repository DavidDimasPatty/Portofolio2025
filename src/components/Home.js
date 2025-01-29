import React, { useEffect, useRef } from "react";
import "../assets/style/Home.css"
import Introduce from "./Introduce.js";
import Project from "./Project.js";
import Contact from "./Contact.js";

const Home = () => {
    const wrapperRef = useRef(null);

    useEffect(() => {
       const wrapper = wrapperRef.current;
        const scrollFactor = 10; 
        const handleWheel = (e) => {
            e.preventDefault(); // Cegah scroll vertikal
            if (wrapperRef.current) {
                wrapperRef.current.scrollLeft += e.deltaY* scrollFactor; // Geser horizontal
            }
        };

        window.addEventListener("wheel", handleWheel);

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);
    
    return (
        <div
            className="wrapperAll"
            ref={wrapperRef} // Referensi div untuk diakses di useEffect
        >
            <div className="section"><Introduce /></div>
            <div className="section"><Project /></div>
            <div className="section"><Contact /></div>
        </div>
    );
}

export default Home;