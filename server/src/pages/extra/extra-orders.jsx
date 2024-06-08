import React, {useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";
// import {extraOrders} from '../../pages/order/action'

const fetchedColumns = [
  { name: "Number", selector: (row) => row.number, sortable: true },
  { name: "Customer", selector: (row) => row.customer, sortable: true },
  { name: "Date", selector: (row) => row.date, sortable: true },
  {
    name: "Payment Status",
    selector: (row) => {
      return (<td>
        <span className="badge border border-success text-success px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center">
          <i className="fa fa-circle fs-9px fa-fw me-5px"></i>{" "}
          {row.paymentStatus}
        </span>
      </td>)
    },
    sortable: true,
  },
  {
    name: "Pan Number",
    selector: (row) => row.fulfillmentStatus,
    sortable: true,
  },
  { name: "Order Status", selector: (row) => row.items, sortable: true },
  { name: "Total", selector: (row) => row.total, sortable: true },
];
const data = [
  {
    id: 1,
    number: (
      <Link to="/extra/order-details" className="fw-bold">
        #LAP/FIN/001579
      </Link>
    ),
    date: "Thu 26 Nov, 12:23pm",
    customer: "Amanda Lee",
    total: "$398.00",
    paymentStatus: "Paid",
    fulfillmentStatus: "KOBPK8848M",
    items: "initiated",
    deliveryMethod: "Free shipping",
  },
];
const ExtraOrders = () => {
  // const dispatch = useDispatch();
  // const tableDataState = useSelector(state => state.tableData);

// useEffect(() => {
//   dispatch(extraOrders()); // Dispatch the action to trigger the Saga
// }, [dispatch]);


  return (
    <div>
      <div className="d-flex align-items-center mb-3">
        <div>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#/">Extra</a>
            </li>
            <li className="breadcrumb-item active">Orders</li>
          </ul>
          <h1 className="page-header mb-0">Orders</h1>
        </div>
        <div className="ms-auto">
          <a
            href="#/"
            className="btn btn-success btn-rounded px-4 rounded-pill"
          >
            <i className="fa fa-plus fa-lg me-2 ms-n2 text-success-900"></i>{" "}
            Create Orders
          </a>
        </div>
      </div>

      <div className="mb-3 d-md-flex fw-bold">
        <div className="mt-md-0 mt-2">
          <a href="#/" className="text-dark text-decoration-none">
            <i className="fa fa-download fa-fw me-1 text-dark text-opacity-50"></i>{" "}
            Export
          </a>
        </div>
        <div className="ms-md-4 mt-md-0 mt-2 dropdown-toggle">
          <a
            href="#/"
            data-bs-toggle="dropdown"
            className="text-dark text-decoration-none"
          >
            More Actions <b className="caret"></b>
          </a>
          <div className="dropdown-menu">
            <a href="#/" className="dropdown-item">
              Action
            </a>
            <a href="#/" className="dropdown-item">
              Another action
            </a>
            <a href="#/" className="dropdown-item">
              Something else here
            </a>
            <div role="separator" className="dropdown-divider"></div>
            <a href="#/" className="dropdown-item">
              Separated link
            </a>
          </div>
        </div>
      </div>

      <div className="card border-0">
        <ul className="nav nav-tabs nav-tabs-v2 px-3">
          <li className="nav-item me-2">
            <a href="#/" className="nav-link px-2 active">
              All
            </a>
          </li>
          <li className="nav-item me-2">
            <a href="#/" className="nav-link px-2">
              Unfulfilled
            </a>
          </li>
          <li className="nav-item me-2">
            <a href="#/" className="nav-link px-2">
              Unpaid
            </a>
          </li>
          <li className="nav-item me-2">
            <a href="#/" className="nav-link px-2">
              Open
            </a>
          </li>
          <li className="nav-item me-2">
            <a href="#/" className="nav-link px-2">
              Closed
            </a>
          </li>
          <li className="nav-item me-2">
            <a href="#/" className="nav-link px-2">
              Local delivery
            </a>
          </li>
        </ul>
        <div className="tab-content p-3">
          <div className="tab-pane fade show active" id="allTab">
            <div className="input-group mb-3">
              <button
                className="btn btn-white dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                <span className="d-none d-md-inline">Filter orders</span>
                <span className="d-inline d-md-none">
                  <i className="fa fa-credit-card"></i>
                </span>{" "}
                <b className="caret"></b>
              </button>
              <div className="dropdown-menu">
                <a href="#/" className="dropdown-item">
                  Action
                </a>
                <a href="#/" className="dropdown-item">
                  Another action
                </a>
                <a href="#/" className="dropdown-item">
                  Something else here
                </a>
                <div role="separator" className="dropdown-divider"></div>
                <a href="#/" className="dropdown-item">
                  Separated link
                </a>
              </div>
              <div className="flex-fill position-relative">
                <div className="input-group">
                  <div
                    className="input-group-text position-absolute top-0 bottom-0 bg-none border-0 start-0"
                    style={{ zIndex: 10 }}
                  >
                    <i className="fa fa-search opacity-5"></i>
                  </div>
                  <input
                    type="text"
                    className="form-control px-35px bg-light"
                    placeholder="Search orders..."
                  />
                </div>
              </div>
            </div>
            <DataTable
              title="Orders"
              columns={fetchedColumns}
              data={data}
              pagination
              highlightOnHover
              striped
              dense
              responsive
            />
            <div className="d-md-flex align-items-center">
              <div className="me-md-auto text-md-left text-center mb-2 mb-md-0">
                Showing 1 to 10 of 57 entries
              </div>
              <ul className="pagination mb-0 justify-content-center">
                <li className="page-item disabled">
                  <a href="#/" className="page-link">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a href="#/" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#/" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a href="#/" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="#/" className="page-link">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a href="#/" className="page-link">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a href="#/" className="page-link">
                    6
                  </a>
                </li>
                <li className="page-item">
                  <a href="#/" className="page-link">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraOrders;
