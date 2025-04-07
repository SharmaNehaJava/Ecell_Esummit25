import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Venus from "./Venus";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
    const containerRef = useRef(null);
    const welcomeBoxRef = useRef(null);
    const rocketRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isRocketHovered, setIsRocketHovered] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Scroll-based animations
    const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const summitScale = useTransform(scrollYProgress, [0.15, 0.3], [1, 1.2]);
    const venusOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    useEffect(() => {
        // Rocket floating animation
        gsap.to(rocketRef.current, {
            y: -20,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
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
            {/* Venus Background */}
            <motion.div
                className="fixed inset-0 z-0"
                style={{ opacity: venusOpacity }}
            >
                <Venus scale={0.7} />
            </motion.div>

            {/* First Section - Hero */}
            <div className="relative w-full flex flex-col items-center justify-center h-screen text-center p-6 z-10">
                <div className="relative w-full max-w-6xl mx-auto">
                    {/* Sharda Logo at top-right */}


                    {/* E-Summit Image */}
                    <motion.div
                        style={{ scale: 1, opacity: 1 }}
                        className=" m-auto w-1/2 h-60"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="relative left-55  w-30">
                            <img src="/sharda-logo.png" alt="Sharda University" className="h-10" />
                            <span className="font-extralight text-white text-center">PRESENTS</span>
                        </div>
                        <img
                            src="/Esummit.png"
                            alt="E-Summit"
                            className="w-full max-w-md md:max-w-2xl h-auto"
                        />
                        {/* Date and Tagline */}
                        <motion.div
                            style={{ opacity: 1 }}
                            className="realtive text-center ml-0 md:ml-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            <p className="text-xs md:text-sm font-medium text-gray-300">
                                <span className="text-white font-bold">16-17 APRIL 2025</span> | COLLABORATE TO CONQUER
                            </p>
                        </motion.div>
                    </motion.div>



                    {/* Scroll Indicator (fades out as you scroll) */}
                    <motion.div
                        className="mt-8 md:mt-12"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ duration: 1, delay: 1 }}
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
                            className="text-gray-400 w-6 h-6 mx-auto animate-bounce"
                        >
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                        <p className="text-xs text-gray-400 mt-2 tracking-widest">SCROLL DOWN</p>
                    </motion.div>
                </div>
            </div>

            {/* Video Section */}
            <div className="relative flex items-center justify-center w-full h-screen overflow-hidden z-10">
                <motion.video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
                >
                    <source src="/video.mp4" type="video/mp4" />
                </motion.video>

                {/* Welcome Box */}
                <motion.div
                    ref={welcomeBoxRef}
                    className="mx-auto p-6 md:p-8 text-white rounded-lg max-w-3xl shadow-lg text-center backdrop-blur-sm bg-black/50 border border-white/10"
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        WELCOME TO E-SUMMIT '25
                    </motion.h2>

                    <motion.p
                        className="text-base md:text-lg text-gray-300 leading-relaxed mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Sharda University's E-Summit has been the <span className="text-white font-medium">hub of entrepreneurial spirit</span>,
                        groundbreaking ideas, and transformative leadership. This year, we unite visionaries,
                        industry leaders, and young innovators to <span className="text-white font-medium">redefine the future</span> of business and technology.
                    </motion.p>

                    <motion.div
                        className="flex flex-col md:flex-row justify-center gap-3 md:gap-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium text-sm md:text-base">
                            📅 16-17 APRIL 2025
                        </div>
                        <div className="px-4 py-2 md:px-6 md:py-3 border border-orange-400 text-orange-400 rounded-full font-medium text-sm md:text-base">
                            💡 COLLABORATE · INNOVATE · CONQUER
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default HomePage;