import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/auth/authSlice";

function LoginPage() {
  const { loginAs } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleInput =  (e) => {
    e.preventDefault();
      const { name, value } = e.target;
      setCredentials({
        ...credentials,
        [name]: value,
      });
    }

  const handleLogin = async() => {
    try {
      if (!credentials.email || !credentials.password) {
        return toast.error("All fields are required");
      }
      const response = await dispatch(login(credentials));

      if (response?.payload?.success) {
        navigate(`/${response.payload.role}`);
        toast.success(response?.payload?.message)
        localStorage.setItem(`${response?.payload?.role}`,JSON.stringify(response?.payload?.user))
      }
    } catch (error) {
      toast.error(error.response.data.success)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[90vh] bg-gray-100">
      <div className="flex flex-col items-center justify-center bg-white shadow-md rounded px-8 sm:px-12 md:px-16 lg:px-20 pt-6 md:pt-8 pb-8 md:pb-10 mb-4">
        <h2 className="text-2xl font-bold mb-4">
          {loginAs ? `Login as ${loginAs}` : "Login"}
        </h2>
        <div className="mb-4 w-52 sm:w-56 md:w-64 lg:w-72">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            placeholder="Enter email"
            onChange={handleInput}
          />
        </div>
        <div className="mb-6 w-52 sm:w-56 md:w-64 lg:w-72">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            placeholder="Enter password"
            onChange={handleInput}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
