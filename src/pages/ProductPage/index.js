/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByFilter } from "../../redux/reducers/productSlice";
import CardProduct from "../../components/CartProduct";
import { useNavigate } from "react-router-dom";
import Skeletons from "../../components/Skeleton/SkeletonItem";

import FilterProduct from "../../components/FilterProduct";
import Modal from "../../components/Modal";
import Search from "../../components/Search";
import { setCart } from "../../redux/reducers/cartSlice";

function ProductPage() {
  const dispatch = useDispatch();
  const { product, filterProduct, isLoading } = useSelector(
    (state) => state.product
  );
  const { cart } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  const token = localStorage.getItem("token");
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState();

  const filterHandler = (filter) => {
    if (!filter) {
      setFilter("");
      return;
    }
    setFilter(`category/${filter}`);
    setSearch("");
  };

  const addToCart = (item) => {
    const objectIndex = product.findIndex((prod) => prod.id === item.id);
    const cartQuantity = cart.find(
      (cart) => cart.id === product[objectIndex].id
    )?.quantity;

    item = {
      ...item,
      quantity: 1,
    };
    dispatch(setCart(item));
  };

  const url = `https://fakestoreapi.com/products/${filter}`;

  useEffect(() => {
    dispatch(getProductByFilter(url));
  }, [dispatch, url]);

  useEffect(() => {
    if (localStorage.token === "admin") {
      return navigate("admin");
    }
  }, []);

  const keywordSearchHandler = (keyword) => {
    setSearch(keyword);
  };

  return (
    <>
      <div className="flex flex-col gap-5 p-5">
        <div className="flex w-full items-center lg:justify-between justify-center flex-wrap gap-3 ">
          <Search keywordOnChange={keywordSearchHandler} />
          <FilterProduct filterOnChange={filterHandler} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
          {isLoading
            ? [...Array(8).keys()].map((i) => {
                return <Skeletons key={i} />;
              })
            : search
            ? filterProduct
                .filter((item) =>
                  item.title.toLowerCase().includes(search.toLowerCase())
                )
                ?.map((item, index) => (
                  <CardProduct
                    key={index}
                    title={item.title}
                    img={item.image}
                    price={item.price}
                    category={item.category}
                    description={item.description}
                    quantity={item.quantity}
                    rating={item.rating.rate}
                    actionAddToCart={() => {
                      if (!token) {
                        setModal(true);
                        return;
                      }
                      addToCart(item);
                    }}
                    actionDetail={() => navigate(`product/${item.id}`)}
                  />
                ))
            : filterProduct.map((item, index) => (
                <CardProduct
                  key={index}
                  title={item.title}
                  img={item.image}
                  price={item.price}
                  category={item.category}
                  description={item.description}
                  quantity={item.quantity}
                  rating={item.rating.rate}
                  actionAddToCart={() => {
                    if (!token) {
                      setModal(true);
                      return;
                    }
                    addToCart(item);
                  }}
                  actionDetail={() => navigate(`product/${item.id}`)}
                />
              ))}
          {}
        </div>
      </div>
      {modal && <Modal modalOpen="modal-open" modalClose={setModal} />}
    </>
  );
}

export default ProductPage;
