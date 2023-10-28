import { useSelector } from "react-redux";

const ModalCheckOut = ({ onClick, item, htmlFor }) => {
  const { product } = useSelector((state) => state.product);

  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id={htmlFor} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex-col">
          <h3 className="font-bold text-lg">Check Out</h3>
          <p className="py-4">Apakah anda ingin melakukkan check out pada:</p>
          <ul className="list-decimal list-inside">
            {item.map((item, index) =>
              item.quantity <=
                product.find((prod) => prod.id === item.id)?.quantity &&
              item.quantity !== 0 ? (
                <li key={index}>
                  {item.title} : {item.quantity}
                </li>
              ) : (
                <p key={index}>Tidak ada item yang tersedia</p>
              )
            )}
          </ul>
          <div className="modal-action">
            <label
              htmlFor={htmlFor}
              onClick={onClick}
              className="btn btn-success text-white hover:bg-green-700"
            >
              Check Out!
            </label>
            <label
              htmlFor={htmlFor}
              className="btn btn-error text-white hover:bg-red-700"
            >
              Batal
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCheckOut;
