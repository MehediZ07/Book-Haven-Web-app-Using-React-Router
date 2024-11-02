import { Link } from "react-router-dom";
export default function SingUp() {
  return (
    <div className="bg-blue-50 flex items-center justify-center py-12">
      <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 w-96">
        <h2 className="text-3xl font-semibold mb-6 text-center text-[#23BE0A]">
          Sign Up
        </h2>
        <div>
          <div className="mb-4">
            <label
              className="block text-gray-500 text-base font-medium mb-2"
              for="email"
            >
              Email
            </label>

            <input
              type="Email"
              placeholder="Enter Your Email"
              className="input input-bordered input-success border-green-500 w-full max-w-xs"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-500 text-base font-medium mb-2"
              for="password"
            >
              Password
            </label>

            <input
              type="Password"
              placeholder="Enter Password"
              className="input input-bordered input-success border-green-500 w-full max-w-xs"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-500 text-base font-medium mb-2"
              for="password"
            >
              Confirm Password
            </label>

            <input
              type="Password"
              placeholder="Confirm Password"
              className="input input-bordered input-success border-green-500 w-full max-w-xs"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="btn  w-full bg-[#23BE0A] hover:bg-[#23BE0A] text-white"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </div>
        <p class="mt-4 text-center text-gray-700">
          Don't have an account?
          <Link to="/singIn" class="text-blue-500 hover:underline ml-2">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
