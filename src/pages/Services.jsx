

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => {
  const [services, setServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    // Fetch services from the API
    const fetchServices = async () => {
      try {
        const response = await fetch("https://assignment-11-server-site-a1qjtp8vc-somaptis-projects.vercel.app//services");
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  // Filter services based on the search query
  const filteredServices = services.filter((service) =>
    service.serviceTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10 w-11/12">
        <h1 className="text-3xl font-bold text-center mb-6">Available Services</h1>

        {/* Search Input */}
        <div className="mb-6 text-center">
          <input
            type="text"
            placeholder="Search by Service Title..."
            className="px-4 py-2 border rounded-lg w-full max-w-md mx-auto"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service._id}
              className="border rounded-lg shadow-md overflow-hidden bg-white flex flex-col"
            >
              <img
                src={service.serviceImage}
                alt={service.serviceTitle}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <motion.h2
                    className="text-xl font-semibold text-purple-800"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3 }}
                  >
                    {service.serviceTitle}
                  </motion.h2>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                  <p className="mt-2">
                    <strong>Category:</strong> {service.category}
                  </p>
                  <p className="mt-1">
                    <strong>Price:</strong>{" "}
                    {service.price === 0 ? "Free" : `${service.price}`}
                  </p>
                </div>
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



