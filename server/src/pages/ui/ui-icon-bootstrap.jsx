import React, { useState, useEffect } from "react";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import PerfectScrollbar from "react-perfect-scrollbar";
import Highlight from "react-highlight";
import "bootstrap-icons/font/bootstrap-icons.css";

function UIIconBootstrap() {
  const [code1, setCode1] = useState();

  useEffect(() => {
    fetch("/assets/data/ui-icon-bootstrap/code-1.json")
      .then(function (response) {
        return response.text();
      })
      .then((html) => {
        setCode1(html);
      });
  });

  return (
    <div>
      <ol className="breadcrumb float-xl-end">
        <li className="breadcrumb-item">
          <a href="#/">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#/">UI Elements</a>
        </li>
        <li className="breadcrumb-item active">Bootstrap Icons</li>
      </ol>
      <h1 className="page-header">
        Bootstrap Icons <small>v1.9.0 with 1,600+ Free Icons</small>
      </h1>

      <Panel>
        <PanelHeader>Installation</PanelHeader>
        <PanelBody className="panel-body">
          <PerfectScrollbar
            className="h-500px"
            options={{ suppressScrollX: true }}
          >
            <div className="row gx-3">
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-123 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                123
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-activity fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                activity
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-alarm fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                alarm
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-alarm-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                alarm-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-align-bottom fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                align-bottom
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-align-center fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                align-center
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-align-end fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                align-end
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-align-middle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                align-middle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-align-start fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                align-start
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-align-top fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                align-top
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-alt fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                alt
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-app fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                app
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-app-indicator fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                app-indicator
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-apple fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                apple
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-archive fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                archive
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-archive-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                archive-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-90deg-down fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-90deg-down
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-90deg-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-90deg-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-90deg-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-90deg-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-90deg-up fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-90deg-up
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-bar-down fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-bar-down
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-bar-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-bar-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-bar-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-bar-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-bar-up fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-bar-up
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-clockwise fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-clockwise
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-counterclockwise fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-counterclockwise
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-down fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-down
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-down-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-down-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-down-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-down-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-down-left-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-down-left-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-down-left-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-down-left-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-down-left-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-down-left-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-down-left-square-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-down-left-square-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-down-right-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-down-right-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-down-right-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-down-right-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-down-right-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-down-right-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-down-right-square-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-down-right-square-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-down-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-down-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-down-square-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-down-square-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-down-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-down-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-down-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-down-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-down-short fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-down-short
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-down-up fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-down-up
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-left-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-left-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-left-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-left-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-left-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-left-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-left-square-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-left-square-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-left-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-left-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-left-short fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-left-short
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-repeat fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-repeat
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-return-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-return-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-return-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-return-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-right-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-right-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-right-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-right-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-right-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-right-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-right-square-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-right-square-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-right-short fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-right-short
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-through-heart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-through-heart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-through-heart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-through-heart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-up fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-up
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-up-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-up-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-up-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-up-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-up-left-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-up-left-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-up-left-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-up-left-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-up-left-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-up-left-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-up-left-square-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-up-left-square-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-up-right-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-up-right-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-up-right-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-up-right-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-up-right-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-up-right-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-up-right-square-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-up-right-square-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-up-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-up-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-up-square-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-up-square-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-up-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-up-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-up-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-up-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrow-up-short fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrow-up-short
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrows-angle-contract fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrows-angle-contract
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrows-angle-expand fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrows-angle-expand
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrows-collapse fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrows-collapse
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrows-expand fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrows-expand
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrows-fullscreen fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrows-fullscreen
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-arrows-move fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                arrows-move
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-aspect-ratio fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                aspect-ratio
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-aspect-ratio-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                aspect-ratio-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-asterisk fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                asterisk
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-at fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                at
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-award fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                award
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-award-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                award-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-back fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                back
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-backspace fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                backspace
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-backspace-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                backspace-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-backspace-reverse fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                backspace-reverse
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-backspace-reverse-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                backspace-reverse-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-3d fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-3d
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-3d-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-3d-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-4k fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-4k
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-4k-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-4k-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-8k fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-8k
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-8k-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-8k-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-ad fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-ad
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-ad-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-ad-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-ar fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-ar
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-ar-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-ar-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-cc fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-cc
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-cc-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-cc-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-hd fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-hd
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-hd-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-hd-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-sd fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-sd
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-sd-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-sd-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-tm fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-tm
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-tm-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-tm-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-vo fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-vo
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-vo-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-vo-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-vr fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-vr
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-vr-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-vr-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-wc fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-wc
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-badge-wc-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                badge-wc-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bag fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bag
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bag-check fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bag-check
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bag-check-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bag-check-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bag-dash fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bag-dash
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bag-dash-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bag-dash-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bag-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bag-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bag-heart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bag-heart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bag-heart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bag-heart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bag-plus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bag-plus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bag-plus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bag-plus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bag-x fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bag-x
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bag-x-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bag-x-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-balloon fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                balloon
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-balloon-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                balloon-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-balloon-heart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                balloon-heart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-balloon-heart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                balloon-heart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bandaid fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bandaid
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bandaid-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bandaid-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bank fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bank
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bank2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bank2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bar-chart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bar-chart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bar-chart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bar-chart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bar-chart-line fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bar-chart-line
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bar-chart-line-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bar-chart-line-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bar-chart-steps fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bar-chart-steps
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-basket fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                basket
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-basket-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                basket-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-basket2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                basket2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-basket2-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                basket2-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-basket3 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                basket3
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-basket3-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                basket3-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-battery fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                battery
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-battery-charging fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                battery-charging
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-battery-full fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                battery-full
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-battery-half fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                battery-half
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-behance fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                behance
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bell fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bell
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bell-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bell-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bell-slash fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bell-slash
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bell-slash-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bell-slash-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bezier fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bezier
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bezier2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bezier2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bicycle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bicycle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-binoculars fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                binoculars
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-binoculars-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                binoculars-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-blockquote-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                blockquote-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-blockquote-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                blockquote-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bluetooth fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bluetooth
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-body-text fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                body-text
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-book fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                book
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-book-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                book-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-book-half fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                book-half
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bookmark fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bookmark
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bookmark-check fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bookmark-check
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bookmark-check-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bookmark-check-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bookmark-dash fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bookmark-dash
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bookmark-dash-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bookmark-dash-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bookmark-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bookmark-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bookmark-heart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bookmark-heart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bookmark-heart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bookmark-heart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bookmark-plus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bookmark-plus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bookmark-plus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bookmark-plus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bookmark-star fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bookmark-star
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bookmark-star-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bookmark-star-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bookmark-x fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bookmark-x
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bookmark-x-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bookmark-x-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bookmarks fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bookmarks
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bookmarks-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bookmarks-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bookshelf fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bookshelf
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-boombox fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                boombox
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-boombox-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                boombox-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bootstrap fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bootstrap
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bootstrap-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bootstrap-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bootstrap-reboot fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bootstrap-reboot
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-border fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                border
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-border-all fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                border-all
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-border-bottom fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                border-bottom
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-border-center fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                border-center
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-border-inner fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                border-inner
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-border-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                border-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-border-middle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                border-middle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-border-outer fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                border-outer
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-border-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                border-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-border-style fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                border-style
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-border-top fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                border-top
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-border-width fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                border-width
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bounding-box fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bounding-box
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bounding-box-circles fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bounding-box-circles
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-box fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                box
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-box-arrow-down-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                box-arrow-down-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-box-arrow-down-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                box-arrow-down-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-box-arrow-down fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                box-arrow-down
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-box-arrow-in-down fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                box-arrow-in-down
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-box-arrow-in-down-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                box-arrow-in-down-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-box-arrow-in-down-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                box-arrow-in-down-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-box-arrow-in-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                box-arrow-in-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-box-arrow-in-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                box-arrow-in-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-box-arrow-in-up fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                box-arrow-in-up
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-box-arrow-in-up-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                box-arrow-in-up-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-box-arrow-in-up-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                box-arrow-in-up-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-box-arrow-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                box-arrow-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-box-arrow-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                box-arrow-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-box-arrow-up fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                box-arrow-up
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-box-arrow-up-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                box-arrow-up-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-box-arrow-up-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                box-arrow-up-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-box-seam fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                box-seam
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-box2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                box2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-box2-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                box2-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-box2-heart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                box2-heart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-box2-heart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                box2-heart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-boxes fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                boxes
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-braces fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                braces
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-braces-asterisk fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                braces-asterisk
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bricks fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bricks
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-briefcase fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                briefcase
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-briefcase-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                briefcase-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-brightness-alt-high fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                brightness-alt-high
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-brightness-alt-high-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                brightness-alt-high-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-brightness-alt-low fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                brightness-alt-low
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-brightness-alt-low-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                brightness-alt-low-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-brightness-high fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                brightness-high
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-brightness-high-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                brightness-high-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-brightness-low fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                brightness-low
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-brightness-low-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                brightness-low-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-broadcast fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                broadcast
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-broadcast-pin fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                broadcast-pin
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-brush fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                brush
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-brush-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                brush-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bucket fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bucket
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bucket-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bucket-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bug fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bug
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bug-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bug-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-building fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                building
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-bullseye fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                bullseye
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calculator fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calculator
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calculator-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calculator-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar-check fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar-check
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar-check-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar-check-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar-date fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar-date
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar-date-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar-date-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar-day fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar-day
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar-day-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar-day-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar-event fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar-event
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar-event-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar-event-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar-heart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar-heart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar-heart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar-heart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar-minus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar-minus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar-minus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar-minus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar-month fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar-month
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar-month-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar-month-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar-plus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar-plus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar-plus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar-plus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar-range fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar-range
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar-range-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar-range-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar-week fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar-week
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar-week-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar-week-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar-x fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar-x
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar-x-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar-x-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2-check fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2-check
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2-check-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2-check-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2-date fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2-date
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2-date-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2-date-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2-day fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2-day
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2-day-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2-day-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2-event fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2-event
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2-event-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2-event-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2-heart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2-heart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2-heart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2-heart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2-minus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2-minus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2-minus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2-minus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2-month fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2-month
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2-month-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2-month-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2-plus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2-plus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2-plus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2-plus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2-range fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2-range
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2-range-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2-range-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2-week fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2-week
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2-week-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2-week-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2-x fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2-x
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar2-x-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar2-x-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar3 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar3
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar3-event fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar3-event
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar3-event-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar3-event-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar3-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar3-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar3-range fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar3-range
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar3-range-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar3-range-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar3-week fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar3-week
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar3-week-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar3-week-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar4 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar4
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar4-event fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar4-event
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar4-range fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar4-range
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-calendar4-week fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                calendar4-week
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-camera fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                camera
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-camera2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                camera2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-camera-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                camera-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-camera-reels fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                camera-reels
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-camera-reels-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                camera-reels-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-camera-video fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                camera-video
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-camera-video-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                camera-video-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-camera-video-off fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                camera-video-off
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-camera-video-off-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                camera-video-off-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-capslock fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                capslock
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-capslock-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                capslock-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-card-checklist fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                card-checklist
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-card-heading fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                card-heading
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-card-image fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                card-image
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-card-list fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                card-list
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-card-text fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                card-text
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-caret-down fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                caret-down
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-caret-down-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                caret-down-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-caret-down-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                caret-down-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-caret-down-square-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                caret-down-square-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-caret-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                caret-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-caret-left-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                caret-left-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-caret-left-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                caret-left-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-caret-left-square-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                caret-left-square-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-caret-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                caret-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-caret-right-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                caret-right-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-caret-right-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                caret-right-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-caret-right-square-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                caret-right-square-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-caret-up fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                caret-up
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-caret-up-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                caret-up-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-caret-up-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                caret-up-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-caret-up-square-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                caret-up-square-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cart-check fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cart-check
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cart-check-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cart-check-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cart-dash fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cart-dash
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cart-dash-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cart-dash-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cart-plus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cart-plus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cart-plus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cart-plus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cart-x fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cart-x
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cart-x-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cart-x-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cart2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cart2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cart3 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cart3
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cart4 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cart4
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cash fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cash
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cash-coin fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cash-coin
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cash-stack fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cash-stack
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cast fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cast
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-dots fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-dots
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-dots-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-dots-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-heart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-heart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-heart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-heart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-left-dots fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-left-dots
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-left-dots-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-left-dots-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-left-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-left-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-left-heart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-left-heart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-left-heart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-left-heart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-left-quote fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-left-quote
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-left-quote-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-left-quote-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-left-text fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-left-text
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-left-text-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-left-text-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-quote fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-quote
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-quote-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-quote-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-right-dots fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-right-dots
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-right-dots-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-right-dots-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-right-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-right-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-right-heart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-right-heart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-right-heart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-right-heart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-right-quote fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-right-quote
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-right-quote-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-right-quote-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-right-text fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-right-text
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-right-text-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-right-text-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-square-dots fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-square-dots
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-square-dots-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-square-dots-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-square-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-square-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-square-heart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-square-heart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-square-heart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-square-heart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-square-quote fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-square-quote
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-square-quote-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-square-quote-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-square-text fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-square-text
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-square-text-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-square-text-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-text fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-text
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chat-text-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chat-text-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-check fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                check
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-check-all fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                check-all
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-check-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                check-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-check-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                check-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-check-lg fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                check-lg
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-check-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                check-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-check-square-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                check-square-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-check2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                check2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-check2-all fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                check2-all
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-check2-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                check2-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-check2-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                check2-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chevron-bar-contract fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chevron-bar-contract
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chevron-bar-down fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chevron-bar-down
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chevron-bar-expand fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chevron-bar-expand
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chevron-bar-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chevron-bar-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chevron-bar-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chevron-bar-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chevron-bar-up fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chevron-bar-up
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chevron-compact-down fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chevron-compact-down
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chevron-compact-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chevron-compact-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chevron-compact-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chevron-compact-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chevron-compact-up fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chevron-compact-up
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chevron-contract fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chevron-contract
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chevron-double-down fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chevron-double-down
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chevron-double-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chevron-double-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chevron-double-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chevron-double-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chevron-double-up fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chevron-double-up
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chevron-down fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chevron-down
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chevron-expand fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chevron-expand
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chevron-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chevron-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chevron-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chevron-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-chevron-up fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                chevron-up
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-circle-half fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                circle-half
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-slash-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                slash-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-circle-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                circle-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard-check fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard-check
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard-check-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard-check-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard-data fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard-data
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard-data-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard-data-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard-heart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard-heart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard-heart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard-heart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard-minus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard-minus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard-minus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard-minus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard-plus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard-plus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard-plus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard-plus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard-pulse fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard-pulse
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard-x fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard-x
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard-x-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard-x-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard2-check fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard2-check
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard2-check-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard2-check-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard2-data fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard2-data
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard2-data-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard2-data-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard2-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard2-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard2-heart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard2-heart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard2-heart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard2-heart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard2-minus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard2-minus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard2-minus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard2-minus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard2-plus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard2-plus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard2-plus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard2-plus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard2-pulse fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard2-pulse
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard2-pulse-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard2-pulse-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard2-x fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard2-x
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clipboard2-x-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clipboard2-x-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clock fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clock
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clock-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clock-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clock-history fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clock-history
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-arrow-down fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-arrow-down
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-arrow-down-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-arrow-down-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-arrow-up fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-arrow-up
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-arrow-up-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-arrow-up-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-check fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-check
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-check-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-check-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-download fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-download
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-download-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-download-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-drizzle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-drizzle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-drizzle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-drizzle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-fog fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-fog
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-fog-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-fog-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-fog2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-fog2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-fog2-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-fog2-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-hail fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-hail
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-hail-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-hail-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-haze fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-haze
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-haze-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-haze-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-haze2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-haze2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-haze2-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-haze2-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-lightning fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-lightning
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-lightning-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-lightning-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-lightning-rain fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-lightning-rain
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-lightning-rain-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-lightning-rain-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-minus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-minus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-minus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-minus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-moon fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-moon
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-moon-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-moon-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-plus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-plus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-plus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-plus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-rain fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-rain
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-rain-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-rain-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-rain-heavy fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-rain-heavy
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-rain-heavy-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-rain-heavy-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-slash fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-slash
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-slash-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-slash-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-sleet fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-sleet
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-sleet-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-sleet-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-snow fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-snow
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-snow-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-snow-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-sun fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-sun
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-sun-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-sun-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-upload fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-upload
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloud-upload-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloud-upload-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clouds fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clouds
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-clouds-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                clouds-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloudy fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloudy
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cloudy-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cloudy-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-code fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                code
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-code-slash fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                code-slash
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-code-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                code-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-coin fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                coin
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-collection fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                collection
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-collection-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                collection-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-collection-play fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                collection-play
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-collection-play-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                collection-play-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-columns fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                columns
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-columns-gap fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                columns-gap
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-command fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                command
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-compass fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                compass
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-compass-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                compass-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cone fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cone
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cone-striped fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cone-striped
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-controller fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                controller
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cpu fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cpu
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cpu-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cpu-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-credit-card fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                credit-card
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-credit-card-2-back fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                credit-card-2-back
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-credit-card-2-back-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                credit-card-2-back-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-credit-card-2-front fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                credit-card-2-front
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-credit-card-2-front-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                credit-card-2-front-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-credit-card-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                credit-card-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-crop fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                crop
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cup fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cup
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cup-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cup-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cup-straw fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cup-straw
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-currency-bitcoin fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                currency-bitcoin
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-currency-dollar fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                currency-dollar
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-currency-euro fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                currency-euro
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-currency-exchange fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                currency-exchange
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-currency-pound fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                currency-pound
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-currency-yen fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                currency-yen
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cursor fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cursor
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cursor-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cursor-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-cursor-text fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                cursor-text
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dash fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dash
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dash-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dash-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dash-circle-dotted fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dash-circle-dotted
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dash-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dash-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dash-lg fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dash-lg
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dash-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dash-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dash-square-dotted fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dash-square-dotted
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dash-square-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dash-square-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-device-hdd fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                device-hdd
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-device-hdd-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                device-hdd-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-device-ssd fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                device-ssd
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-device-ssd-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                device-ssd-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-diagram-2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                diagram-2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-diagram-2-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                diagram-2-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-diagram-3 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                diagram-3
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-diagram-3-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                diagram-3-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-diamond fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                diamond
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-diamond-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                diamond-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-diamond-half fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                diamond-half
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dice-1 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dice-1
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dice-1-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dice-1-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dice-2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dice-2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dice-2-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dice-2-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dice-3 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dice-3
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dice-3-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dice-3-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dice-4 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dice-4
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dice-4-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dice-4-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dice-5 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dice-5
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dice-5-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dice-5-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dice-6 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dice-6
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dice-6-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dice-6-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-disc fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                disc
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-disc-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                disc-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-discord fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                discord
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-display fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                display
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-display-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                display-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-displayport fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                displayport
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-displayport-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                displayport-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-distribute-horizontal fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                distribute-horizontal
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-distribute-vertical fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                distribute-vertical
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-door-closed fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                door-closed
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-door-closed-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                door-closed-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-door-open fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                door-open
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-door-open-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                door-open-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dot fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dot
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-download fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                download
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dpad fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dpad
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dpad-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dpad-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-dribbble fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                dribbble
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-droplet fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                droplet
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-droplet-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                droplet-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-droplet-half fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                droplet-half
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-ear fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                ear
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-ear-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                ear-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-earbuds fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                earbuds
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-easel fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                easel
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-easel-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                easel-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-easel2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                easel2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-easel2-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                easel2-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-easel3 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                easel3
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-easel3-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                easel3-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-egg fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                egg
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-egg-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                egg-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-egg-fried fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                egg-fried
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-eject fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                eject
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-eject-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                eject-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-angry fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-angry
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-angry-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-angry-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-dizzy fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-dizzy
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-dizzy-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-dizzy-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-expressionless fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-expressionless
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-expressionless-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-expressionless-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-frown fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-frown
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-frown-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-frown-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-heart-eyes fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-heart-eyes
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-heart-eyes-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-heart-eyes-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-kiss fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-kiss
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-kiss-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-kiss-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-laughing fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-laughing
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-laughing-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-laughing-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-neutral fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-neutral
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-neutral-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-neutral-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-smile fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-smile
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-smile-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-smile-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-smile-upside-down fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-smile-upside-down
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-smile-upside-down-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-smile-upside-down-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-sunglasses fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-sunglasses
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-sunglasses-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-sunglasses-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-wink fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-wink
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-emoji-wink-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                emoji-wink-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope-check fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope-check
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope-check-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope-check-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope-dash fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope-dash
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope-dash-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope-dash-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope-exclamation fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope-exclamation
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope-exclamation-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope-exclamation-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope-heart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope-heart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope-heart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope-heart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope-open fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope-open
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope-open-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope-open-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope-open-heart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope-open-heart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope-open-heart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope-open-heart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope-paper fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope-paper
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope-paper-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope-paper-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope-paper-heart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope-paper-heart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope-paper-heart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope-paper-heart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope-plus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope-plus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope-plus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope-plus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope-slash fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope-slash
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope-slash-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope-slash-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope-x fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope-x
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-envelope-x-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                envelope-x-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-eraser fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                eraser
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-eraser-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                eraser-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-ethernet fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                ethernet
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-exclamation fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                exclamation
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-exclamation-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                exclamation-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-exclamation-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                exclamation-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-exclamation-diamond fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                exclamation-diamond
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-exclamation-diamond-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                exclamation-diamond-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-exclamation-lg fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                exclamation-lg
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-exclamation-octagon fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                exclamation-octagon
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-exclamation-octagon-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                exclamation-octagon-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-exclamation-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                exclamation-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-exclamation-square-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                exclamation-square-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-exclamation-triangle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                exclamation-triangle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-exclamation-triangle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                exclamation-triangle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-exclude fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                exclude
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-explicit fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                explicit
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-explicit-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                explicit-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-eye fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                eye
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-eye-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                eye-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-eye-slash fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                eye-slash
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-eye-slash-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                eye-slash-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-eyedropper fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                eyedropper
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-eyeglasses fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                eyeglasses
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-facebook fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                facebook
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-fan fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                fan
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-arrow-down fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-arrow-down
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-arrow-down-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-arrow-down-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-arrow-up fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-arrow-up
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-arrow-up-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-arrow-up-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-bar-graph fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-bar-graph
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-bar-graph-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-bar-graph-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-binary fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-binary
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-binary-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-binary-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-break fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-break
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-break-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-break-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-check fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-check
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-check-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-check-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-code fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-code
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-code-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-code-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-diff fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-diff
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-diff-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-diff-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-arrow-down fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-arrow-down
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-arrow-down-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-arrow-down-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-arrow-up fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-arrow-up
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-arrow-up-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-arrow-up-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-bar-graph fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-bar-graph
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-bar-graph-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-bar-graph-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-binary fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-binary
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-binary-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-binary-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-break fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-break
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-break-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-break-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-check fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-check
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-check-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-check-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-code fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-code
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-code-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-code-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-diff fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-diff
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-diff-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-diff-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-easel fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-easel
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-easel-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-easel-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-excel fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-excel
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-excel-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-excel-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-font fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-font
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-font-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-font-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-image fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-image
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-image-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-image-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-lock fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-lock
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-lock-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-lock-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-lock2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-lock2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-lock2-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-lock2-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-medical fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-medical
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-medical-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-medical-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-minus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-minus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-minus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-minus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-music fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-music
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-music-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-music-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-pdf fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-pdf
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-pdf-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-pdf-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-person fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-person
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-person-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-person-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-play fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-play
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-play-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-play-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-plus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-plus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-plus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-plus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-post fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-post
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-post-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-post-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-ppt fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-ppt
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-ppt-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-ppt-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-richtext fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-richtext
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-richtext-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-richtext-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-ruled fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-ruled
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-ruled-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-ruled-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-slides fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-slides
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-slides-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-slides-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-spreadsheet fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-spreadsheet
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-spreadsheet-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-spreadsheet-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-text fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-text
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-text-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-text-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-word fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-word
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-word-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-word-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-x fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-x
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-x-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-x-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-zip fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-zip
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-earmark-zip-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-earmark-zip-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-easel fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-easel
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-easel-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-easel-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-excel fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-excel
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-excel-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-excel-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-font fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-font
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-font-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-font-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-image fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-image
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-image-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-image-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-lock fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-lock
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-lock-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-lock-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-lock2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-lock2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-lock2-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-lock2-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-medical fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-medical
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-medical-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-medical-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-minus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-minus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-minus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-minus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-music fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-music
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-music-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-music-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-pdf fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-pdf
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-pdf-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-pdf-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-person fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-person
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-person-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-person-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-play fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-play
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-play-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-play-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-plus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-plus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-plus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-plus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-post fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-post
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-post-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-post-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-ppt fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-ppt
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-ppt-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-ppt-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-richtext fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-richtext
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-richtext-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-richtext-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-ruled fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-ruled
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-ruled-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-ruled-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-slides fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-slides
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-slides-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-slides-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-spreadsheet fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-spreadsheet
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-spreadsheet-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-spreadsheet-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-text fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-text
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-text-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-text-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-word fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-word
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-word-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-word-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-x fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-x
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-x-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-x-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-zip fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-zip
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-file-zip-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                file-zip-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-files fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                files
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-files-alt fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                files-alt
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-aac fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-aac
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-ai fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-ai
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-bmp fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-bmp
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-cs fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-cs
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-css fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-css
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-csv fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-csv
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-doc fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-doc
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-docx fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-docx
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-exe fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-exe
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-gif fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-gif
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-heic fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-heic
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-html fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-html
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-java fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-java
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-jpg fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-jpg
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-js fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-js
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-json fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-json
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-jsx fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-jsx
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-key fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-key
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-m4p fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-m4p
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-md fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-md
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-mdx fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-mdx
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-mov fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-mov
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-mp3 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-mp3
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-mp4 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-mp4
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-otf fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-otf
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-pdf fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-pdf
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-php fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-php
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-png fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-png
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-ppt fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-ppt
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-pptx fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-pptx
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-psd fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-psd
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-py fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-py
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-raw fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-raw
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-rb fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-rb
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-sass fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-sass
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-scss fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-scss
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-sh fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-sh
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-svg fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-svg
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-tiff fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-tiff
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-tsx fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-tsx
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-ttf fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-ttf
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-txt fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-txt
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-wav fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-wav
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-woff fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-woff
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-xls fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-xls
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-xlsx fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-xlsx
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-xml fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-xml
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filetype-yml fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filetype-yml
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-film fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                film
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filter fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filter
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filter-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filter-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filter-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filter-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filter-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filter-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filter-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filter-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filter-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filter-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-filter-square-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                filter-square-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-fingerprint fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                fingerprint
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-flag fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                flag
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-flag-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                flag-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-flower1 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                flower1
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-flower2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                flower2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-flower3 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                flower3
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-folder fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                folder
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-folder-check fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                folder-check
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-folder-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                folder-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-folder-minus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                folder-minus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-folder-plus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                folder-plus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-folder-symlink fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                folder-symlink
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-folder-symlink-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                folder-symlink-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-folder-x fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                folder-x
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-folder2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                folder2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-folder2-open fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                folder2-open
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-fonts fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                fonts
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-forward fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                forward
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-forward-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                forward-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-front fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                front
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-fullscreen fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                fullscreen
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-fullscreen-exit fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                fullscreen-exit
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-funnel fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                funnel
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-funnel-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                funnel-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-gear fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                gear
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-gear-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                gear-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-gear-wide fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                gear-wide
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-gear-wide-connected fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                gear-wide-connected
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-gem fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                gem
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-gender-ambiguous fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                gender-ambiguous
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-gender-female fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                gender-female
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-gender-male fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                gender-male
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-gender-trans fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                gender-trans
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-geo fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                geo
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-geo-alt fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                geo-alt
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-geo-alt-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                geo-alt-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-geo-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                geo-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-gift fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                gift
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-gift-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                gift-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-git fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                git
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-github fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                github
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-globe fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                globe
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-globe2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                globe2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-google fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                google
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-gpu-card fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                gpu-card
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-graph-down fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                graph-down
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-graph-down-arrow fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                graph-down-arrow
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-graph-up fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                graph-up
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-graph-up-arrow fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                graph-up-arrow
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-grid fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                grid
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-grid-1x2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                grid-1x2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-grid-1x2-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                grid-1x2-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-grid-3x2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                grid-3x2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-grid-3x2-gap fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                grid-3x2-gap
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-grid-3x2-gap-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                grid-3x2-gap-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-grid-3x3 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                grid-3x3
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-grid-3x3-gap fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                grid-3x3-gap
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-grid-3x3-gap-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                grid-3x3-gap-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-grid-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                grid-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-grip-horizontal fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                grip-horizontal
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-grip-vertical fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                grip-vertical
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hammer fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hammer
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hand-index fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hand-index
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hand-index-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hand-index-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hand-index-thumb fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hand-index-thumb
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hand-index-thumb-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hand-index-thumb-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hand-thumbs-down fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hand-thumbs-down
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hand-thumbs-down-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hand-thumbs-down-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hand-thumbs-up fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hand-thumbs-up
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hand-thumbs-up-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hand-thumbs-up-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-handbag fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                handbag
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-handbag-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                handbag-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hash fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hash
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hdd fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hdd
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hdd-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hdd-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hdd-network fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hdd-network
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hdd-network-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hdd-network-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hdd-rack fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hdd-rack
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hdd-rack-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hdd-rack-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hdd-stack fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hdd-stack
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hdd-stack-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hdd-stack-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hdmi fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hdmi
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hdmi-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hdmi-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-headphones fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                headphones
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-headset fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                headset
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-headset-vr fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                headset-vr
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-heart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                heart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-heart-arrow fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                heart-arrow
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-heart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                heart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-heart-half fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                heart-half
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-heart-pulse fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                heart-pulse
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-heart-pulse-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                heart-pulse-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-heartbreak fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                heartbreak
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-heartbreak-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                heartbreak-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hearts fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hearts
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-heptagon fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                heptagon
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-heptagon-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                heptagon-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-heptagon-half fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                heptagon-half
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hexagon fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hexagon
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hexagon-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hexagon-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hexagon-half fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hexagon-half
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hospital fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hospital
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hospital-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hospital-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hourglass fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hourglass
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hourglass-bottom fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hourglass-bottom
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hourglass-split fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hourglass-split
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hourglass-top fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hourglass-top
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-house fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                house
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-house-door fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                house-door
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-house-door-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                house-door-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-house-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                house-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-house-heart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                house-heart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-house-heart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                house-heart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hr fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hr
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hurricane fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hurricane
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-hypnotize fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                hypnotize
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-image fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                image
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-image-alt fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                image-alt
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-image-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                image-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-images fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                images
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-inbox fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                inbox
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-inbox-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                inbox-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-inboxes-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                inboxes-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-inboxes fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                inboxes
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-incognito fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                incognito
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-infinity fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                infinity
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-info fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                info
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-info-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                info-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-info-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                info-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-info-lg fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                info-lg
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-info-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                info-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-info-square-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                info-square-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-input-cursor fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                input-cursor
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-input-cursor-text fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                input-cursor-text
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-instagram fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                instagram
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-intersect fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                intersect
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-journal fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                journal
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-journal-album fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                journal-album
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-journal-arrow-down fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                journal-arrow-down
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-journal-arrow-up fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                journal-arrow-up
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-journal-bookmark fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                journal-bookmark
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-journal-bookmark-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                journal-bookmark-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-journal-check fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                journal-check
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-journal-code fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                journal-code
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-journal-medical fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                journal-medical
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-journal-minus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                journal-minus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-journal-plus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                journal-plus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-journal-richtext fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                journal-richtext
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-journal-text fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                journal-text
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-journal-x fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                journal-x
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-journals fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                journals
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-joystick fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                joystick
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-justify fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                justify
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-justify-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                justify-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-justify-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                justify-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-kanban fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                kanban
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-kanban-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                kanban-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-key fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                key
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-key-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                key-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-keyboard fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                keyboard
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-keyboard-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                keyboard-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-ladder fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                ladder
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-lamp fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                lamp
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-lamp-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                lamp-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-laptop fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                laptop
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-laptop-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                laptop-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-layer-backward fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                layer-backward
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-layer-forward fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                layer-forward
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-layers fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                layers
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-layers-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                layers-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-layers-half fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                layers-half
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-layout-sidebar fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                layout-sidebar
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-layout-sidebar-inset-reverse fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                layout-sidebar-inset-reverse
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-layout-sidebar-inset fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                layout-sidebar-inset
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-layout-sidebar-reverse fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                layout-sidebar-reverse
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-layout-split fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                layout-split
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-layout-text-sidebar fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                layout-text-sidebar
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-layout-text-sidebar-reverse fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                layout-text-sidebar-reverse
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-layout-text-window fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                layout-text-window
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-layout-text-window-reverse fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                layout-text-window-reverse
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-layout-three-columns fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                layout-three-columns
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-layout-wtf fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                layout-wtf
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-life-preserver fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                life-preserver
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-lightbulb fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                lightbulb
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-lightbulb-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                lightbulb-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-lightbulb-off fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                lightbulb-off
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-lightbulb-off-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                lightbulb-off-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-lightning fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                lightning
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-lightning-charge fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                lightning-charge
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-lightning-charge-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                lightning-charge-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-lightning-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                lightning-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-line fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                line
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-link fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                link
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-link-45deg fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                link-45deg
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-linkedin fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                linkedin
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-list fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                list
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-list-check fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                list-check
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-list-columns fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                list-columns
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-list-columns-reverse fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                list-columns-reverse
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-list-nested fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                list-nested
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-list-ol fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                list-ol
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-list-stars fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                list-stars
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-list-task fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                list-task
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-list-ul fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                list-ul
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-lock fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                lock
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-lock-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                lock-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-magic fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                magic
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-magnet fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                magnet
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-magnet-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                magnet-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-mailbox fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                mailbox
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-mailbox2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                mailbox2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-map fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                map
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-map-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                map-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-markdown fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                markdown
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-markdown-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                markdown-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-mask fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                mask
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-mastodon fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                mastodon
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-medium fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                medium
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-megaphone fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                megaphone
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-megaphone-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                megaphone-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-memory fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                memory
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-menu-app fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                menu-app
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-menu-app-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                menu-app-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-menu-button fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                menu-button
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-menu-button-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                menu-button-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-menu-button-wide fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                menu-button-wide
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-menu-button-wide-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                menu-button-wide-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-menu-down fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                menu-down
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-menu-up fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                menu-up
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-messenger fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                messenger
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-meta fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                meta
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-mic fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                mic
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-mic-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                mic-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-mic-mute fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                mic-mute
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-mic-mute-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                mic-mute-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-microsoft fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                microsoft
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-minecart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                minecart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-minecart-loaded fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                minecart-loaded
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-modem fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                modem
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-modem-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                modem-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-moisture fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                moisture
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-moon fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                moon
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-moon-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                moon-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-moon-stars fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                moon-stars
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-moon-stars-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                moon-stars-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-mortarboard fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                mortarboard
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-mortarboard-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                mortarboard-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-motherboard fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                motherboard
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-motherboard-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                motherboard-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-mouse fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                mouse
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-mouse-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                mouse-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-mouse2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                mouse2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-mouse2-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                mouse2-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-mouse3 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                mouse3
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-mouse3-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                mouse3-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-music-note fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                music-note
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-music-note-beamed fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                music-note-beamed
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-music-note-list fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                music-note-list
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-music-player fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                music-player
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-music-player-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                music-player-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-newspaper fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                newspaper
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-nintendo-switch fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                nintendo-switch
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-node-minus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                node-minus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-node-minus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                node-minus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-node-plus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                node-plus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-node-plus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                node-plus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-nut fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                nut
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-nut-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                nut-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-octagon fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                octagon
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-octagon-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                octagon-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-octagon-half fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                octagon-half
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-optical-audio fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                optical-audio
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-optical-audio-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                optical-audio-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-option fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                option
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-outlet fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                outlet
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-paint-bucket fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                paint-bucket
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-palette fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                palette
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-palette-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                palette-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-palette2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                palette2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-paperclip fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                paperclip
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-paragraph fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                paragraph
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-patch-check fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                patch-check
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-patch-check-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                patch-check-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-patch-exclamation fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                patch-exclamation
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-patch-exclamation-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                patch-exclamation-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-patch-minus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                patch-minus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-patch-minus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                patch-minus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-patch-plus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                patch-plus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-patch-plus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                patch-plus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-patch-question fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                patch-question
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-patch-question-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                patch-question-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pause fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pause
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pause-btn fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pause-btn
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pause-btn-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pause-btn-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pause-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pause-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pause-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pause-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pause-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pause-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-paypal fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                paypal
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pc fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pc
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pc-display fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pc-display
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pc-display-horizontal fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pc-display-horizontal
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pc-horizontal fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pc-horizontal
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pci-card fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pci-card
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-peace fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                peace
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-peace-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                peace-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pen fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pen
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pen-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pen-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pencil fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pencil
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pencil-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pencil-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pencil-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pencil-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pentagon fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pentagon
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pentagon-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pentagon-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pentagon-half fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pentagon-half
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-people fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                people
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-person-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                person-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-people-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                people-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-percent fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                percent
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-person fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                person
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-person-badge fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                person-badge
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-person-badge-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                person-badge-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-person-bounding-box fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                person-bounding-box
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-person-check fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                person-check
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-person-check-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                person-check-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-person-dash fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                person-dash
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-person-dash-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                person-dash-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-person-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                person-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-person-heart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                person-heart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-person-hearts fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                person-hearts
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-person-lines-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                person-lines-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-person-plus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                person-plus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-person-plus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                person-plus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-person-rolodex fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                person-rolodex
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-person-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                person-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-person-video fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                person-video
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-person-video2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                person-video2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-person-video3 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                person-video3
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-person-workspace fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                person-workspace
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-person-x fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                person-x
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-person-x-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                person-x-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-phone fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                phone
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-phone-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                phone-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-phone-flip fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                phone-flip
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-phone-landscape fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                phone-landscape
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-phone-landscape-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                phone-landscape-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-phone-vibrate fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                phone-vibrate
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-phone-vibrate-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                phone-vibrate-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pie-chart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pie-chart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pie-chart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pie-chart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-piggy-bank fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                piggy-bank
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-piggy-bank-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                piggy-bank-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pin fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pin
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pin-angle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pin-angle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pin-angle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pin-angle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pin-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pin-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pin-map fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pin-map
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pin-map-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pin-map-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pinterest fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pinterest
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pip fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pip
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-pip-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                pip-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-play fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                play
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-play-btn fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                play-btn
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-play-btn-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                play-btn-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-play-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                play-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-play-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                play-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-play-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                play-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-playstation fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                playstation
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-plug fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                plug
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-plug-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                plug-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-plugin fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                plugin
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-plus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                plus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-plus-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                plus-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-plus-circle-dotted fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                plus-circle-dotted
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-plus-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                plus-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-plus-lg fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                plus-lg
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-plus-slash-minus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                plus-slash-minus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-plus-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                plus-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-plus-square-dotted fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                plus-square-dotted
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-plus-square-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                plus-square-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-postage fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                postage
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-postage-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                postage-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-postage-heart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                postage-heart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-postage-heart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                postage-heart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-postcard fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                postcard
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-postcard-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                postcard-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-postcard-heart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                postcard-heart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-postcard-heart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                postcard-heart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-power fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                power
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-printer fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                printer
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-printer-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                printer-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-projector fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                projector
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-projector-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                projector-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-puzzle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                puzzle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-puzzle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                puzzle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-qr-code fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                qr-code
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-qr-code-scan fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                qr-code-scan
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-question fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                question
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-question-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                question-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-question-diamond fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                question-diamond
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-question-diamond-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                question-diamond-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-question-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                question-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-question-lg fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                question-lg
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-question-octagon fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                question-octagon
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-question-octagon-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                question-octagon-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-question-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                question-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-question-square-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                question-square-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-quora fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                quora
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-quote fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                quote
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-radioactive fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                radioactive
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-rainbow fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                rainbow
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-receipt fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                receipt
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-receipt-cutoff fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                receipt-cutoff
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-reception-0 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                reception-0
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-reception-1 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                reception-1
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-reception-2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                reception-2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-reception-3 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                reception-3
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-reception-4 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                reception-4
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-record fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                record
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-record-btn fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                record-btn
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-record-btn-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                record-btn-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-record-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                record-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-record-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                record-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-record-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                record-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-record2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                record2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-record2-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                record2-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-recycle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                recycle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-reddit fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                reddit
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-reply fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                reply
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-reply-all fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                reply-all
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-reply-all-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                reply-all-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-reply-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                reply-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-robot fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                robot
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-router fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                router
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-router-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                router-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-rss fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                rss
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-rss-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                rss-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-rulers fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                rulers
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-safe fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                safe
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-safe-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                safe-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-safe2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                safe2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-safe2-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                safe2-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-save fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                save
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-save-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                save-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-save2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                save2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-save2-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                save2-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-scissors fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                scissors
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-screwdriver fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                screwdriver
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sd-card fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sd-card
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sd-card-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sd-card-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-search fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                search
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-search-heart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                search-heart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-search-heart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                search-heart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-segmented-nav fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                segmented-nav
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-send fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                send
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-send-check fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                send-check
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-send-check-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                send-check-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-send-dash fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                send-dash
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-send-dash-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                send-dash-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-send-exclamation fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                send-exclamation
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-send-exclamation-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                send-exclamation-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-send-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                send-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-send-plus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                send-plus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-send-plus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                send-plus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-send-slash fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                send-slash
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-send-slash-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                send-slash-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-send-x fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                send-x
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-send-x-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                send-x-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-server fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                server
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-share fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                share
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-share-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                share-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-shield fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                shield
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-shield-check fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                shield-check
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-shield-exclamation fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                shield-exclamation
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-shield-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                shield-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-shield-fill-check fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                shield-fill-check
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-shield-fill-exclamation fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                shield-fill-exclamation
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-shield-fill-minus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                shield-fill-minus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-shield-fill-plus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                shield-fill-plus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-shield-fill-x fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                shield-fill-x
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-shield-lock fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                shield-lock
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-shield-lock-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                shield-lock-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-shield-minus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                shield-minus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-shield-plus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                shield-plus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-shield-shaded fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                shield-shaded
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-shield-slash fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                shield-slash
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-shield-slash-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                shield-slash-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-shield-x fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                shield-x
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-shift fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                shift
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-shift-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                shift-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-shop fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                shop
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-shop-window fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                shop-window
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-shuffle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                shuffle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-signal fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                signal
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-signpost fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                signpost
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-signpost-2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                signpost-2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-signpost-2-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                signpost-2-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-signpost-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                signpost-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-signpost-split fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                signpost-split
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-signpost-split-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                signpost-split-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sim fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sim
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sim-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sim-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-backward fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-backward
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-backward-btn fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-backward-btn
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-backward-btn-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-backward-btn-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-backward-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-backward-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-backward-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-backward-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-backward-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-backward-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-end fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-end
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-end-btn fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-end-btn
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-end-btn-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-end-btn-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-end-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-end-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-end-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-end-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-end-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-end-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-forward fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-forward
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-forward-btn fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-forward-btn
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-forward-btn-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-forward-btn-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-forward-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-forward-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-forward-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-forward-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-forward-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-forward-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-start fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-start
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-start-btn fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-start-btn
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-start-btn-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-start-btn-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-start-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-start-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-start-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-start-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skip-start-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skip-start-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-skype fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                skype
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-slack fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                slack
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-slash fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                slash
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-slash-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                slash-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-slash-lg fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                slash-lg
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-slash-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                slash-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-slash-square-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                slash-square-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sliders fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sliders
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sliders2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sliders2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sliders2-vertical fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sliders2-vertical
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-smartwatch fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                smartwatch
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-snapchat fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                snapchat
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-snow fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                snow
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-snow2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                snow2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-snow3 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                snow3
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sort-alpha-down fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sort-alpha-down
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sort-alpha-down-alt fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sort-alpha-down-alt
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sort-alpha-up fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sort-alpha-up
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sort-alpha-up-alt fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sort-alpha-up-alt
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sort-down fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sort-down
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sort-down-alt fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sort-down-alt
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sort-numeric-down fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sort-numeric-down
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sort-numeric-down-alt fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sort-numeric-down-alt
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sort-numeric-up fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sort-numeric-up
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sort-numeric-up-alt fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sort-numeric-up-alt
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sort-up fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sort-up
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sort-up-alt fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sort-up-alt
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-soundwave fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                soundwave
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-speaker fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                speaker
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-speaker-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                speaker-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-speedometer fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                speedometer
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-speedometer2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                speedometer2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-spellcheck fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                spellcheck
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-spotify fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                spotify
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-square-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                square-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-square-half fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                square-half
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-stack fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                stack
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-stack-overflow fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                stack-overflow
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-star fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                star
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-star-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                star-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-star-half fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                star-half
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-stars fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                stars
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-steam fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                steam
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-stickies fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                stickies
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-stickies-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                stickies-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sticky fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sticky
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sticky-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sticky-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-stop fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                stop
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-stop-btn fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                stop-btn
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-stop-btn-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                stop-btn-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-stop-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                stop-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-stop-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                stop-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-stop-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                stop-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-stoplights fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                stoplights
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-stoplights-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                stoplights-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-stopwatch fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                stopwatch
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-stopwatch-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                stopwatch-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-strava fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                strava
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-subtract fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                subtract
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-suit-club fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                suit-club
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-suit-club-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                suit-club-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-suit-diamond fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                suit-diamond
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-suit-diamond-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                suit-diamond-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-suit-heart fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                suit-heart
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-suit-heart-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                suit-heart-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-suit-spade fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                suit-spade
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-suit-spade-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                suit-spade-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sun fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sun
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sun-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sun-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sunglasses fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sunglasses
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sunrise fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sunrise
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sunrise-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sunrise-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sunset fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sunset
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-sunset-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                sunset-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-symmetry-horizontal fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                symmetry-horizontal
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-symmetry-vertical fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                symmetry-vertical
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-table fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                table
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-tablet fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                tablet
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-tablet-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                tablet-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-tablet-landscape fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                tablet-landscape
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-tablet-landscape-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                tablet-landscape-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-tag fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                tag
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-tag-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                tag-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-tags fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                tags
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-tags-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                tags-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-telegram fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                telegram
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-telephone fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                telephone
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-telephone-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                telephone-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-telephone-forward fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                telephone-forward
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-telephone-forward-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                telephone-forward-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-telephone-inbound fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                telephone-inbound
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-telephone-inbound-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                telephone-inbound-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-telephone-minus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                telephone-minus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-telephone-minus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                telephone-minus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-telephone-outbound fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                telephone-outbound
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-telephone-outbound-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                telephone-outbound-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-telephone-plus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                telephone-plus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-telephone-plus-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                telephone-plus-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-telephone-x fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                telephone-x
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-telephone-x-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                telephone-x-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-terminal fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                terminal
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-terminal-dash fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                terminal-dash
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-terminal-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                terminal-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-terminal-plus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                terminal-plus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-terminal-split fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                terminal-split
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-terminal-x fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                terminal-x
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-text-center fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                text-center
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-text-indent-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                text-indent-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-text-indent-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                text-indent-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-text-left fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                text-left
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-text-paragraph fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                text-paragraph
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-text-right fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                text-right
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-textarea fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                textarea
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-textarea-resize fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                textarea-resize
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-textarea-t fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                textarea-t
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-thermometer fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                thermometer
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-thermometer-half fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                thermometer-half
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-thermometer-high fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                thermometer-high
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-thermometer-low fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                thermometer-low
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-thermometer-snow fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                thermometer-snow
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-thermometer-sun fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                thermometer-sun
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-three-dots fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                three-dots
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-three-dots-vertical fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                three-dots-vertical
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-thunderbolt fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                thunderbolt
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-thunderbolt-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                thunderbolt-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-ticket fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                ticket
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-ticket-detailed fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                ticket-detailed
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-ticket-detailed-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                ticket-detailed-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-ticket-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                ticket-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-ticket-perforated fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                ticket-perforated
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-ticket-perforated-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                ticket-perforated-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-tiktok fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                tiktok
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-toggle-off fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                toggle-off
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-toggle-on fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                toggle-on
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-toggle2-off fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                toggle2-off
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-toggle2-on fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                toggle2-on
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-toggles fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                toggles
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-toggles2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                toggles2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-tools fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                tools
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-tornado fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                tornado
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-translate fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                translate
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-trash fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                trash
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-trash-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                trash-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-trash2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                trash2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-trash2-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                trash2-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-trash3 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                trash3
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-trash3-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                trash3-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-tree fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                tree
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-tree-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                tree-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-triangle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                triangle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-triangle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                triangle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-triangle-half fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                triangle-half
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-trophy fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                trophy
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-trophy-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                trophy-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-tropical-storm fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                tropical-storm
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-truck fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                truck
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-truck-flatbed fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                truck-flatbed
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-tsunami fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                tsunami
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-tv fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                tv
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-tv-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                tv-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-twitch fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                twitch
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-twitter fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                twitter
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-type fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                type
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-type-bold fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                type-bold
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-type-h1 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                type-h1
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-type-h2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                type-h2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-type-h3 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                type-h3
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-type-italic fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                type-italic
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-type-strikethrough fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                type-strikethrough
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-type-underline fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                type-underline
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-ui-checks fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                ui-checks
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-ui-checks-grid fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                ui-checks-grid
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-ui-radios fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                ui-radios
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-ui-radios-grid fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                ui-radios-grid
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-umbrella fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                umbrella
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-umbrella-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                umbrella-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-union fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                union
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-unlock fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                unlock
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-unlock-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                unlock-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-upc fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                upc
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-upc-scan fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                upc-scan
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-upload fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                upload
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-usb fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                usb
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-usb-c fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                usb-c
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-usb-c-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                usb-c-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-usb-drive fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                usb-drive
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-usb-drive-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                usb-drive-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-usb-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                usb-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-usb-micro fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                usb-micro
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-usb-micro-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                usb-micro-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-usb-mini fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                usb-mini
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-usb-mini-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                usb-mini-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-usb-plug fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                usb-plug
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-usb-plug-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                usb-plug-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-usb-symbol fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                usb-symbol
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-valentine fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                valentine
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-valentine2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                valentine2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-vector-pen fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                vector-pen
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-view-list fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                view-list
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-view-stacked fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                view-stacked
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-vimeo fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                vimeo
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-vinyl fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                vinyl
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-vinyl-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                vinyl-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-voicemail fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                voicemail
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-volume-down fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                volume-down
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-volume-down-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                volume-down-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-volume-mute fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                volume-mute
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-volume-mute-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                volume-mute-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-volume-off fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                volume-off
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-volume-off-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                volume-off-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-volume-up fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                volume-up
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-volume-up-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                volume-up-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-vr fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                vr
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-wallet fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                wallet
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-wallet-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                wallet-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-wallet2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                wallet2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-watch fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                watch
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-water fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                water
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-webcam fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                webcam
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-webcam-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                webcam-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-whatsapp fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                whatsapp
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-wifi fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                wifi
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-wifi-1 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                wifi-1
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-wifi-2 fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                wifi-2
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-wifi-off fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                wifi-off
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-wind fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                wind
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-window fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                window
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-window-dash fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                window-dash
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-window-desktop fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                window-desktop
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-window-dock fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                window-dock
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-window-fullscreen fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                window-fullscreen
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-window-plus fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                window-plus
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-window-sidebar fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                window-sidebar
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-window-split fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                window-split
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-window-stack fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                window-stack
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-window-x fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                window-x
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-windows fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                windows
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-wordpress fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                wordpress
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-wrench fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                wrench
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-wrench-adjustable fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                wrench-adjustable
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-wrench-adjustable-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                wrench-adjustable-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-wrench-adjustable-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                wrench-adjustable-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-x fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                x
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-x-circle fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                x-circle
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-x-circle-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                x-circle-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-x-diamond fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                x-diamond
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-x-diamond-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                x-diamond-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-x-lg fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                x-lg
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-x-octagon fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                x-octagon
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-x-octagon-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                x-octagon-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-x-square fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                x-square
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-x-square-fill fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                x-square-fill
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-xbox fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                xbox
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-yin-yang fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                yin-yang
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-youtube fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                youtube
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-zoom-in fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                zoom-in
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center pb-3">
                <i className="bi bi-zoom-out fs-24px h-60px d-flex align-items-center justify-content-center bg-light mb-1"></i>{" "}
                zoom-out
              </div>
            </div>
          </PerfectScrollbar>
        </PanelBody>
        <div className="hljs-wrapper">
          <Highlight className="html">{code1}</Highlight>
        </div>
      </Panel>
    </div>
  );
}

export default UIIconBootstrap;
