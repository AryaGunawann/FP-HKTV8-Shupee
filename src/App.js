import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navigation";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import AdminPage from "./pages/AdminPage";
import SalesRecapPage from "./pages/AdminPage/SalesRecapPage";
import ProductDetailPage from "./pages/ProductPage/ProductDetailPage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/sales-recap" element={<SalesRecapPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
