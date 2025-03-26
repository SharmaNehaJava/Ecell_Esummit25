import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SpeakersPage = () => {
  const [revealed, setRevealed] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  // Placeholder data (to be replaced with actual speakers later)
  const speakerPlaceholders = Array(8).fill({
    name: "Coming Soon",
    role: "Industry Leader",
    company: "Top Tech Company",
    topic: "Surprise Keynote",
    image: "/speaker-placeholder.svg" // Use a generic silhouette image
  });

  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-gray-900 to-black px-4">
      {/* Mystery Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          {revealed ? "OUR SPEAKERS" : "WHO'S COMING?"}
        </h1>
        <motion.p 
          className="text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.5 }}
        >
          {revealed ? "Meet the visionaries" : "A stellar lineup of industry pioneers awaits..."}
        </motion.p>
        
        {!revealed && (
          <motion.button
            className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setRevealed(true)}
          >
            Reveal Speakers
          </motion.button>
        )}
      </motion.div>

      {/* Speakers Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <AnimatePresence>
          {speakerPlaceholders.map((speaker, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: revealed ? 1 : 0.3,
                y: revealed ? 0 : 20,
                filter: revealed ? "none" : "blur(2px)"
              }}
              transition={{ 
                duration: 0.5,
                delay: revealed ? index * 0.1 : 0,
                type: "spring"
              }}
              className="relative cursor-pointer"
              onClick={() => revealed && setSelectedSpeaker(speaker)}
            >
              {/* Mystery Card */}
              <div className="bg-gray-800 rounded-xl overflow-hidden h-full border border-gray-700 hover:border-pink-500 transition-all">
                <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  {revealed ? (
                    <motion.img 
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    />
                  ) : (
                    <div className="text-5xl">?</div>
                  )}
                </div>
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-bold mb-1"
                    animate={{ 
                      color: revealed ? "white" : "#9CA3AF",
                      fontSize: revealed ? "1.25rem" : "1.1rem"
                    }}
                  >
                    {speaker.name}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-400 text-sm"
                    animate={{ 
                      opacity: revealed ? 1 : 0.5
                    }}
                  >
                    {speaker.role}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Speaker Modal */}
      <AnimatePresence>
        {selectedSpeaker && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSpeaker(null)}
          >
            <motion.div 
              className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="aspect-video bg-gradient-to-r from-purple-900 to-pink-900 w-full" />
                <button 
                  className="absolute top-4 right-4 bg-black/50 rounded-full p-2"
                  onClick={() => setSelectedSpeaker(null)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-2">{selectedSpeaker.name}</h2>
                <p className="text-xl text-pink-400 mb-4">{selectedSpeaker.role} • {selectedSpeaker.company}</p>
                <p className="text-gray-300 mb-6">{selectedSpeaker.topic}</p>
                <p className="text-gray-400">
                  Speaker details will be revealed soon. Stay tuned for this exciting keynote!
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Countdown (optional) */}
      {!revealed && (
        <motion.div 
          className="mt-16 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>Speaker lineup will be announced on:</p>
          <div className="text-2xl font-mono mt-2 text-white">
            April 1, 2025
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default SpeakersPage;