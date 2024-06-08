import React, { useEffect, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AppSettings } from "../../config/app-settings";
import PerfectScrollbar from "react-perfect-scrollbar";
import { newsDetail } from "./action";
import { updateNewsStatus } from "../news-status/action";
import useCustomSnackbar from "../../hooks/toaster";

const NewsDetail = () => {
  const dispatch = useDispatch();
  const { publicId } = useParams();
  const { data } = useSelector((state) => state['news-detail']);
  const context = useContext(AppSettings);
  const [isMobileEmailNavOn, setIsMobileEmailNavOn] = useState(false);
  const [status, setStatus] = useState("");
  const { showSnackbar } = useCustomSnackbar({ position: "topRight" });

  useEffect(() => {
    newsDetail(dispatch, { publicId });
    context.handleSetAppContentFullHeight(true);
    context.handleSetAppContentClass("p-0");

    return () => {
      context.handleSetAppContentFullHeight(false);
      context.handleSetAppContentClass("");
    };
    // eslint-disable-next-line
  }, []);

  function toggleMobileEmailNav() {
    setIsMobileEmailNavOn(!isMobileEmailNavOn);
  }

  const { title, body, authorName, category=[], sourceUrl, sourceName, views, thumbnailUrl } = data;

  const changeNewsStatus = (evt) => {
    const newStatus = evt.target.value;
    setStatus(newStatus);

    updateNewsStatus(dispatch, {
      publicId,
      status: newStatus,
      notificationHandler: (type) => {
        if (type === "success") {
          showSnackbar(`News status changed to ${newStatus}.`, {
            variant: "success",
          });
          return true
        }

        showSnackbar(`Failed to change news status to ${newStatus}.`, {
          variant: "error",
        });

      },
    });
  };

  return (
    <div className="mailbox">
      <div className="mailbox-sidebar">
        <div className="mailbox-sidebar-header d-flex justify-content-center">
          <button
            onClick={toggleMobileEmailNav}
            className="btn btn-dark btn-sm me-auto d-block d-lg-none"
          >
            <i className="fa fa-cog"></i>
          </button>
          <Link
            to="/news/compose"
            className="btn btn-dark ps-40px pe-40px btn-sm"
          >
            Compose
          </Link>
        </div>
        <div
          className={
            "mailbox-sidebar-content collapse d-lg-block " +
            (isMobileEmailNavOn ? "show" : "")
          }
        >
          <PerfectScrollbar
            className="h-100"
            options={{ suppressScrollX: true }}
          >
            <div className="nav-title">
              <b>CATEGORIES</b>
            </div>
            <ul className="nav nav-inbox m-15px">
              {category.map((i,idx) => <li key={idx}><i className="fa fa-fw fa-lg fs-12px me-2 fa-circle"></i>{" "}{i.name}</li>)}
            </ul>
          </PerfectScrollbar>
        </div>
      </div>
      <div className="mailbox-content">
        <div className="mailbox-content-header">
          {/* <div className="btn-toolbar align-items-start">
            <div className="btn-group">
              <Link to="" className="btn btn-white btn-sm">
                <i className="fa fa-fw fa-trash"></i>{" "}
                <span className="d-none d-lg-inline">Delete</span>
              </Link>
            </div>
            <div className="btn-group" style={{ width: "140px", marginRight: '180px', marginLeft: '275px'}}>
              <button className="btn btn-white btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                {status ? status : "Status"}
                <i className="fa fa-caret-down ms-2"></i>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><button className="dropdown-item" type="button" value="pending" onClick={changeNewsStatus}>Pending</button></li>
                <li><button className="dropdown-item" type="button" value="in-review" onClick={changeNewsStatus}>In Review</button></li>
                <li><button className="dropdown-item" type="button" value="published" onClick={changeNewsStatus}>Published</button></li>
                <li><button className="dropdown-item" type="button" value="unpublished" onClick={changeNewsStatus}>Unpublished</button></li>
              </ul>
            </div>
            <div className="btn-group" style={{ marginLeft: '233px', marginRight: '6px'}}>
              <Link to={`/news/edit/${publicId}`} className="btn btn-white btn-sm">
                <i className="fa fa-fw fa-pencil"></i>
              </Link>
            </div>
            <div className="btn-group" style={{ marginRight: '3px' }}>
              <Link to="/news" className="btn btn-white btn-sm">
                <i className="fa fa-fw fa-times"></i>
              </Link>
            </div>
          </div> */}
          <div className="btn-toolbar align-items-start">
              <div className="btn-group">
                  <Link to="" className="btn btn-white btn-sm">
                      <i className="fa fa-fw fa-trash"></i>{" "}
                      <span className="d-none d-lg-inline">Delete</span>
                  </Link>
              </div>
              <div className="btn-group" style={{ marginLeft: '258px'}}>
                  <button className="btn btn-white btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                      {status ? status : "Status"}
                      <i className="fa fa-caret-down ms-2"></i>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li><button className="dropdown-item" type="button" value="pending" onClick={changeNewsStatus}>Pending</button></li>
                      <li><button className="dropdown-item" type="button" value="in-review" onClick={changeNewsStatus}>In Review</button></li>
                      <li><button className="dropdown-item" type="button" value="published" onClick={changeNewsStatus}>Published</button></li>
                      <li><button className="dropdown-item" type="button" value="unpublished" onClick={changeNewsStatus}>Unpublished</button></li>
                  </ul>
              </div>
              <div className="btn-group" style={{ marginLeft: '5px'}}>
                  <Link to={`/news/edit/${publicId}`} className="btn btn-white btn-sm">
                      <i className="fa fa-fw fa-pencil"></i>
                  </Link>
              </div>
              <div className="btn-group" style={{ marginLeft: '5px'}}>
                  <Link to="/news" className="btn btn-white btn-sm">
                      <i className="fa fa-fw fa-times"></i>
                  </Link>
              </div>
          </div>


        </div>
        <div className="mailbox-content-body d-flex">
          <PerfectScrollbar className="h-100 w-50 border" options={{ suppressScrollX: true }}>
            <div className="p-3 border-end">
              <h3 className="mb-3 w-450px">{title}</h3>
              <hr className="bg-gray-500" />
              <div className=" mb-4">
                <div className="card border-0">
                  <div className="h-250px rounded-top">
                    <img src={thumbnailUrl} className="h-250px"/>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      {body}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
        <div className="mailbox-content-footer d-flex align-items-center justify-content-end">
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
