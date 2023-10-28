import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginContainer = ({ username, password }) => {
  const navigate = useNavigate();
  const [userName, setuserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const emailOnChange = (e) => {
    setuserName(e.target.value);
  };

  const passwordOnChange = (e) => {
    setUserPassword(e.target.value);
  };

  const submitHandler = async () => {
    setErrorMsg("");
    if (userName === "admin@shupee.com" && userPassword === "admin123") {
      navigate("../admin");
      setErrorMsg("");
      localStorage.setItem("token", "admin");
      return;
    }

    if (userName === username && userPassword === password) {
      try {
        const response = await axios.post(
          "https://fakestoreapi.com/auth/login",
          {
            username: userName,
            password: userPassword,
          }
        );
        setErrorMsg("");
        const getToken = response?.data?.token;
        localStorage.setItem("token", getToken);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
    if (
      userName !== username ||
      userPassword !== password ||
      userName !== "admin@shupee.com" ||
      userPassword !== "admin123"
    ) {
      setErrorMsg("Invalid username or password!");
      setuserName("");
      setUserPassword("");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border bg-white border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder={username}
                onChange={emailOnChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border bg-white border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder={password}
                onChange={passwordOnChange}
              />
            </div>
          </div>

          {errorMsg && <div className="text-red-500 text-sm">{errorMsg}</div>}

          <div>
            <button
              type="button"
              onClick={submitHandler}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginContainer;
