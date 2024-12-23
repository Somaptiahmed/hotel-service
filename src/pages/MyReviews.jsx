// import React, { useEffect, useState } from "react";
// import Modal from "../components/Modal";
// import { toast } from "react-toastify";
// import Navbar from "../components/Navbar";

// const MyReviews = () => {
//   const [reviews, setReviews] = useState([]);
//   const [currentReview, setCurrentReview] = useState(null);
//   const [showUpdateModal, setShowUpdateModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/reviews");
//         const data = await response.json();
//         setReviews(data);
//       } catch (error) {
//         console.error("Error fetching reviews:", error);
//       }
//     };

//     fetchReviews();
//   }, []);

//   const handleUpdate = (review) => {
//     setCurrentReview(review);
//     setShowUpdateModal(true);
//   };

//   const handleDelete = (review) => {
//     setCurrentReview(review);
//     setShowDeleteModal(true);
//   };

//   const confirmUpdate = async (updatedReview) => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/reviews/${currentReview._id}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(updatedReview),
//         }
//       );

//       const result = await response.json();
//       if (result.modifiedCount > 0) {
//         setReviews((prev) =>
//           prev.map((review) =>
//             review._id === currentReview._id
//               ? { ...review, ...updatedReview }
//               : review
//           )
//         );
//         setShowUpdateModal(false);
//         toast.success("Review updated successfully!");
//       } else {
//         toast.error("Failed to update the review.");
//       }
//     } catch (error) {
//       console.error("Error updating review:", error);
//       toast.error("Error updating review.");
//     }
//   };

//   const confirmDelete = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/reviews/${currentReview._id}`,
//         {
//           method: "DELETE",
//         }
//       );

//       const result = await response.json();
//       if (result.deletedCount > 0) {
//         setReviews((prev) =>
//           prev.filter((review) => review._id !== currentReview._id)
//         );
//         setShowDeleteModal(false);
//         toast.success("Review deleted successfully!");
//       } else {
//         toast.error("Failed to delete the review.");
//       }
//     } catch (error) {
//       console.error("Error deleting review:", error);
//       toast.error("Error deleting review.");
//     }
//   };

//   return (
//     <div>
//         <Navbar></Navbar>
//         <div className="container mx-auto py-10">
//       <h1 className="text-3xl font-bold text-center mb-6">My Reviews</h1>

//       <div className="grid grid-cols-1 gap-6">
//         {reviews.map((review) => (
//           <div
//             key={review._id}
//             className="bg-white shadow-md rounded-md p-4 border"
//           >
//             <h2 className="text-xl font-bold">{review.serviceTitle}</h2>
//             <p className="text-gray-700">{review.text}</p>
//             <p className="text-yellow-500">Rating: {review.rating} / 5</p>
//             <div className="flex space-x-4 mt-4">
//               <button
//                 onClick={() => handleUpdate(review)}
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//               >
//                 Update
//               </button>
//               <button
//                 onClick={() => handleDelete(review)}
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {showUpdateModal && (
//         <Modal
//           onClose={() => setShowUpdateModal(false)}
//           onConfirm={(updatedData) =>
//             confirmUpdate({
//               ...currentReview,
//               ...updatedData,
//             })
//           }
//           title="Update Review"
//           content={
//             <div className="space-y-4">
//               <div>
//                 <label className="block font-bold">Service Title</label>
//                 <input
//                   type="text"
//                   value={currentReview.serviceTitle}
//                   readOnly
//                   className="w-full px-4 py-2 border rounded bg-gray-100"
//                 />
//               </div>
//               <div>
//                 <label className="block font-bold">Review</label>
//                 <textarea
//                   defaultValue={currentReview.text}
//                   className="w-full px-4 py-2 border rounded"
//                   onChange={(e) =>
//                     setCurrentReview((prev) => ({
//                       ...prev,
//                       text: e.target.value,
//                     }))
//                   }
//                 />
//               </div>
//               <div>
//                 <label className="block font-bold">Rating</label>
//                 <input
//                   type="number"
//                   defaultValue={currentReview.rating}
//                   min="1"
//                   max="5"
//                   className="w-full px-4 py-2 border rounded"
//                   onChange={(e) =>
//                     setCurrentReview((prev) => ({
//                       ...prev,
//                       rating: e.target.value,
//                     }))
//                   }
//                 />
//               </div>
//             </div>
//           }
//         />
//       )}

//       {showDeleteModal && (
//         <Modal
//           onClose={() => setShowDeleteModal(false)}
//           onConfirm={confirmDelete}
//           title="Delete Review"
//           message={`Are you sure you want to delete the review for "${currentReview.serviceTitle}"?`}
//         />
//       )}
//     </div>
//     </div>
//   );
// };

// export default MyReviews;


import React from 'react';
import Navbar from '../components/Navbar';

const MyReviews = () => {
    return (
        <div>
            <Navbar></Navbar>

            hello
        </div>
    );
};

export default MyReviews;