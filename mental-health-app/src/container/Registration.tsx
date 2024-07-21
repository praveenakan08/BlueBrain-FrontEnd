import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Password from "../components/Password";

const Registration = (): JSX.Element => {
  const navigate = useNavigate(); // Updated to useNavigate() correctly
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigateToDashboard = () => {
    navigate("/dashboard"); // Fixed navigate usage
  };

  const handlePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="grid md:grid-cols-3 bg-gradient-to-t from-bbPink to-bbSky h-screen">
      {/* Empty space - left */}
      <div className="col-span-1"></div>

      {/* Center part */}
      <div className="flex flex-col justify-center items-center bg-gray-300 h-screen col-span-1 overflow-hidden">
        {/* logo image and title */}
        <div className="flex flex-col items-center mb-8">
          <img
            className="w-32 h-auto mb-4 drop-shadow-2xl"
            src="/images/logo.png"
            alt="LOGO"
          />
          <div className="text-xl font-bold">blue brain</div>
        </div>

        {/* Form */}
        <div className="flex flex-col w-3/4 max-w-md">
          {/* first name, last name */}
          <input
            id="firstName"
            className="input shadow mb-4"
            placeholder="First Name"
            required
          />
          <input
            id="lastName"
            className="input shadow mb-4"
            placeholder="Last Name"
            required
          />

          <div className="flex gap-4 mb-4">
            <input
              id="age"
              className="input shadow-sm w-1/2"
              placeholder="Age"
              required
            />
            <input
              id="gender"
              className="input shadow-sm w-1/2"
              placeholder="Gender"
              required
            />
          </div>

          {/* email address */}
          <input
            type="email"
            id="email"
            className="input shadow mb-4"
            placeholder="Email address"
            required
          />

          {/* password fields */}
          <div className="flex flex-col gap-4 mb-4">
          <Password placeholder={'Password'}/>
          <Password placeholder={'Confirm Password'}/>
          </div>

          {/* navigate to dashboard */}
          <button
            className="btn bg-sky-300 text-white hover:bg-sky-400 shadow-lg w-full py-2 rounded"
            onClick={navigateToDashboard}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Empty space - right */}
      <div className="col-span-1"></div>
    </div>
  );
};

export default Registration;
