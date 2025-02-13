
// import React, { useState, useContext, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";
// import a11 from "../assets/a11.webp";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext); 
//   const navigate = useNavigate();
//   const location = useLocation(); 
//   const [isMenuOpen, setIsMenuOpen] = useState(false); 

//   // Dynamically change the browser title based on the current route
//   useEffect(() => {
//     const routeTitleMap = {
//       "/": "Home - Hotel Motel",
//       "/services": "Services - Hotel Motel",
//       "/addService": "Add Service - Hotel Motel",
//       "/myReviews": "My Reviews - Hotel Motel",
//       "/myService": "My Services - Hotel Motel",
//       "/auth/login": "Login - Hotel Motel",
//       "/auth/register": "Register - Hotel Motel",
//     };

//     const currentPath = location.pathname;
//     document.title = routeTitleMap[currentPath] || "Hotel Motel";
//   }, [location.pathname]);

//   const handleLogOut = async () => {
//     try {
//       await logOut(); 
//       navigate("/"); 
//     } catch (error) {
//       console.error("Error during logout:", error);
//     }
//   };

//   return (
//     <nav className="bg-slate-900 p-4 flex justify-between items-center h-24 sticky top-0 z-10">
      
//       <div className="text-white text-3xl font-bold flex">
//         <img src={a11} alt="Logo" className="w-24 h-11" />
//         <Link to="/">Hotel Motel</Link>
//       </div>

//       {/* Toggle Button for Small Screens */}
//       <div className="lg:hidden">
//         <button
//           className="text-white focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <svg
//             className="w-8 h-8"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             ></path>
//           </svg>
//         </button>
//       </div>

//       {/* Navigation Links */}
//       <div
//         className={`${
//           isMenuOpen ? "block" : "hidden"
//         } lg:flex flex-col lg:flex-row items-center gap-5 absolute lg:static top-16 left-0 w-full bg-slate-900 lg:bg-transparent lg:w-auto p-4 lg:p-0`}
//       >
//         <Link to="/" className="text-white text-xl">
//           Home
//         </Link>
//         <Link to="/services" className="text-white text-xl">
//           Services
//         </Link>

//         {/* User-specific Links */}
//         {user && (
//           <>
//             <Link to="/addService" className="text-white text-xl">
//               Add Service
//             </Link>
//             <Link to="/myReviews" className="text-white text-xl">
//               My Reviews
//             </Link>
//             <Link to="/myService" className="text-white text-xl">
//               My Services
//             </Link>
//           </>
//         )}
//       </div>

//       {/* User Profile */}
//       <div className="flex items-center gap-4">
//         {user ? (
//           <div className="flex items-center gap-2">
//             {/* Display User Photo and Name */}
//             {user.photoURL && (
//               <img
//                 src={user.photoURL}
//                 alt={user.displayName}
//                 className="w-10 h-10 rounded-full"
//               />
//             )}
//             <span className="text-white text-xl font-semibold">
//               {user.displayName || "User"}
//             </span>

//             {/* Logout Button */}
//             <button
//               onClick={handleLogOut}
//               className="bg-slate-500 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded"
//             >
//               Logout
//             </button>
//           </div>
//         ) : (
//           <div className="flex items-center gap-4">
//             {/* Login Link */}
//             <Link to="/auth/login" className="text-white font-semibold text-xl">
//               Login
//             </Link>
//             {/* Register Button */}
//             <Link to="/auth/register" className="text-white">
//               <button className="btn bg-white w-24 text-xl font-semibold">
//                 Register
//               </button>
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import a11 from "../assets/a11.webp";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const routeTitleMap = {
      "/": "Home - Hotel Motel",
      "/services": "Services - Hotel Motel",
      "/addService": "Add Service - Hotel Motel",
      "/myReviews": "My Reviews - Hotel Motel",
      "/myService": "My Services - Hotel Motel",
      "/auth/login": "Login - Hotel Motel",
      "/auth/register": "Register - Hotel Motel",
    };
    document.title = routeTitleMap[location.pathname] || "Hotel Motel";
  }, [location.pathname]);

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <nav className="bg-blue-900 w-full p-4 fixed top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={a11} alt="Logo" className="w-16 h-10" />
          <Link to="/" className="text-white text-3xl font-bold">Hotel Motel</Link>
        </div>

        {/* Toggle Button for Mobile */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`lg:flex ${isMenuOpen ? "block" : "hidden"} lg:static absolute bg-blue-900 w-full lg:w-auto top-16 left-0 p-4 lg:p-0`}>
          <Link to="/" className="text-white text-lg mx-2">Home</Link>
          <Link to="/services" className="text-white text-lg mx-2">Services</Link>
          {user && (
            <div className="relative">
              <button className="text-white text-lg mx-2" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                Dashboard ▼
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white shadow-lg py-2 rounded-md w-48 mt-2">
                  <Link to="/addService" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Add Service</Link>
                  <Link to="/myReviews" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">My Reviews</Link>
                  <Link to="/myService" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">My Services</Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* User Authentication */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-2">
              {user.photoURL && (
                <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full" />
              )}
              <span className="text-white text-lg font-semibold">{user.displayName || "User"}</span>
              <button
                onClick={handleLogOut}
                className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/auth/login" className="text-white text-lg font-semibold">Login</Link>
              <Link to="/auth/register">
                <button className="bg-white text-blue-900 px-4 py-2 rounded font-semibold">Register</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
