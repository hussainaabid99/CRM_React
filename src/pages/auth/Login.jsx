import { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../../Redux/Slices/AuthSlice";

function Login() {
  const dispatch = useDispatch();

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  function onSubmit() {
    if (!loginDetails.email || !loginDetails.password) return;
    const response = dispatch(login(loginDetails));
    console.log(response);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  }

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title text-4xl mx-auto">Login</h2>
          <input
            onChange={handleInputChange}
            name="email"
            type="text"
            placeholder="Email"
            className="input input-bordered text-white input-primary w-full max-w-xs "
          />
          <input
            onChange={handleInputChange}
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered text-white input-primary w-full max-w-xs"
          />
          <div className="card-actions justify-end">
            <button
              onClick={onSubmit}
              className="btn btn-warning w-full font-bold "
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
