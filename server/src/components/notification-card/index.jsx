import React from "react";
import { format } from "date-fns";
import "./style.scss";

const Notification = (props) => {
  const {
   title,
   message
  } = props;

  return (
    <div>
    <div className="modal-body">
    <div className="mb-3">
      <label className="form-label">Title</label>
      <div className="row">
        <div className="col-5">
          <input
            className="form-control"
            placeholder="Title"
          />
        </div>
      </div>
    </div>
    <div className="mb-3">
      <label className="form-label">Message</label>
      <div className="row">
        <div className="col-5">
          <input
            className="form-control"
            placeholder="message"
            type="message"
          />
        </div>
      </div>
    </div>
   
  </div>
  <button
                type="submit"
                className="btn btn-theme"
                // onClick={handleSubmit}
              >
                Send Notification
              </button>
  </div>
  );
};

export default Notification;
