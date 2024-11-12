import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Underline from "../Underline";

const Contact = () => {
  const [nameInput, setNameInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    console.log(Array.from(e.target));
  }

  return (
    <div className="min-h-screen mt-12 md:mt-0 flex flex-col items-center bg-secondary-light dark:bg-secondary-dark text-primary-dark dark:text-primary-light px-4 sm:px-8 w-5/6 mx-auto">
      <div className="flex justify-center items-center gap-2">
        <h2 className="font-extrabold fonat-merriweather text-4xl md:text-6xl py-4 opacity-50 ">
          Contact Me
        </h2>
        <Underline />
      </div>

      <h3 className="text-text font-merriweather text-lg md:text-xl py-4 text-center opacity-90">
        I’m here to help with your projects, questions, or just to connect! Fill
        out the form below or reach out directly.
      </h3>

      <div className="w-full sm:max-w-4xl flex flex-col sm:flex-row sm:space-x-8 items-center mb-12 sm:mb-0 mt-12">
        {/* Contact Information */}
        <div className="w-full sm:w-1/2 flex flex-col items-start space-y-6">
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-2xl text-primary-dark dark:text-primary-light"
            />
            <p className="text-lg">Kolkata, West Bengal</p>
          </div>

          <div className="flex items-center space-x-4">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-2xl text-primary-dark dark:text-primary-light"
            />
            <a
              href="tel:+917980401499"
              className="text-lg hover:text-primary transition-colors"
            >
              +91 79804 01499
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-2xl text-primary-dark dark:text-primary-light"
            />
            <a
              href="mailto:skimranhussain4@gmail.com"
              className="text-lg hover:text-primary transition-colors"
            >
              skimranhussain4@gmail.com
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full sm:w-1/2 mt-8 sm:mt-0">
          <img src="/asset/QR.svg" alt="qr" ></img>
        </div>
      </div>
    </div>
  );
};

export default Contact;
