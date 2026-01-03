import React from "react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <>
      <div
        className="bg-primary border border-accent py-8 px-4 rounded-3xl gap-1 flex flex-col items-center justify-between hover:scale-105 hover:shadow-lg transition-transform duration-300"
      >
        <div className="mb-6 text-white flex justify-center">
          {service.icon}
        </div>
        <h3 className="text-md font-poppins font-bold lg:text-md  text-white mb-3">
          {service.title}
        </h3>
        <p className="text-white mb-5 text-center max-w-60 font-medium text-sm">
          {service.description}
        </p>
        <button className="text-white font-medium mt-auto hover:underline flex items-center gap-2">
          Explore Service →
        </button>
      </div>
    </>
  );
};

export default ServiceCard;

