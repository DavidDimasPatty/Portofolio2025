import React, { useState, useEffect, useCallback } from "react";
import "../assets/style/Project.css";
import Tobacco from "../assets/photo/tobacco.png";
import hpa from "../assets/photo/homepageAdmin.png";
import hpi from "../assets/photo/homepageImam.png";
import hpu from "../assets/photo/homepagePI.png";
import mnistdata from "../assets/photo/mnistdata.png";
import othello from "../assets/photo/othello.png";
import snakecharmer from "../assets/photo/snakecharmermachine.png";
import portofolio from "../assets/photo/portofolio.png";
import twc from "../assets/photo/twc.png"
import tfc from "../assets/photo/tfc.png"
import nikahan1 from "../assets/photo/nikahan1.png"
import nikahan2 from "../assets/photo/nikahan2.png"
import nikahan3 from "../assets/photo/nikahan3.png"
import websiteIkodora from "../assets/photo/websiteIkodora.png"
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
const Project = () => {
    const [arrProject, setArrProject] = useState([]);
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    useEffect(() => {
        var arrTemp = [];
        arrTemp.push({
            name: "Tobacco Website",
            image: Tobacco,
            category: "website",
            url: "https://tobacco.vercel.app/",
            description: "Tobacco market place. Provide buying products for users.",
            lang: ["JavaScript", "React", "Mongo DB"],
        });
        arrTemp.push({
            name: "Pelayanan Imam Katolik",
            image: hpu,
            category: "mobile",
            url:
                "https://drive.google.com/drive/u/0/folders/1EYfF7u3YNRutKp0J1_pIfxE9SqRPBGaa",
            description:
                "Mobile Application for Catholic Services. Used for helping user enroll catholic services.",
            lang: ["Flutter", "Dart", "Mongo DB", "Fire Base"],
        });
        arrTemp.push({
            name: "Imam Pelayanan Katolik",
            image: hpi,
            category: "mobile",
            url:
                "https://drive.google.com/drive/u/0/folders/1EYfF7u3YNRutKp0J1_pIfxE9SqRPBGaa",
            description:
                "Mobile Application for handling Catholic Services. Used only by priests.",
            lang: ["Flutter", "Dart", "Mongo DB", "Fire Base"],
        });
        arrTemp.push({
            name: "Admin Pelayanan Katolik",
            image: hpa,
            category: "mobile",
            url:
                "https://drive.google.com/drive/u/0/folders/1EYfF7u3YNRutKp0J1_pIfxE9SqRPBGaa",
            description:
                "Mobile Application for handling accounts. Used only by admin.",
            lang: ["Flutter", "Dart", "Mongo DB", "Fire Base"],
        });
        arrTemp.push({
            name: "MNIST Data Deep Learning",
            image: mnistdata,
            category: "website",
            url:
                "https://github.com/DavidDimasPatty/MNIST_Recognition_NeuralNetwork/blob/master/6181801040.ipynb",
            description:
                "Deep learning approach for recognize handwriting using MNIST Data. Accuration reach up to 95%.",
            lang: ["Python"],
        });
        arrTemp.push({
            name: "Othello Dekstop Game",
            image: othello,
            category: "dekstop",
            url: "https://github.com/DavidDimasPatty/OthelloAgent",
            description:
                "Offline Othello game for 2 persons running in desktop. Built with the Multi Agents System approach.",
            lang: ["Java"],
        });
        arrTemp.push({
            name: "Snake Charmer Machine Learning",
            image: snakecharmer,
            category: "dekstop",
            url: "https://github.com/DavidDimasPatty/SnakeCharmerMachineLearning",
            description:
                "Find the best way a snake can fit in the box. Built with machine learning approach.",
            lang: ["Java"],
        });
        arrTemp.push({
            name: "Portofolio",
            image: portofolio,
            category: "website",
            url: "/",
            description: "You're already in here 😄.",
            lang: ["JavaScript", "React"],
        });
        arrTemp.push({
            name: "Donation Website",
            image: twc,
            category: "website",
            url: "https://github.com/DavidDimasPatty/Donation_Website",
            description: "Serverless website for donor and fundraiser.",
            lang: ["PHP", "SQL"],
        });
        arrTemp.push({
            name: "Company Profile",
            image: tfc,
            category: "website",
            url: "https://portofolio-fl.vercel.app/",
            description: "Serverless website for donor and fundraiser.",
            lang: ["JavaScript", "React"],
        });
        arrTemp.push({
            name: "Wedding Website 1",
            image: nikahan1,
            category: "website",
            url: "https://nikahan-v2.vercel.app/",
            description: "Serverless website for donor and fundraiser.",
            lang: ["JavaScript", "React"],
        });
        arrTemp.push({
            name: "Wedding Website 2",
            image: nikahan2,
            category: "website",
            url: "https://github.com/DavidDimasPatty/Donation_Website",
            description: "Serverless website for donor and fundraiser.",
            lang: ["JavaScript", "React", "C#", "ASP.NET"],
        });
        arrTemp.push({
            name: "Company Profile 2",
            image: websiteIkodora,
            category: "website",
            url: "https://portofolio-fl-2.vercel.app/",
            description: "Serverless website for donor and fundraiser.",
            lang: ["JavaScript", "React", "C#", "ASP.NET"],
        });
        setArrProject(arrTemp);
    }, []);

    return (
        <div className="wrapperProject">
            {init && <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={{
                    fullScreen: { enable: true },
                    background: {
                        color: {
                            value: "#ffffff",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#fc0000",
                        },
                        links: {
                            color: "#fc0000",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            }
            <div className="project">

                <div className="projectDesc">
                    <h1>The Projects</h1>
                </div>

                <div className="wrapperProjectList">
                    <div className="projectList">
                        {arrProject.map((data, index) => (
                            <div className="projectData" onClick={() => window.open(data.url, "_blank")}>
                                <img src={data.image} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>);
}


export default Project;