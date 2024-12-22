// import React, { useEffect, useState } from "react";

// const FeaturedService = () => {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/services");
//         const data = await response.json();

//         // Sort services by price in descending order and get the top 6
//         const topServices = data
//           .sort((a, b) => b.price - a.price)
//           .slice(0, 6);
//         setServices(topServices);
//       } catch (error) {
//         console.error("Error fetching services:", error);
//       }
//     };

//     fetchServices();
//   }, []);

//   return (
//     <div className="container mx-auto py-10 w-8/12 ">
//        <h2 className="text-4xl font-bold text-center text-blue-950 mb-4">
//         Discover Our Premium Services
//       </h2>
//       <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
//         Experience the best services Cox's Bazar has to offer! From luxurious accommodations to thrilling adventures, our featured services are tailored to provide you with unforgettable moments.
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {services.map((service) => (
//           <div
//             key={service._id}
//             className="border rounded-lg shadow-md overflow-hidden bg-white"
//           >
//             <img
//               src={service.serviceImage}
//               alt={service.serviceTitle}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-purple-800">
//                 {service.serviceTitle}
//               </h3>
//               <p className="text-gray-600 mt-2">{service.description}</p>
//               <p className="mt-2">
//                 <strong>Category:</strong> {service.category}
//               </p>
//               <p className="mt-1">
//                 <strong>Price:</strong>{" "}
//                 {service.price === 0 ? "Free" : `$${service.price}`}
//               </p>
//               <button
//                 className="mt-4 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
//                 onClick={() => alert(`Details of ${service.serviceTitle}`)}
//               >
//                 See Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedService;


import React, { useEffect, useState } from "react";

const FeaturedService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:5000/services");
        const data = await response.json();
        setServices(data); // The server already returns the top 6 services
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="container mx-auto py-10 w-8/12">
      <h2 className="text-4xl font-bold text-center text-blue-950 mb-4">
        Discover Our Premium Services
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Experience the best services Cox's Bazar has to offer! From luxurious accommodations to thrilling adventures, our featured services are tailored to provide you with unforgettable moments.
      </p>
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
              <h3 className="text-xl font-semibold text-blue-950">
                {service.serviceTitle}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <p className="mt-2">
                <strong>Category:</strong> {service.category}
              </p>
              <p className="mt-1">
                <strong>Price:</strong>{" "}
                {service.price === 0 ? "Free" : `$${service.price}`}
              </p>
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
                onClick={() => alert(`Details of ${service.serviceTitle}`)}
              >
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedService;
