import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Underline from "../Underline";
import { services } from "../../utils/constant";

const Services = () => {
  return (
    <section
      className="w-full px-4 sm:px-8 lg:px-16 bg-background text-text transition-colors duration-500 min-h-screen mb-20 xl:mb-0"
      id="services"
    >
      <div className="flex justify-center items-center gap-2">
        <h2 className="font-extrabold font-merriweather text-4xl md:text-6xl py-4 opacity-50 ">
          Services
        </h2>
        <Underline />
      </div>

      <h3 className="text-text font-merriweather text-xl md:text-2xl py-4 text-center opacity-90 mb-12 ">
        A brief of Offering services
      </h3>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 p-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-background text-text p-6 rounded-md shadow-lg transform transition-all ease-in-out duration-300 hover:scale-105 hover:shadow-xl hover:bg-secondary"
          >
            <div className="flex flex-col items-center text-center">
              <FontAwesomeIcon
                icon={service.icon}
                className="text-5xl mb-4 text-primary"
              />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm opacity-80">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
