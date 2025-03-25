import { useEffect } from 'react';
import { animate, inView } from 'framer-motion';

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
    <div className="bg-black text-white overflow-x-hidden">
      {/* Header */}
      <section className=" flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black ">
        <h1 className="pt-10 text-6xl md:text-8xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          WORKSHOPS
        </h1>
        <p className="text-md text-end text-gray-400 max-w-md  pb-20  ">
          Hands-on sessions with industry experts
        </p>
        
      </section>

      {/* Workshop Sections */}
      {workshops.map((workshop, index) => (
        <section 
          key={index}
          className={`h-1/2 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
        >
          {/* Content Side */}
          <div className="w-1/2 h-full flex flex-col justify-center p-12 workshop-content opacity-0">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${workshop.color}`}>
              {workshop.title}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              {workshop.details}
            </p>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-400">{workshop.time}</span>
            </div>
            <button className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-medium w-fit hover:opacity-90 transition-opacity">
              Register Now
            </button>
          </div>

          {/* Image Side */}
          <div className="w-1/2 h-full workshop-image opacity-0">
            <img 
              src={workshop.image} 
              alt={workshop.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Workshops;