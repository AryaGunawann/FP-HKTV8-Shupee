import { useState } from "react";
import { Link } from "react-router-dom";

const Modal = ({ modalOpen, modalClose }) => {
  const [modal, setModal] = useState(modalOpen);

  return (
    <>
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 ${
          modal ? "block" : "hidden"
        }`}
      >
        <div className="modal-box bg-white text-black p-8 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">You're not logged in yet!</h3>
          <p className="py-4">Make sure to login first with your account.</p>
          <div className="modal-action">
            <Link
              to="/login"
              className="btn bg-black text-white hover:bg-gray-400"
            >
              Go to the login page
            </Link>
          </div>
          <input
            type="checkbox"
            onClick={() => {
              setModal("");
              modalClose(false);
            }}
            id="my-modal-4"
            className="modal-toggle hidden"
          />
        </div>
      </div>
      <label
        htmlFor="my-modal-4"
        className={`modal cursor-pointer ${modal ? "block" : "hidden"}`}
      ></label>
    </>
  );
};

export default Modal;
