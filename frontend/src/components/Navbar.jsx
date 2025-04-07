import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    let lastScrollY = 0;

    // Detect scroll direction
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setVisible(false); // Hide on scroll down
            } else {
                setVisible(true); // Show on scroll up
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Mobile menu animation variants
    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    };

    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={{ y: visible ? 0 : "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full bg-opacity-90 backdrop-blur-md z-50 shadow-md"
        >
            <div className="container mx-auto flex items-center justify-between ">

                {/* Logo - Left */}
                <img src="/logo.png" alt="E-Cell logo" className="h-20 w-20" />

                {/* Desktop Menu - Centered */}
                <ul className="hidden md:flex space-x-8 text-white text-lg font-medium mx-auto">
                    {["Home", "Events", "Workshops", "Speakers", "Sponsors", "Team"].map((item, index) => (
                        <motion.li
                            key={index}
                            whileHover={{ scale: 1.1, color: "#3B82F6" }} // Blue hover effect
                            className="cursor-pointer transition-all"
                        >
                            {item}
                        </motion.li>
                    ))}
                </ul>

                {/* Register Button - Right */}
                <motion.button
                    whileHover={{
                        scale: 1.1,
                        border:"1px solid #ffff00",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:block relative overflow-hidden border-2 border-blue-500 bg-transparent px-5 py-2 rounded-4xl font-semibold transition-all duration-300 ease-in-out group"
                >
                    {/* Always-shining gradient text */}
                    <span
                     className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-400 animate-shine font-bold group-hover:text-yellow-500">
                        Register
                    </span>

                    {/* Shiny layer */}
                    <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[2000ms] ease-in-out pointer-events-none" />
                </motion.button>


                {/* Mobile Menu Button */}
                <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        className="md:hidden bg-black text-white py-4"
                    >
                        <ul className="flex flex-col items-center space-y-4">
                            {["Home", "Events", "Workshops", "Speakers", "Sponsors", "Team"].map((item, index) => (
                                <li key={index} className="cursor-pointer text-lg" onClick={() => setIsOpen(false)}>
                                    {item}
                                </li>
                            ))}
                            {/* Register Button in Mobile Menu */}
                            <motion.button
                                whileHover={{ scale: 1.1, backgroundColor: "#3B82F6" }}
                                className="bg-white text-black px-4 py-2 rounded-lg font-medium transition-all"
                            >
                                Register
                            </motion.button>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
