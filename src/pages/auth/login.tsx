import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "user@example.com", // Prefilled email
      password: "password123" // Prefilled password
    },
    onSubmit: (values) => {
      const dummyEmail = "user@example.com";
      const dummyPassword = "password123";

      // Check if the email and password match the dummy credentials
      if (values.email === dummyEmail && values.password === dummyPassword) {
        // Navigate to the dashboard
        navigate("/dashboard");
      } else {
        alert("Invalid email or password!");
      }
    }
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg flex w-full md:w-3/4 max-w-4xl">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign In</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="w-full px-4 py-2 border rounded-md text-gray-800"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="w-full px-4 py-2 border rounded-md text-gray-800"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full gradient-black bg-gradient-black text-white py-2 rounded-md"
            >
              Sign In
            </button>
            <div className="flex justify-between items-center mt-4 text-sm">
              <label>
                <input type="checkbox" className="mr-2" /> Remember Me
              </label>
              <Link to="#" className="text-yellow-400 hover:underline">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>

        {/* Right Section - Hidden on small devices */}
        <div className="hidden md:flex w-1/2 gradient-yellow text-white items-center justify-center rounded-r-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Welcome to Login</h2>
            <p className="mb-6">Don't have an account?</p>
            <button className="bg-white text-black-1 py-2 px-6 rounded-full hover:bg-gray-200">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
