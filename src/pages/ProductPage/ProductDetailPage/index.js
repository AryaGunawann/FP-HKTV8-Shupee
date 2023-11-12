/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ProductDetail from "../../../components/ProductDetail";
import SkeletonDetail from "../../../components/Skeleton/SkeletonDetail";
import { useNavigate } from "react-router-dom";
import { setCart } from "../../../redux/reducers/cartSlice";
import { getProductByid } from "../../../redux/reducers/productSlice";

function ProductDetailPage() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productByid, isLoading } = useSelector((state) => state.product);

  console.log("test");
  useEffect(() => {
    if (localStorage.token === "admin") {
      return navigate("../../admin");
    }
    const url = `https://fakestoreapi.com/products/${params.id}`;
    dispatch(getProductByid(url));
  }, [params.id]);
  console.log("ProductDetailPage - product:", productByid);
  const handleAddToCart = (item) => {
    const quantity = 1;
    dispatch(setCart({ ...item, quantity }));
  };

  return (
    <div className="justify-items-center">
      {isLoading ? (
        <SkeletonDetail />
      ) : (
        <div>
          <ProductDetail
            item={productByid}
            id={productByid.id}
            title={productByid.title}
            category={productByid.category}
            price={productByid.price}
            quantity={productByid.quantity}
            description={productByid.description}
            image={productByid.image}
            loading={isLoading}
            actionAddToCart={() => handleAddToCart(productByid)}
          />
        </div>
      )}
    </div>
  );
}

export default ProductDetailPage;
