import { useEffect } from "react";
import LoginContainer from "../../components/LoginContainer";

import { loginUser } from "../../redux/reducers/getUserSlice"; 
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPage = () => {
      const token = localStorage.getItem("token");
      if (token) {
        return navigate("/");
      }
    };
    redirectPage();
  }, [navigate]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginUser());
  }, [dispatch]);

  const { username, password } = useSelector((state) => state.user);

  return (
    <div>
      <LoginContainer username={username} password={password} />
    </div>
  );
};

export default LoginPage;
