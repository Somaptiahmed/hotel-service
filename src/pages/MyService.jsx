
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const MyService = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedCategory, setUpdatedCategory] = useState("");
  const [updatedPrice, setUpdatedPrice] = useState("");

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
    setUpdatedTitle(service.serviceTitle);
    setUpdatedCategory(service.category);
    setUpdatedPrice(service.price);
    setShowUpdateModal(true);
  };

  const confirmUpdate = async () => {
    const updatedService = {
      serviceTitle: updatedTitle,
      category: updatedCategory,
      price: parseFloat(updatedPrice),
    };

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

  // const confirmDelete = async () => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:5000/services/${currentService._id}`,
  //       {
  //         method: "DELETE",
  //       }
  //     );
  //     const result = await response.json();
  //     if (result.deletedCount > 0) {
  //       setServices(services.filter((service) => service._id !== currentService._id));
  //       setFilteredServices(
  //         filteredServices.filter((service) => service._id !== currentService._id)
  //       );
  //       setShowDeleteModal(false);
  //     } else {
  //       console.error("Error: Service could not be deleted.");
  //     }
  //   } catch (error) {
  //     console.error("Error deleting service:", error);
  //   }
  // };
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
      if (response.ok && result.deletedCount > 0) {
        setServices(services.filter((service) => service._id !== currentService._id));
        setFilteredServices(
          filteredServices.filter((service) => service._id !== currentService._id)
        );
        setShowDeleteModal(false);
        
        // Show success toast
        toast.success("Service deleted successfully!");
      } else {
        console.error("Error: Service could not be deleted.");
      }
    } catch (error) {
      console.error("Error deleting service:", error);
      toast.error("Failed to delete service. Please try again.");
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
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => handleUpdate(service)}
                  >
                    Update
                  </button>
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
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-2xl mb-4">Update Service</h2>
            <input
              type="text"
              className="w-full mb-4 p-2 border rounded"
              placeholder="Service Title"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <input
              type="text"
              className="w-full mb-4 p-2 border rounded"
              placeholder="Category"
              value={updatedCategory}
              onChange={(e) => setUpdatedCategory(e.target.value)}
            />
            <input
              type="number"
              className="w-full mb-4 p-2 border rounded"
              placeholder="Price"
              value={updatedPrice}
              onChange={(e) => setUpdatedPrice(e.target.value)}
            />
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setShowUpdateModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={confirmUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {/* {showDeleteModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-2xl mb-4">Delete Service</h2>
            <p className="mb-6">Are you sure you want to delete this service?</p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )} */}

      {/* Delete Confirmation Modal */}
{showDeleteModal && (
  <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded shadow-lg w-96">
      <h2 className="text-2xl mb-4">Delete Service</h2>
      <p className="mb-6">Are you sure you want to delete this service?</p>
      <div className="flex justify-end space-x-4">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => setShowDeleteModal(false)}
        >
          Cancel
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={confirmDelete}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default MyService;



