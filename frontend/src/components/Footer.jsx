const Footer = () => {
    return (
      <footer className="bg-black text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Logo & Description */}
          <div>
            <div className="flex mb-4">
            <img src="/sharda-logo.png" alt="Logo" className="h-12 mb-4" />
            <img src="/logo.png" alt="Logo" className="h-12 mb-4" />
            </div>
        
            <p className="text-sm">
            E-Summit Sharda University is one of North India's premier entrepreneurial festivals, organized by the Entrepreneurship Cell to inspire, innovate, and empower future leaders.
            </p>
          </div>
  
          {/* Middle Section - Navigation Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">EXPLORE</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Benefits</a></li>
              <li><a href="#" className="hover:text-white">How it works?</a></li>
              <li><a href="#" className="hover:text-white">Testimonials</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>
  
          {/* Right Section - Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-3">CONTACT US</h3>
            <p>esummit@iitr.ac.in</p>
            <p>+91 87505 89268</p>
            <p>+91 70162 04140</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
          Developed ❤️ by <a href="https://www.linkedin.com/in/nehasharma1782/" className="text-blue-500 underline" target="_blank">Neha Sharma</a> <br />
          © 2024 E-Summit Sharda University. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  