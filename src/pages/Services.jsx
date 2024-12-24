import React, { useEffect, useState } from "react";


import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Services = () => {
    const [services, setServices] = useState([]);
    
    

    useEffect(() => {
        // Fetch services from the API
        const fetchServices = async () => {
          try {
            const response = await fetch("http://localhost:5000/services");
            const data = await response.json();
            setServices(data);
          } catch (error) {
            console.error("Error fetching services:", error);
          }
        };
    
        fetchServices();
      }, []);
      return (
        
        <div>
            <Navbar></Navbar>

<div className="container mx-auto py-10 w-11/12 ">
          <h1 className="text-3xl font-bold text-center mb-6">Available Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service._id}
                className="border rounded-lg shadow-md overflow-hidden bg-white"
              >
                <img
                  src={service.serviceImage}
                  alt={service.serviceTitle}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-purple-800">
                    {service.serviceTitle}
                  </h2>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                  <p className="mt-2">
                    <strong>Category:</strong> {service.category}
                  </p>
                  <p className="mt-1">
                    <strong>Price:</strong>{" "}
                    {service.price === 0 ? "Free" : `${service.price}`}
                  </p>
                 

<Link to={`/serviceDetail/${service._id}`}>
  <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">
    See Details
  </button>
</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      );
    
};

export default Services;



