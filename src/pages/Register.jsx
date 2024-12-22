import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createNewUser, setUser, googleLogin } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Function to validate the password
  const validatePassword = (password) => {
    const newErrors = {};

    if (password.length < 6) {
      newErrors.passwordLength = "• Password must be at least 6 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
      newErrors.uppercase = "• Password must include at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      newErrors.lowercase = "• Password must include at least one lowercase letter.";
    }
    if (!/\d/.test(password)) {
      newErrors.number = "• Password must include at least one number.";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    // Validate inputs
    const passwordErrors = validatePassword(password);
    if (name.length < 5) {
      passwordErrors.name = "• Name must be at least 5 characters.";
    }
    if (Object.keys(passwordErrors).length > 0) {
      setErrors(passwordErrors);
      return;
    }

    try {
      const result = await createNewUser(email, password);
      const user = result.user;
      user.displayName = name; // Set display name manually if not handled in Firebase rules
      user.photoURL = photo; // Add photo manually for now
      setUser(user);

      toast.success(`Welcome, ${user.displayName || name}!`, {
        position: "top-center",
      });
      navigate("/");
    } catch (err) {
      console.error("Registration error:", err);
      toast.error("Registration failed. Please try again.", {
        position: "top-center",
      });
      setErrors({ register: "• Registration failed. Please try again." });
    }
  };

  // Handle Google login
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
      console.error("Google login error:", err);
      toast.error("Google login failed. Please try again.", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register Your Account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {Object.keys(errors).map((key) => (
            <p key={key} className="text-sm text-red-500">
              {errors[key]}
            </p>
          ))}
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <div className="divider mt-6">OR</div>
        <div className="form-control">
          <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
            Continue with Google
          </button>
        </div>
        <p className="text-center font-semibold mt-4">
          Already Have An Account?{" "}
          <Link className="text-red-500" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
