
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const FeaturedService = ({ isLoggedIn }) => {
//   const [services, setServices] = useState([]);


 

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/featured-services");
//         if (!response.ok) {
//           throw new Error("Failed to fetch featured services");
//         }
//         const data = await response.json();
//         setServices(data);
//       } catch (error) {
//         console.error("Error fetching featured services:", error);
//       }
//     };

//     fetchServices();
//   }, []);

//   return (
//     <div className="container mx-auto py-10 w-8/12">
//       <h2 className="text-4xl font-bold text-center text-blue-950 mb-4">
//         Discover Our Premium Services
//       </h2>
//       <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
//         Experience the most luxurious and premium services Cox's Bazar has to offer. Our featured services ensure unforgettable moments tailored for your comfort and thrill.
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {services.length > 0 ? (
//           services.map((service, index) => (
//             <div
//               key={service._id}
//               className="border rounded-lg shadow-md overflow-hidden bg-white"
//             >
//               <img
//                 src={service.serviceImage}
//                 alt={service.serviceTitle}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <motion.h3
//                   className="text-xl font-semibold text-blue-950"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 3,
//                     delay: index * 0.2,
//                   }}
//                 >
//                   {service.serviceTitle}
//                 </motion.h3>
//                 <p className="text-gray-600 mt-2">{service.description}</p>
//                 <p className="mt-1">
//                   <strong>Price:</strong>{" "}
//                   {service.price === 0 ? "Free" : `$${service.price}`}
//                 </p>
//                 <Link to={`/serviceDetail/${service._id}`}>
//                 <motion.button
//                   className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
                 
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   See Details
//                 </motion.button>
//                 </Link>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FeaturedService;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FeaturedService = ({ isLoggedIn }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:5000/featured-services");
        if (!response.ok) {
          throw new Error("Failed to fetch featured services");
        }
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching featured services:", error);
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
        Experience the most luxurious and premium services Cox's Bazar has to offer. Our featured services ensure unforgettable moments tailored for your comfort and thrill.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.length > 0 ? (
          services.map((service, index) => (
            <div
              key={service._id}
              className="border rounded-lg shadow-md overflow-hidden bg-white flex flex-col justify-between"
            >
              <img
                src={service.serviceImage}
                alt={service.serviceTitle}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-grow">
                <motion.h3
                  className="text-xl font-semibold text-blue-950"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                  }}
                >
                  {service.serviceTitle}
                </motion.h3>
                <p className="text-gray-600 mt-2 line-clamp-3">
                  {service.description}
                </p>
                <p className="mt-2">
                  <strong>Price:</strong>{" "}
                  {service.price === 0 ? "Free" : `$${service.price}`}
                </p>
              </div>
              <div className="p-4 flex justify-center">
                <Link to={`/serviceDetail/${service._id}`}>
                  <motion.button
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-full max-w-[150px]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    See Details
                  </motion.button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedService;
