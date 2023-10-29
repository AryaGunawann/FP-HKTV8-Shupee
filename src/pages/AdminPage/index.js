import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Stock from "../../components/Admin/Stock";

const Admin = () => {
  const navigate = useNavigate();
  const token = localStorage.token;

  useEffect(() => {
    if (!token) {
      return navigate("../login");
    }
    if (token !== "admin") {
      return navigate("/");
    }
  }, [token, navigate]);

  return <Stock />;
};

export default Admin;
