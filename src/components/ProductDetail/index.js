/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import Modal from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../redux/reducers/cartSlice";

const ProductDetail = ({
  title,
  category,
  price,
  quantity,
  description,
  image,
  item,
}) => {
  const [modal, setModal] = useState(false);
  const token = localStorage.getItem("token");
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const addToCartHandler = (item) => {
    if (!token) {
      setModal(true);
      return;
    }

    const cartQuantity = cart.find((cart) => cart.id === item.id)?.quantity;
    item = { ...item, quantity: qty };
    qty <= 0 ? setQty(0) : dispatch(setCart(item));

    console.log(item);

    setQty(0);
  };

  return (
    <div className="flex items-center justify-center py-4 lg:py-20 min-h-screen">
      <div className="w-full max-w-6xl bg-white ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-3">
          <div className="col-span-1 md:col-span-1">
            <img
              src={image}
              className="object-scale-down w-full md:w-full transition-transform hover:scale-110 mx-auto p-5"
              alt={image}
            />
          </div>
          <div className="col-span-1 md:col-span-1 flex flex-col justify-center">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black pb-3">
                {title}
              </h1>
              <span className="badge badge-lg badge-outline rounded-md text-black bg-white">
                {category}
              </span>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black pt-3 pb-5">
                {`$${price}`}
              </h1>
            </div>
            <div className="border-2 dark:border-slate-600 rounded-lg flex flex-wrap justify-between items-center gap-5 p-4 md:p-5 bg-white">
              <div className="text-center md:text-left">
                <h1 className="text-black">Quantity:</h1>
                <input
                  className="w-16 md:w-20 border p-2 mb-2 rounded-lg"
                  type="number"
                  value={qty < 1 ? "" : qty}
                  onChange={(e) =>
                    e.target.value <= 0
                      ? setQty(0)
                      : setQty(Number(e.target.value))
                  }
                />
                <h1 className="text-black mt-2 md:mt-0">Stock: {quantity}</h1>
              </div>
              <div className="text-center md:text-left pb-8">
                <h1 className="text-black">Subtotal:</h1>
                <div className="bg-gray-200 text-black text-xl p-2 rounded-lg">
                  ${qty <= 0 ? 0 : (qty * price).toFixed(2)}
                </div>
              </div>
            </div>

            <button
              onClick={() => addToCartHandler(item)}
              className="btn text-white bg-black mt-4"
            >
              <BsFillCartPlusFill />
              Add to Cart
            </button>

            <div>
              <h1 className="text-xl md:text-2xl font-medium text-black mt-3">
                Product Description
              </h1>
              <p className="text-base text-black">{description}</p>
            </div>
          </div>
        </div>
        {modal && <Modal modalOpen="modal-open" modalClose={setModal} />}
      </div>
    </div>
  );
};

export default ProductDetail;
