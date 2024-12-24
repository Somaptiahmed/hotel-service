
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const ServiceDetails = ({ userEmail, userName, userPhoto }) => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    text: "",
    rating: 1, // Default rating
    userName: userName || "Anonymous",
    userPhoto: userPhoto || "",
    postedDate: new Date().toISOString(),
  });

  // Fetch service details and reviews from API
  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/services/${serviceId}`);
        const data = await response.json();
        setService(data);

        const reviewsResponse = await fetch(
          `http://localhost:5000/services/${serviceId}/reviews`
        );
        const reviewsData = await reviewsResponse.json();
        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching service details:", error);
      }
    };

    fetchServiceDetails();
  }, [serviceId]);

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      userName: newReview.userName || "Anonymous",
      userPhoto: newReview.userPhoto || "",
      text: newReview.text,
      rating: parseInt(newReview.rating, 10), // Ensure rating is a number
      userEmail: userEmail,
    };

    try {
      const response = await fetch(
        `http://localhost:5000/services/${serviceId}/reviews`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reviewData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success("Review posted successfully!");
        setReviews((prev) => [result.review, ...prev]);
        setNewReview({
          text: "",
          rating: 1,
          userName: userName || "Anonymous",
          userPhoto: userPhoto || "",
          postedDate: new Date().toISOString(),
        });
      } else {
        toast.error(result.message || "Failed to post review.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Error submitting review. Please try again later.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10 w-9/12">
        {service ? (
          <>
            <h1 className="text-3xl font-bold mb-4">{service.serviceTitle}</h1>
            <div className="flex space-x-4">
              <img
                src={service.serviceImage}
                alt={service.serviceTitle}
                className="w-1/3 h-auto rounded"
              />
              <div className="flex-1">
                <p><strong>Company:</strong> {service.companyName}</p>
                <p><strong>Description:</strong> {service.description}</p>
                <p><strong>Category:</strong> {service.category}</p>
                <p><strong>Price:</strong> {service.price === 0 ? "Free" : `$${service.price}`}</p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold">Reviews</h2>
              <p className="text-lg mt-2">Total Reviews: {reviews.length}</p>

              {reviews.length === 0 ? (
                <p>No reviews yet. Be the first to review this service!</p>
              ) : (
                reviews.map((review) => (
                  <div key={review._id} className="border-b py-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={review.userPhoto}
                        alt={review.userName}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-semibold">{review.userName}</p>
                        <p>Rating: {review.rating} / 10</p>
                        <p className="mt-2">{review.text}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Posted on: {new Date(review.postedDate).toLocaleDateString()}
                    </p>
                  </div>
                ))
              )}

              {/* Add Review Form */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold">Add Your Review</h3>
                <form onSubmit={handleReviewSubmit}>
                  <div className="mt-4">
                    <textarea
                      name="text"
                      value={newReview.text}
                      onChange={handleReviewChange}
                      rows="4"
                      className="w-full p-2 border rounded"
                      placeholder="Write your review"
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <p>Rating:</p>
                    <select
                      name="rating"
                      value={newReview.rating}
                      onChange={handleReviewChange}
                      className="p-2 border rounded"
                    >
                      {Array.from({ length: 10 }, (_, index) => (
                        <option key={index + 1} value={index + 1}>
                          {index + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="bg-purple-500 text-white px-6 py-2 rounded mt-4"
                  >
                    Add Review
                  </button>
                </form>
              </div>
            </div>
          </>
        ) : (
          <p>Loading service details...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetails;
