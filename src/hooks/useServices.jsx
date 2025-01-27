import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((response) => response.json())
      .then((data) => setService(data));
  }, []);
  return services;
};

export default useServices;
