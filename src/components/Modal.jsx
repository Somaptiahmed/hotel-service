
// import React, { useState } from "react";

// const Modal = ({ onClose, onConfirm, title, service }) => {
//   const [updatedTitle, setUpdatedTitle] = useState(service?.serviceTitle || "");
//   const [updatedRating, setUpdatedRating] = useState(service?.rating_2 || "");

//   const handleSubmit = () => {
//     // Pass the updated data back to the parent
//     onConfirm({ serviceTitle: updatedTitle, rating_2: updatedRating });
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
//       <div className="bg-white p-6 rounded shadow-lg w-1/3">
//         <h2 className="text-xl font-bold mb-4">{title}</h2>
//         <form>
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2" htmlFor="serviceTitle">
//               Service Title
//             </label>
//             <input
//               id="serviceTitle"
//               type="text"
//               className="border px-4 py-2 rounded w-full"
//               value={updatedTitle}
//               onChange={(e) => setUpdatedTitle(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2" htmlFor="rating">
//               Rating
//             </label>
//             <input
//               id="rating"
//               type="number"
//               className="border px-4 py-2 rounded w-full"
//               value={updatedRating}
//               onChange={(e) => setUpdatedRating(e.target.value)}
//             />
//           </div>
//           <div className="flex justify-end space-x-4">
//             <button
//               type="button"
//               className="bg-gray-500 text-white px-4 py-2 rounded"
//               onClick={onClose}
//             >
//               Cancel
//             </button>
//             <button
//               type="button"
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//               onClick={handleSubmit}
//             >
//               Update
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Modal;


import React from "react";

const Modal = ({ onClose, onConfirm, title, message }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="mb-6">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
