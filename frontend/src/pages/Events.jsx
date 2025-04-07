import SpotlightCard from "../components/SpotlightCard";
import { motion } from "framer-motion";

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

export default function EventsPage() {
  return (
    <section className="min-h-screen text-white py-10 px-4 bg-gradient-to-b from-black to-gray-900">
      {/* Title */} 
      <motion.h1 
        className="text-5xl md:text-6xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-800 bg-clip-text text-transparent">
          EVENTS
        </span>
        {/* <div className="w-24 h-1.5 mx-auto mt-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" /> */}
      </motion.h1>

      {/* Events Grid */} 
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <SpotlightCard
            key={index}
            spotlightColor="rgba(0, 229, 255, 2.9)"
            className="h-[400px] text-white bg-cover bg-center relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center rounded-3xl opacity-80"
              style={{ backgroundImage: `url(${event.image})` }}
            >
              <div className="absolute inset-0 bg-black/60 rounded-3xl" />
            </div>

            <div className="relative z-10 h-full p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-1">{event.title}</h3>
                <p className="text-sm opacity-80 mb-4">{event.date}</p>
              </div>

              <p className="text-base mb-6">{event.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{event.time}</span>
                </div>

                {/* <button className="px-5 py-2 bg-white text-black rounded-full font-medium hover:bg-yellow-400 transition">
                  Register Now
                </button> */}
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
