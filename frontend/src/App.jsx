import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Events from "./pages/Events";
import Workshops from "./pages/Workshops";
import SpeakersPage from "./pages/SpeakersPage";


function App() {

  return (
    <>
      <Navbar />
      <HomePage />
      <Events />
      <Workshops />
      <SpeakersPage />
      <Footer />
    </>
  )
}

export default App
