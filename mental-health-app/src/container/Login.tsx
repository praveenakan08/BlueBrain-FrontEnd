import { useNavigate } from "react-router-dom";
import Password from "../components/Password";

const Login = (): JSX.Element => {
  const history = useNavigate();

  const navigateToDashboard = () => {
    history("/dashboard");
  };
  return (
    <div className="grid md:grid-cols-3 bg-gradient-to-t from-bbPink to-bbSky h-screen">
      <div className="col-span-1"></div>
      <div className="flex justify-center items-center flex-col bg-gray-300 h-screen col-span-1">
        {/* logo image and title */}
        <div className="flex items-center flex-col m-6">
          <div>
            <img
              className="drop-shadow-2xl m-2"
              src="/images/logo.png"
              alt="LOGO"
            ></img>
          </div>
          <div className="logo">blue brain</div>
        </div>

        {/* email address */}
        <div className="mb-6 inline-block w-2/3">
          <input
            type="email"
            id="email"
            className="input shadow"
            placeholder="Email address"
            required
          />
        </div>

        {/* password */}
        <div className="flex mb-6 w-2/3 gap-3">
          <Password placeholder={"Password"} />
        </div>

        <div className="mb-6">
          {/* forgot password? */}
          <a href="/forgot-password" className="text-xs font-bold justify-end">
            Forgot Password?
          </a>
        </div>

        {/* log-in button */}
        <div className="mb-6 w-2/3">
          <button
            className="btn bg-sky-300 text-white hover:shadow-inner shadow-lg w-full"
            onClick={navigateToDashboard}
          >
            Log in
          </button>
        </div>

        {/* navigate to sign up page */}
        <div>
          <a href="/signup" className="text-xs font-bold justify-end">
            First Time User? Sign Up Here
          </a>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
};

export default Login;
