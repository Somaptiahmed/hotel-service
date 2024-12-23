
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

const MyService = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentService, setCurrentService] = useState(null);

  useEffect(() => {
    // Fetch services from the API
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:5000/services");
        const data = await response.json();
        setServices(data);
        setFilteredServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      setFilteredServices(services);
    } else {
      const filtered = services.filter((service) =>
        service.serviceTitle.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredServices(filtered);
    }
  };

  const handleUpdate = (service) => {
    setCurrentService(service);
    setShowUpdateModal(true);
  };

 
  
  const confirmUpdate = async (updatedService) => {
    try {
      const response = await fetch(
        `http://localhost:5000/services/${currentService._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedService),
        }
      );
      const result = await response.json();
      if (result.modifiedCount > 0) {
        setServices((prev) =>
          prev.map((service) =>
            service._id === currentService._id
              ? { ...service, ...updatedService }
              : service
          )
        );
        setFilteredServices((prev) =>
          prev.map((service) =>
            service._id === currentService._id
              ? { ...service, ...updatedService }
              : service
          )
        );
        setShowUpdateModal(false);
      } else {
        console.error("Error: Service could not be updated.");
      }
    } catch (error) {
      console.error("Error updating service:", error);
    }
  };
  

  const handleDelete = (service) => {
    setCurrentService(service);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/services/${currentService._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      if (result.deletedCount > 0) {
        setServices(services.filter((service) => service._id !== currentService._id));
        setFilteredServices(
          filteredServices.filter((service) => service._id !== currentService._id)
        );
        setShowDeleteModal(false);
      } else {
        console.error("Error: Service could not be deleted.");
      }
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10 w-11/12">
        <h1 className="text-3xl font-bold text-center mb-6">My Services</h1>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            className="px-4 py-2 border rounded w-full"
            placeholder="Search services by title"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        {/* Services Table */}
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-purple-100">
              <th className="py-2 px-4 text-left">Service Title</th>
              <th className="py-2 px-4 text-left">Category</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.map((service) => (
              <tr key={service._id} className="border-b">
                <td className="py-2 px-4">{service.serviceTitle}</td>
                <td className="py-2 px-4">{service.category}</td>
                <td className="py-2 px-4">
                  {service.price === 0 ? "Free" : `$${service.price}`}
                </td>
                <td className="py-2 px-4 flex space-x-4">
                  {/* Update Button */}
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => handleUpdate(service)}
                  >
                    Update
                  </button>
                  {/* Delete Button */}
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleDelete(service)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      {showUpdateModal && (
        <Modal
          service={currentService}
          onClose={() => setShowUpdateModal(false)}
          onConfirm={confirmUpdate}
          title="Update Service"
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <Modal
          onClose={() => setShowDeleteModal(false)}
          onConfirm={confirmDelete}
          title="Delete Service"
          message={`Are you sure you want to delete the service "${currentService?.serviceTitle}"?`}
        />
      )}
    </div>
  );
};

export default MyService;



