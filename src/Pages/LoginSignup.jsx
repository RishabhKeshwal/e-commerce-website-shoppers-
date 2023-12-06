import React, { useState } from "react";

const LoginSignup = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  return (
    <div className="bg-gradient-to-br from-pink-200 to-pink-100 py-32 flex justify-center items-center">
      <div className="loginsignup-container p-8 bg-white rounded-lg shadow-lg m-4">
        <h1 className="text-3xl font-bold mb-4">
          {showRegistration ? "Register" : "Log in"}
        </h1>
        {!showRegistration ? (
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Login id"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-red-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-red-500"
            />
            <button className="bg-red-500 text-white py-2 px-4 rounded-md mt-4 focus:outline-none focus:border-none">
              Continue
            </button>
            <p className="mt-2 text-sm">
              New user?{" "}
              <span
                className="text-red-500 cursor-pointer"
                onClick={() => setShowRegistration(true)}
              >
                Register here
              </span>
            </p>
            <div className="mt-4 flex items-center">
              <input type="checkbox" name="" id="" className="mr-2" />
              <p className="text-sm">
                By continuing, I agree to the terms of the use & privacy
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col space-y-4">
            {/* Registration Fields */}
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-red-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-red-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-red-500"
            />
            <button className="bg-red-600 text-white py-2 px-4 rounded-md mt-4 focus:outline-none focus:border-none">
              Register
            </button>
            <p className="mt-2 text-sm">
              Already have an account?{" "}
              <span
                className="text-red-500 cursor-pointer"
                onClick={() => setShowRegistration(false)}
              >
                Login here
              </span>
            </p>
            <div className="mt-4 flex items-center">
              <input type="checkbox" name="" id="" className="mr-2" />
              <p className="text-sm">
                By continuing, I agree to the terms of the use & privacy
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
