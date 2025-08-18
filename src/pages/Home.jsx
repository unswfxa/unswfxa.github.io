import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

import Home from "../assets/images/home.png";
import GroupHome from "../assets/images/group-home.png";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { HomeEventCard } from "../components/Card";

import { events } from "../data/eventsinfo";
import { blogs, newsletters } from "../data/publicationsinfo";

function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const contactRef = useRef(null);

  useEffect(() => {
    if (location.hash === "#contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  // data
  const upcoming = events.filter((e) => e.type === "upcoming" && e.year === "2025");
  const past = events.filter((e) => e.type === "past" && e.year === "2025");

  return (
    <div className="w-full flex flex-col">
      <Header />

      {/* Page content */}
      <main className="flex-grow flex flex-col justify-center items-center">
        <div className="w-[50%] h-auto pt-[120px]">
          <img src={Home} alt="Home" className="h-full w-auto mx-auto" />
        </div>

        <div className="w-[85%] h-auto pt-8">
          <img src={GroupHome} alt="Home" className="h-full w-auto mx-auto" />
        </div>

        <div className="w-full px-15 md:px-20 py-10 text-center mx-auto font-medium">
          <p>
            At UNSW Forex Association (FXA), we distinguish ourselves by supporting students through each stage of their
            professional journey with intentional, impactful development.
          </p>
          <br></br>
          <p>
            From tailored educational workshops, academic support, peer connection and case competitions to strategic
            industry engagement, we empower emerging leaders in commerce and finance to grow with purpose and
            confidence.
          </p>
        </div>
        <div className="pb-[60px] transform transition-transform duration-300 hover:scale-105">
          <button
            onClick={() => navigate("/aboutus")}
            className="w-[170px] h-[56px] font-bold text-white text-lg rounded-md"
            style={{
              background: "linear-gradient(135deg, #56CDD3 0%, #3596E3 100%)",
            }}
          >
            Find Out More
          </button>
        </div>

        {/* Events */}
        <div className="w-full flex justify-center">
          <div className="bg-[#F7F7F7] w-full py-16 px-8 flex flex-col items-center rounded-4xl">
            <h2 className="text-3xl font-bold mb-12">Our Events</h2>
            <HomeEventCard array={[upcoming[0], past[0]]} />
            {/* More Events Button */}
            <div className="mt-12 transform transition-transform duration-300 hover:scale-105">
              <button
                onClick={() => navigate("/events")}
                className="font-bold text-white text-lg rounded-md"
                style={{
                  background: "linear-gradient(135deg, #56CDD3 0%, #3596E3 100%)",
                }}
              >
                More Events
              </button>
            </div>
          </div>
        </div>

        {/* Blogs */}
        <div className="w-full flex justify-center pt-20 px-10">
          <div className="w-full px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Recent Blogs */}
              <div className="transform transition-transform duration-300 hover:scale-105">
                <h2 className="text-2xl font-bold mb-4">Recent Blogs</h2>
                <div className="bg-gradient-to-br from-[#D6EBF4] to-[#E2F1F7] h-[180px] w-full rounded-xl mb-4"></div>
                <h3 className="text-lg font-semibold">Blogs coming soon!</h3>
                <p className="text-sm text-gray-500">Published: N/A</p>
                <p className="text-sm text-gray-600 mt-1">Stay tuned!</p>
              </div>

              {/* Recent Newsletters */}
              <div className="transform transition-transform duration-300 hover:scale-105">
                <h2 className="text-2xl font-bold mb-4">Recent Newsletters</h2>
                <div className="bg-gradient-to-br from-[#D6EBF4] to-[#E2F1F7] h-[180px] w-full rounded-xl mb-4"></div>
                <h3 className="text-lg font-semibold">Newsletters coming soon!</h3>
                <p className="text-sm text-gray-500">Published: N/A</p>
                <p className="text-sm text-gray-600 mt-1">Stay tuned!</p>
              </div>
            </div>

            {/* See All Publications Button */}
            <div className="flex justify-center mt-12 pb-[50px] transform transition-transform duration-300 hover:scale-105">
              <button
                onClick={() => navigate("/publications")}
                className="font-bold text-white text-md rounded-md"
                style={{
                  background: "linear-gradient(135deg, #56CDD3 0%, #3596E3 100%)",
                }}
              >
                See All Publications!
              </button>
            </div>
          </div>
        </div>
        <div ref={contactRef} className="w-full">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
