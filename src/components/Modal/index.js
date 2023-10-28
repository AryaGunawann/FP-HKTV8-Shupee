import { useState } from "react";
import { Link } from "react-router-dom";

const Modal = ({ modalOpen, modalClose }) => {
  const [modal, setModal] = useState(modalOpen);
  return (
    <>
      <input
        type="checkbox"
        onClick={() => {
          setModal("");
          modalClose(false);
        }}
        id="my-modal-4"
        className="modal-toggle"
      />
      <label htmlFor="my-modal-4" className={`modal ${modal} cursor-pointer`}>
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">You're not logged in yet!</h3>
          <p className="py-4">Make sure to login first with your account.</p>
          <div className="modal-action">
            <Link to="/login" className="btn btn-accent text-white">
              Go to the login page
            </Link>
          </div>
        </label>
      </label>
    </>
  );
};

export default Modal;
