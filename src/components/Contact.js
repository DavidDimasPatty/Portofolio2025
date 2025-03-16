import React from "react";
import "../assets/style/Contact.css"
import foto1 from "../assets/photo/foto1.png"

const Contact = () => {

    return (<div className="wrapperContact">
        <div className="contact">
            {/* 
            <div className="wrapperAboutDesc">
                <div className="aboutDesc">
                    <h1>About Me</h1>
                    <div className="aboutReasWrapper">
                        <div className="aboutReas1">
                            <div className="sesi1AboutReas">

                            </div>
                            <div className="sesi2AboutReas">

                            </div>
                        </div>
                        <div className="aboutReas2">
                            <div className="wrapperPhotoAbout">
                             
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="wrapperContactDesc">
                <div className="contactDesc">
                    <h1>Contact Me</h1>
                    <div className="contactBrand">
                        <div className="row">
                            <i class="fa-brands fa-instagram" />  daviddimasss
                        </div>
                        <div className="row">
                            <i class="fa-brands fa-linkedin" />  David Dimas Patty
                        </div>
                        <div className="row">
                            <i class="fa-solid fa-envelope" />  ddimaspatty@gmail.com
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>);
}


export default Contact;