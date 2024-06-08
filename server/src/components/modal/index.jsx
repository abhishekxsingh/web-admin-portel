import React from "react";
import "./style.scss";

const Modal = (props) => {
  const {
    i,
    handleDocumentVerification,
  } = props;

  return (
    <div className="modal" id="modalEdit">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <button
              type="submit"
              className="btn btn-success w-120px"
              onClick={() => handleDocumentVerification(i, "verify") } >
              Approve
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Modal;
