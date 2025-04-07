import { useEffect } from "react";
import { animate, inView } from "framer-motion";
import Particles from "../components/Particles";

const Workshops = () => {
  useEffect(() => {
    inView(".workshop-content", (element) => {
      animate(
        element,
        { opacity: 1, x: [-100, 0] },
        { duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
      return () => animate(element, { opacity: 0, x: -100 });
    });

    inView(".workshop-image", (element) => {
      animate(
        element,
        { opacity: 1, x: [100, 0] },
        { duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
      return () => animate(element, { opacity: 0, x: 100 });
    });
  }, []);

  const workshops = [
    {
      title: "Virtual Stock Market",
      details: "Learn trading strategies in simulated environment with real market data analysis and risk management techniques.",
      time: "Day 1 • 11:30 AM - 4:00 PM",
      image: "/stock.jpg",
      color: "text-purple-400"
    },
    {
      title: "Startup Development Life Cycle",
      details: "From ideation to scaling, understand funding rounds, MVP development, and growth hacking strategies.",
      time: "Day 1 • 11:30 AM - 4:00 PM",
      image: "/life-cycle.jpg",
      color: "text-blue-400"
    },
    {
      title: "Advanced Startup Strategies",
      details: "Deep dive into investor pitching, valuation methods, and international expansion frameworks.",
      time: "Day 2 • 11:00 AM - 4:00 PM",
      image: "/Advanced.jpg",
      color: "text-emerald-400"
    },
    {
      title: "Marketing & Branding",
      details: "Master digital marketing funnels, brand positioning, and customer acquisition in competitive markets.",
      time: "Day 2 • 11:00 AM - 4:00 PM",
      image: "/marketing&Branding.jpg",
      color: "text-rose-400"
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Particle Background only for Workshop page */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
  
      {/* Workshop Content */}
      <div className="relative z-10">
        {/* Header */}
        <section className="flex flex-col justify-center items-center px-4 text-center pt-20">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            WORKSHOPS
          </h1>
          <p className="text-md text-gray-400 mt-4 mb-20 max-w-lg">
            Hands-on sessions with industry experts
          </p>
        </section>
  
        {/* Workshop Sections */}
        <div className="space-y-32 pb-32">
          {workshops.map((workshop, index) => (
            <section
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-12 px-6 md:px-20`}
            >
              <div className="workshop-content opacity-0 rounded-xl p-8 md:p-12 w-full md:w-1/2">
                <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${workshop.color}`}>
                  {workshop.title}
                </h2>
                <p className="text-gray-300 mb-6 text-base md:text-lg">{workshop.details}</p>
                <div className="flex items-center text-gray-400 mb-6">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {workshop.time}
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full text-white font-semibold hover:opacity-90 transition duration-300">
                  Register Now
                </button>
              </div>
  
              <div className="workshop-image opacity-0 w-full md:w-1/2 shadow-2xl rounded-xl overflow-hidden">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default Workshops;
