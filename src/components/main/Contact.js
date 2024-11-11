import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Underline from "../Underline";

const Contact = () => {
  return (
    <div className="min-h-screen mt-12 md:mt-0 flex flex-col items-center bg-secondary-light dark:bg-secondary-dark text-primary-dark dark:text-primary-light px-4 sm:px-8">

      <div className="flex justify-center items-center gap-2">
        <h2 className="font-extrabold fonat-merriweather text-4xl lg:text-6xl py-4 opacity-50 ">
        Contact Me
        </h2>
        <Underline />
      </div>

      <h3 className="text-text font-merriweather text-lg lg:text-xl py-4 text-center opacity-90">
      I’m here to help with your projects, questions, or just to connect! Fill out the form below or reach out directly.
      </h3>

      <div className="w-full max-w-xl flex flex-col sm:flex-row sm:space-x-8 items-center mb-12">
        {/* Contact Information */}
        <div className="w-full sm:w-1/2 flex flex-col items-start space-y-6">
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-primary-dark dark:text-primary-light" />
            <p className="text-lg">Location: City, Country</p>
          </div>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faPhone} className="text-2xl text-primary-dark dark:text-primary-light" />
            <a href="tel:+1234567890" className="text-lg hover:text-primary transition-colors">+123 456 7890</a>
          </div>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-primary-dark dark:text-primary-light" />
            <a href="mailto:email@example.com" className="text-lg hover:text-primary transition-colors">email@example.com</a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full sm:w-1/2 mt-8 sm:mt-0">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md bg-primary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light focus:ring-2 focus:ring-primary outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md bg-primary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light focus:ring-2 focus:ring-primary outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 border rounded-md bg-primary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light focus:ring-2 focus:ring-primary outline-none"
            ></textarea>
            <button type="submit" className="py-2 px-4 bg-primary text-primary-light dark:bg-primary-light dark:text-primary-dark font-semibold rounded-md hover:bg-primary-dark dark:hover:bg-primary-light transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
