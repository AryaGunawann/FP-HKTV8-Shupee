/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ProductDetail from "../../../components/ProductDetail";
import SkeletonDetail from "../../../components/Skeleton/SkeletonDetail";
import { useNavigate } from "react-router-dom";
import { setCart } from "../../../redux/reducers/cartSlice";

function ProductDetailPage() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    if (localStorage.token === "admin") {
      return navigate("../../admin");
    }
  }, []);

  const handleAddToCart = (item) => {
    const quantity = 1;
    dispatch(setCart({ ...item, quantity }));
  };

  return (
    <div className="justify-items-center">
      {isLoading ? (
        <SkeletonDetail />
      ) : (
        product
          .filter((item) => item.id === parseInt(params.id))
          .map((item) => (
            <div>
              <ProductDetail
                item={item}
                key={item.id}
                id={item.id}
                title={item.title}
                category={item.category}
                price={item.price}
                quantity={item.quantity}
                description={item.description}
                image={item.image}
                loading={isLoading}
                actionAddToCart={() => handleAddToCart(item)}
              />
            </div>
          ))
      )}
    </div>
  );
}

export default ProductDetailPage;
