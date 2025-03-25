import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Events from "./Events";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
    const containerRef = useRef(null);
    const welcomeBoxRef = useRef(null);
    const particlesInit = async (engine) => await loadFull(engine);
    const [isHovered, setIsHovered] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Enhanced scroll-based animations
    const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const summitScale = useTransform(scrollYProgress, [0.15, 0.3], [1, 3]);
    const summitOpacity = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);
    const videoBrightness = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
    const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -200]);
    const subtitleY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

    useEffect(() => {
        // GSAP animations for floating elements
        gsap.utils.toArray(".float-element").forEach((element) => {
            gsap.to(element, {
                y: 20,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });

        // Welcome box animation
        gsap.fromTo(
            welcomeBoxRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: welcomeBoxRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-auto bg-black text-white overflow-hidden">
            {/* Particle Background */}
            <div className="absolute inset-0 z-0">
                <Particles
                    init={particlesInit}
                    options={{
                        particles: {
                            number: {
                                value: 80,
                                density: {
                                    enable: true,
                                    value_area: 800
                                }
                            },
                            color: {
                                value: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A"]
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 0,
                                    color: "#000000"
                                }
                            },
                            opacity: {
                                value: 0.5,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 1,
                                    opacity_min: 0.1,
                                    sync: false
                                }
                            },
                            size: {
                                value: 3,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 2,
                                    size_min: 0.3,
                                    sync: false
                                }
                            },
                            line_linked: {
                                enable: true,
                                distance: 150,
                                color: "#ffffff",
                                opacity: 0.2,
                                width: 1
                            },
                            move: {
                                enable: true,
                                speed: 1,
                                direction: "none",
                                random: true,
                                straight: false,
                                out_mode: "out",
                                bounce: false,
                                attract: {
                                    enable: true,
                                    rotateX: 600,
                                    rotateY: 1200
                                }
                            }
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "grab"
                                },
                                onclick: {
                                    enable: true,
                                    mode: "push"
                                },
                                resize: true
                            },
                            modes: {
                                grab: {
                                    distance: 140,
                                    line_linked: {
                                        opacity: 0.5
                                    }
                                },
                                push: {
                                    particles_nb: 4
                                }
                            }
                        },
                        retina_detect: true
                    }}
                />
            </div>

            {/* First Section - Hero */}
            <div className="relative w-full flex flex-col items-center justify-center min-h-screen text-center p-6 z-10">
                {/* Floating elements */}
                <motion.div 
                    className="float-element absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-purple-500/20 blur-xl"
                    style={{ x: -50, y: -50 }}
                />
                <motion.div 
                    className="float-element absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-blue-500/20 blur-xl"
                    style={{ x: 50, y: 50 }}
                />
                
                {/* University Name */}
                <motion.h4 
                    style={{ opacity: textOpacity, y: subtitleY }}
                    className="text-xl md:text-3xl font-light tracking-widest text-gray-300 relative z-10 mb-4"
                >
                    SHARDA UNIVERSITY PRESENTS
                </motion.h4>
                
                {/* Main Title */}
                <motion.div 
                    style={{ y: titleY }}
                    className="relative z-10"
                >
                    <motion.h1
                        style={{ scale: summitScale, opacity: summitOpacity }}
                        className="text-6xl md:text-9xl font-extrabold tracking-tighter mb-4 relative"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                            E-SUMMIT '25
                        </span>
                        <AnimatePresence>
                            {isHovered && (
                                <motion.span
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute text-xl md:text-2xl font-normal text-orange-400"
                                >
                                    ✨ 
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.h1>
                </motion.div>
                
                {/* Date and Tagline */}
                <motion.div 
                    style={{ opacity: textOpacity }}
                    className="mt-8 relative z-10"
                >
                    <motion.p 
                        className="text-2xl md:text-3xl font-medium text-gray-300 mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <span className="text-white font-bold">16-17 APRIL 2025</span>
                    </motion.p>
                    <motion.p 
                        className="text-xl md:text-2xl font-light text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        COLLABORATE TO CONQUER
                    </motion.p>
                </motion.div>
                
                {/* Animated Down Arrow */}
                <motion.div 
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="text-gray-400 w-8 h-8 mx-auto"
                    >
                        <path d="M12 5v14M19 12l-7 7-7-7"/>
                    </svg>
                    <p className="text-xs text-gray-400 mt-2">SCROLL DOWN</p>
                </motion.div>
            </div>

            {/* Video Section */}
            <div className="relative flex items-center justify-center w-full h-screen overflow-hidden z-10">
                <motion.video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ filter: `brightness(${videoBrightness})` }}
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
                >
                    <source src="/video.mp4" type="video/mp4" />
                </motion.video>

                {/* Welcome Box */}
                <motion.div
                    ref={welcomeBoxRef}
                    className="mx-auto p-8 md:p-10 text-white rounded-xl max-w-4xl shadow-2xl text-center backdrop-blur-md bg-white/10 border border-white/20"
                >
                    <motion.h2 
                        className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        WELCOME TO E-SUMMIT '25
                    </motion.h2>
                    
                    <motion.p 
                        className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <span className="font-bold text-white">🚀 The Epicenter of Innovation & Excellence 🚀</span>
                        <br /><br />
                        Sharda University's E-Summit has been the <span className="text-orange-400 font-semibold">hub of entrepreneurial spirit</span>, 
                        groundbreaking ideas, and transformative leadership. This year, we unite visionaries, 
                        industry leaders, and young innovators to <span className="text-pink-400 font-semibold">redefine the future</span> of business and technology.
                    </motion.p>
                    
                    <motion.div 
                        className="mt-8 flex flex-col md:flex-row justify-center gap-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium">
                            📅 16-17 APRIL 2025
                        </div>
                        <div className="px-6 py-3 border border-orange-400 text-orange-400 rounded-full font-medium">
                            💡 COLLABORATE · INNOVATE · CONQUER
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Events Section */}
            <Events />
        </div>
    );
};

export default HomePage;