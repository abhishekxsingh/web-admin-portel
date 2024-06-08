import React from "react";
import { useSelector } from "react-redux";
import Avatar from 'react-avatar';
import User from "../../../utils/user";
import { Link, useNavigate } from "react-router-dom";
const { signOut } = new User();

const DropdownProfile = () => {
  const navigate = useNavigate();

  // const response = useSelector(
  //   ({profile}) => {
  //     return profile
  //   }
  // )

  // const {name} = response || {};

  return (
    <div className="navbar-item navbar-user dropdown">
      <a
        href="#/"
        className="navbar-link dropdown-toggle d-flex align-items-center"
        data-bs-toggle="dropdown"
      >
        <Avatar name={"Admin"} size={30} round={true} />&nbsp;
        <span>
          <span className="d-none d-md-inline">{"Admin"}</span>
          <b className="caret"></b>
        </span>
      </a>
      <div className="dropdown-menu dropdown-menu-end me-1">
        {/* <Link to="extra/profile" className="dropdown-item">
        Edit Profile
        </Link> */}
        {/* <Link to="extra/settings-page" className="dropdown-item">
          Settings
        </Link> */}
        {/* <div className="dropdown-divider"></div> */}
        <div
          className="dropdown-item"
          onClick={() => signOut({ navigate })}
        >
          Log Out
        </div>
      </div>
    </div>
  );
};

export default DropdownProfile;
