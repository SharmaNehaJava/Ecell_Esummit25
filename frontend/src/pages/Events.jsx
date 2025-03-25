import { motion } from "framer-motion";
import "@fontsource/montserrat/800.css"; // For the heading font

export default function EventsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-950 to-black">
      {/* Beautiful Heading */}
      <motion.h1 
        className="font-montserrat font-extrabold text-5xl md:text-6xl text-center mb-12 
                  bg-gradient-to-r from-yellow-200 to-red-500 bg-clip-text text-transparent
                  uppercase tracking-wider relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        E-SUMMIT EVENTS
        <div className="w-24 h-1.5 mx-auto mt-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500"></div>
      </motion.h1>

      {/* Events Cards */}
      <div className="mx-auto max-w-md px-4 pb-24 w-full">
        {events.map((event, i) => (
          <Card key={`${event.day}-${i}`} event={event} i={i} />
        ))}
      </div>
    </section>
  );
}

function Card({ event, i }) {
  const hueA = (i * 40) % 360;
  const hueB = (i * 40 + 30) % 360;
  const background = `linear-gradient(306deg, hsl(${hueA}, 100%, 50%), hsl(${hueB}, 100%, 50%)`;

  return (
    <motion.div
      className="overflow-hidden flex justify-center items-center relative pt-5 -mb-28"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div 
        className="absolute top-0 left-0 right-0 bottom-0"
        style={{ 
          background,
          clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`
        }} 
      />
      <motion.div 
        className="w-72 h-[430px] flex justify-center items-center rounded-2xl bg-gray-50 shadow-lg origin-[10%_60%]"
        variants={cardVariants}
      >
        <div className="p-5 text-center h-full flex flex-col justify-between">
          <h3 className="m-0 text-gray-800 text-xl font-bold">{event.day}</h3>
          <p className="my-1 text-gray-600 text-sm">{event.date}</p>
          <h2 className="my-2 text-gray-900 text-2xl font-bold">{event.title}</h2>
          <p className="my-1 text-gray-700">⏰ {event.time}</p>
          <p className="my-2 text-gray-600 text-sm">{event.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

// Event Data
const events = [
  {
    day: "Day 1",
    date: "April 16, 2025",
    title: "Grand Opening",
    time: "9:00 AM - 5:30 PM",
    description: "Keynote speech, startup exhibition, ideathon competition, pitching competition, and cultural events."
  },
  {
    day: "Day 1",
    date: "April 16, 2025",
    title: "Vyapar Mela",
    time: "11:00 AM - 4:00 PM",
    description: "Startup Exhibition & Business Stalls showcasing innovative products and services."
  },
  {
    day: "Day 1",
    date: "April 16, 2025",
    title: "IDEASURGE 2.0",
    time: "11:00 AM - 4:00 PM",
    description: "Ideathon Competition for budding entrepreneurs to pitch their innovative ideas."
  },
  {
    day: "Day 1",
    date: "April 16, 2025",
    title: "Sharda Tank",
    time: "11:00 AM - 4:00 PM",
    description: "Pitching Competition where startups present to investors and industry experts."
  },
  {
    day: "Day 1",
    date: "April 16, 2025",
    title: "PRENEURS TALK",
    time: "11:00 AM - 1:00 PM",
    description: "Success Stories of Entrepreneurs sharing their journey and insights."
  },
  {
    day: "Day 2",
    date: "April 17, 2025",
    title: "Business Plan Competition",
    time: "10:00 AM - 4:00 PM",
    description: "Competition for the most viable and innovative business plans."
  },
  {
    day: "Day 2",
    date: "April 17, 2025",
    title: "Logo & Brand Challenge",
    time: "10:00 AM - 4:00 PM",
    description: "Competition to design the most creative and effective brand identities."
  },
  {
    day: "Day 2",
    date: "April 17, 2025",
    title: "Closing Ceremony",
    time: "4:00 PM - 5:00 PM",
    description: "Final remarks, awards distribution, and conclusion of E-Summit 2025."
  }
];