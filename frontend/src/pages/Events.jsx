import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

const Events= () => {
  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-gray-950 to-black px-4">
      {/* Title */}
      <motion.h1 
        className="text-5xl md:text-6xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
          E-SUMMIT EVENTS
        </span>
        <div className="w-24 h-1.5 mx-auto mt-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" />
      </motion.h1>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <TiltCard key={index} event={event} index={index} />
        ))}
      </div>
    </section>
  );
};

const TiltCard = ({ event, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Tilt transformation
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  const boxShadow = useTransform(
    y,
    [-100, 100],
    [
      "0 25px 45px -15px rgba(0,0,0,0.5)",
      "0 -25px 45px -15px rgba(0,0,0,0.5)"
    ]
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="relative h-[400px] rounded-2xl overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        boxShadow,
        transformStyle: "preserve-3d"
      }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Background Image with overlay */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${event.image})` }}
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="absolute inset-0 bg-black/60"
          animate={{
            opacity: isHovered ? 0.7 : 0.9
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-between text-white" style={{ transformStyle: "preserve-3d" }}>
        <div>
          <motion.h3 
            className="text-2xl font-bold mb-2"
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {event.title}
          </motion.h3>
          <motion.p 
            className="text-sm opacity-80 mb-4"
            animate={{ y: isHovered ? -3 : 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            {event.date}
          </motion.p>
        </div>

        <motion.p 
          className="text-lg mb-6"
          animate={{ 
            y: isHovered ? -3 : 0,
            opacity: isHovered ? 1 : 0.9
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {event.description}
        </motion.p>

        <div className="mt-auto">
          <motion.div
            className="flex items-center gap-2 mb-4"
            animate={{ y: isHovered ? -3 : 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{event.time}</span>
          </motion.div>

          <motion.button
            className="px-6 py-2 bg-white text-black rounded-full font-medium"
            animate={{ y: isHovered ? -3 : 0 }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#fbbf24", // yellow-400
              color: "#000"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Register Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};



const events = [
  {
    date: "April 16, 2025",
    title: "Grand Opening",
    time: "9:00 AM - 5:30 PM",
    description: "Keynote speech, startup exhibition, ideathon competition, pitching competition, and cultural events.",
    image: "/events/1.avif"
  },
  {
    date: "April 16, 2025",
    title: "Vyapar Mela",
    time: "11:00 AM - 4:00 PM",
    description: "Startup Exhibition & Business Stalls showcasing innovative products and services.",
    image: "/events/2.jpg"
  },
  {
    date: "April 16, 2025",
    title: "IDEASURGE 2.0",
    time: "11:00 AM - 4:00 PM",
    description: "Ideathon Competition for budding entrepreneurs to pitch their innovative ideas.",
    image: "/events/3.jpg"
  },
  {
    date: "April 16, 2025",
    title: "Sharda Tank",
    time: "11:00 AM - 4:00 PM",
    description: "Pitching Competition where startups present to investors and industry experts.",
    image: "/events/4.jpg"
  },
  {
    date: "April 16, 2025",
    title: "PRENEURS TALK",
    time: "11:00 AM - 1:00 PM",
    description: "Success Stories of Entrepreneurs sharing their journey and insights.",
    image: "/events/5.jpg"
  },
  {
    date: "April 17, 2025",
    title: "Business Plan Competition",
    time: "10:00 AM - 4:00 PM",
    description: "Competition for the most viable and innovative business plans.",
    image: "/events/6.jpg"
  },
  {
    date: "April 17, 2025",
    title: "Logo & Brand Challenge",
    time: "10:00 AM - 4:00 PM",
    description: "Competition to design the most creative and effective brand identities.",
    image: "/events/7.jpg"
  },
  {
    date: "April 17, 2025",
    title: "Closing Ceremony",
    time: "4:00 PM - 5:00 PM",
    description: "Final remarks, awards distribution, and conclusion of E-Summit 2025.",
    image: "/events/8.jpg"
  }
];

export default Events;