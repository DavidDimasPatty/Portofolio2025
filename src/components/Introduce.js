import React, { useEffect, useRef } from "react";
import "../assets/style/Introduce.css";
import foto from "../assets/photo/foto1.png"

const Introduce = () => {
    const textRef = useRef(null);
    useEffect(() => {
        const str = "• Your Trusted Developer • DAVID";
        const text = document.getElementById("text");

        if (textRef.current) {
            for (let i = 0; i < str.length; i++) {
                let span = document.createElement("span");
                span.innerHTML = str[i];
                textRef.current.appendChild(span);
                span.style.transform = `rotate(${11 * i}deg)`;
            }
        }
    }, [])

    return (
        <div className="wrapperIntroduce">
            <div className="runningText">
                <p class="marquee"><span>SOFTWARE ENGINEER • WEB DEVELOPER • FRONT END DEVELOPER • BACK END DEVELOPER • FULLSTACK DEVELOPER</span></p>
                <p class="marquee2"><span>SOFTWARE ENGINEER • WEB DEVELOPER • FRONT END DEVELOPER • BACK END DEVELOPER • FULLSTACK DEVELOPER</span></p>
                <p class="marquee3"><span>SOFTWARE ENGINEER • WEB DEVELOPER • FRONT END DEVELOPER • BACK END DEVELOPER • FULLSTACK DEVELOPER</span></p>
            </div>
            <div className="introduce">
                <div className="introduceName">
                    <h1>David Dimas Patty</h1>
                </div>
                <div className="introduceImage">
                    <img src={foto} className="imgDavid"/>
                </div>
                <div className="introduceDesc">
                    <h1>The Programmer</h1>
                </div>
            </div>
            <p className="text" ref={textRef}></p>
        </div>
    );
}


export default Introduce;