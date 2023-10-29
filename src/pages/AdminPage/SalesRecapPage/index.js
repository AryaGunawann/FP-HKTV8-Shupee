/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkOutCart } from "../../../redux/reducers/cartSlice";

const SalesRecapPage = () => {
  const token = localStorage.token;
  const navigate = useNavigate();
  const { recapCheckOut } = useSelector((state) => state.cart);

  useEffect(() => {
    if (!token) {
      return navigate("../../login");
    }
    if (token !== "admin") {
      return navigate("/");
    }
  }, [token, navigate]);
  let total = 0;

  if (recapCheckOut.length >= 1) {
    return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-4/5 mx-auto">
        <table className="table-auto w-full">
          <thead className="bg-neutral text-white dark:text-base h-12">
            <tr>
              <th className="w-20 px-5 py-3 tracking-wide">Product</th>
              <th className="w-20 px-5 py-3 tracking-wide">Price</th>
              <th className="w-20 px-5 py-3 tracking-wide">Quantity</th>
              <th className="w-20 px-5 py-3 tracking-wide">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {recapCheckOut.map((item, index) => {
              const itemTotal = item.quantity * item.price;
              total += itemTotal;
              return (
                <tr key={index}>
                  <td className="px-5 py-3 space-y-2 border-b border-neutral">
                    <p className="font-semibold text-base">{item.title}</p>
                    <div className="badge badge-default badge-outline text-xs">
                      {item.category}
                    </div>
                  </td>
                  <td className="px-5 py-3 space-y-2 border-b border-neutral text-center">
                    ${item.price}
                  </td>
                  <td className="px-5 py-3 space-y-2 border-b border-neutral text-center">
                    {item.quantity}
                  </td>
                  <td className="px-5 py-3 space-y-2 border-b border-neutral text-center">
                    ${itemTotal}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="bg-neutral text-white dark:text-base">
            <tr>
              <td
                colSpan={3}
                className="px-5 py-3 space-y-2 border-b border-neutral text-center font-bold"
              >
                Total
              </td>
              <td className="px-5 py-3 space-y-2 border-b border-neutral text-center font-bold">
                ${total.toFixed(1)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center">
        <p className="font-bold text-center text-4xl my-52">No Sales</p>
      </div>
    );
  }
};

export default SalesRecapPage;
