import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
  const { userLogin, setUser, user, logOut } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const emailValue = form.email.value;
    const password = form.password.value;

    try {
      await userLogin(emailValue, password);
      toast.success("Login successful!", {
        position: "top-center",
      });
      navigate("/");
    } catch (err) {
      setError("Login failed. Please try again.");
      toast.error(error, {
        position: "top-center",
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      const user = result.user;
      setUser(user);
      toast.success(`Welcome, ${user.displayName}!`, {
        position: "top-center",
      });
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Google login failed. Please try again.", {
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center bg-gray-100 w-11/12 mx-auto">
        <div className="card bg-white w-full max-w-md p-10 shadow-lg rounded">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
            <div className="form-control mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                name='email'
              />
            </div>
            <div className="mb-6 form-control">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name='password'
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Login
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
          <div className="divider mt-6">OR</div>
          <div className="form-control">
            <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
              Continue with Google
            </button>
          </div>
          <p className="text-center mt-6">
            Don’t have an account?{" "}
            <Link to="/auth/register" className="text-red-700 underline font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;