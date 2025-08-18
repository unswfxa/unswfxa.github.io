import { useState } from "react";
import emailjs from "emailjs-com";
import MessageSent from "../components/MessageSent";
import Fb from "../assets/images/fb.png";
import Insta from "../assets/images/insta.png";
import LinkedIn from "../assets/images/linkedin.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isPopupVisible, setPopupVisible] = useState(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid = formData.firstName && formData.lastName && isValidEmail(formData.email) && formData.message;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        message: `${formData.message}\n\nFrom: ${formData.firstName} ${formData.lastName}`,
      };

      await emailjs.send(
        "service_ugh8pew", // e.g., service_xxx
        "template_yw8ggn6", // e.g., template_yyy
        templateParams,
        "oRRvVOUHvcGVvNBM1" // e.g., user_zzz or your public key from EmailJS
      );

      setPopupVisible(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS failed", err);
    }
  };

  return (
    <div className="w-full flex justify-center py-[20px] rounded-md">
      <div className="w-full bg-[rgb(247,247,247)] relative py-[50px] rounded-4xl">
        <h2 className="text-3xl font-bold text-center mb-2 px-15">How to get in touch with us?</h2>
        <br />
        <p className="text-center mb-12 px-15">We are an ambitious association and look forward to working with you!</p>

        {/* Join and Socials */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
          {/* Join SpArc */}
          <div className="text-center">
            <p className="font-semibold text-lg mb-2">Join us on SpArc</p>
            <div className="transform transition-transform duration-300 hover:scale-105">
              <button
                onClick={() =>
                  window.open(
                    "https://www.arc.unsw.edu.au/get-involved/opportunity?name=UNSW%20Forex%20Association",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="inline-block bg-[#0A58CA] text-white font-bold py-2 px-6 rounded-md"
              >
                Join Here!
              </button>
            </div>
          </div>

          {/* Social Icons */}
          <div className="text-center">
            <p className="font-semibold text-lg mb-2">Follow our Socials</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61574695567222"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-110"
              >
                <img src={Fb} alt="Facebook" className="h-10" />
              </a>
              <a
                href="https://www.instagram.com/unswfxa"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-110"
              >
                <img src={Insta} alt="Instagram" className="h-10" />
              </a>
              <a
                href="https://www.linkedin.com/company/unsw-forex-association/posts/?feedView=all&viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-110"
              >
                <img src={LinkedIn} alt="LinkedIn" className="h-10" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <div className="text-center mb-4">
            <h3 className="text-xl font-semibold mb-1">Contact Us</h3>
            <a href="mailto:forexunsw@gmail.com" className="text-blue-600">
              forexunsw@gmail.com
            </a>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-10 md:px-20">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 col-span-1"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 col-span-1"
            />

            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="border rounded-md p-2 col-span-2"
            />

            <textarea
              name="message"
              placeholder="Enter your question or message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="border rounded-md p-2 col-span-2"
            />

            <div className="col-span-2 text-center ">
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-[200px] h-[48px] font-bold rounded-md transition-transform duration-300 ${
                  isFormValid ? "bg-black text-white hover:scale-105" : "bg-gray-300 text-gray-600 cursor-not-allowed"
                }`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Popup */}
        {isPopupVisible && <MessageSent onClose={() => setPopupVisible(false)} />}
      </div>
    </div>
  );
}
