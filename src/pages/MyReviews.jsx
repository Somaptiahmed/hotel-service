

import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider"; 
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MyReviews = () => {
  const { user } = useContext(AuthContext); 
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null); 
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false); 
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); 
  const [deleteReviewId, setDeleteReviewId] = useState(null); 

  // Fetch reviews for the logged-in user
  useEffect(() => {
    if (user?.email) {
      const fetchReviews = async () => {
        try {
          const response = await fetch(`http://localhost:5000/reviews/user/${user.email}`);
          const data = await response.json();
          if (response.ok) {
            setReviews(data);
          } else {
            toast.error(data.message || "Failed to fetch reviews.");
          }
        } catch (error) {
          console.error("Error fetching reviews:", error);
          toast.error("Error fetching reviews. Please try again later.");
        }
      };

      fetchReviews();
    }
  }, [user?.email]);

  // Handle Update form submission
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    const updatedReview = {
      text: selectedReview.text,
      rating: selectedReview.rating,
    };

    try {
      const response = await fetch(`http://localhost:5000/reviews/${selectedReview._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedReview),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Review updated successfully");
        setReviews((prev) =>
          prev.map((review) =>
            review._id === selectedReview._id ? { ...review, ...updatedReview } : review
          )
        );
        setIsUpdateModalOpen(false);
        setSelectedReview(null); // Reset the selected review
      } else {
        toast.error(data.message || "Failed to update review.");
      }
    } catch (error) {
      console.error("Error updating review:", error);
      toast.error("Error updating review. Please try again later.");
    }
  };

  // Handle Delete Review
  const handleDeleteReview = async () => {
    try {
      const response = await fetch(`http://localhost:5000/reviews/${deleteReviewId}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Review deleted successfully");
        setReviews((prev) => prev.filter((review) => review._id !== deleteReviewId));
        setIsDeleteModalOpen(false);
      } else {
        toast.error(data.message || "Failed to delete review.");
      }
    } catch (error) {
      console.error("Error deleting review:", error);
      toast.error("Error deleting review. Please try again later.");
    }
  };

  return (
    <div>
        <Navbar></Navbar>
        <div className="container mx-auto py-10 w-9/12">
      <h1 className="text-3xl font-bold mb-4">My Reviews</h1>
      {reviews.length === 0 ? (
        <p>You haven't posted any reviews yet.</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border px-4 py-2">Service</th>
              <th className="border px-4 py-2">Rating</th>
              <th className="border px-4 py-2">Review</th>
              <th className="border px-4 py-2">Posted Date</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review._id}>
                <td className="border px-4 py-2">{review.serviceTitle}</td>
                <td className="border px-4 py-2">{review.rating}</td>
                <td className="border px-4 py-2">{review.text}</td>
                <td className="border px-4 py-2">
                  {new Date(review.postedDate).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => {
                      setSelectedReview(review);
                      setIsUpdateModalOpen(true);
                    }}
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      setDeleteReviewId(review._id);
                      setIsDeleteModalOpen(true);
                    }}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Update Review Modal */}
      {isUpdateModalOpen && selectedReview && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded shadow-lg w-96">
            <h2 className="text-2xl mb-4">Update Review</h2>
            <form onSubmit={handleUpdateSubmit}>
              <div className="mb-4">
                <textarea
                  value={selectedReview.text}
                  onChange={(e) => setSelectedReview({ ...selectedReview, text: e.target.value })}
                  rows="4"
                  className="w-full p-2 border rounded"
                  placeholder="Update your review"
                  required
                />
              </div>
              <div className="mb-4">
                <label>Rating:</label>
                <select
                  value={selectedReview.rating}
                  onChange={(e) =>
                    setSelectedReview({ ...selectedReview, rating: parseInt(e.target.value) })
                  }
                  className="w-full p-2 border rounded"
                >
                  {Array.from({ length: 10 }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end space-x-2">
  <button
    type="button"
    onClick={() => setIsUpdateModalOpen(false)}
    className="bg-gray-500 text-white px-4 py-2 rounded"
  >
    Cancel
  </button>
  <button
    type="submit"
    className="bg-blue-500 text-white px-4 py-2 rounded"
  >
    Update Review
  </button>
</div>

            </form>
          </div>
        </div>
      )}

        {/* Delete Review Confirmation Modal */}
        {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded shadow-lg w-96">
            <h2 className="text-2xl mb-4">Are you sure?</h2>
            <p className="mb-6">Do you want to delete this review? This action cannot be undone.</p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteReview}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete Review
              </button></div>
          </div>
        </div>
      )}
    </div>
        <Footer></Footer>
    </div>
  );
};

export default MyReviews;










