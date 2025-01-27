// import { useEffect, useState } from "react";
import useServices from "../../../hooks/useServices";
import ServicesCard from "./ServicesCard";

const Services = () => {
  // const [services, setServices] = useState();

  // useEffect(() => {
  //   fetch("http://localhost:5000/services")
  //     .then((response) => response.json())
  //     .then((data) => setServices(data))
  //     .catch((error) => console.error("Error:", error));
  // }, []);

  const services = useServices();

  return (
    <div className="mt-10 space-y-4">
      <h3 className="text-2xl text-orange-600 font-bold text-center">
        Our Services
      </h3>
      <h2 className="text-4xl font-bold text-center">Our Service Area</h2>
      <div className="text-center text-lg text-[#565555]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum et
          quaerat
        </p>
        <p>veritatis, reprehenderit id mollitia maxime dolor!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services?.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
