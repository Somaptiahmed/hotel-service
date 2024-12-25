
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
     
      <div className="w-1/2 lg:w-1/3 mb-6">
        <div className="animate-pulse text-6xl font-bold">404</div>
      </div>
      <h1 className="text-4xl font-bold mt-6">Oops! Page Not Found</h1>
      <p className="text-gray-600 text-lg mt-4 text-center">
        The page you are looking for might have been removed, renamed, or temporarily unavailable.
      </p>
      <Link to="/">
        <button className="mt-6 px-6 py-3 bg-purple-700 text-white rounded-lg text-lg hover:bg-purple-900">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;