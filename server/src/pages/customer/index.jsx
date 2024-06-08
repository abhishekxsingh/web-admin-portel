import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { customerList } from "./action";
import DataTable from "../../components/datable";
import { STATUS_MAPPER, EMAIL_MAPPER } from "./constants";

const caseInsensitiveSort = (rowA, rowB) => {
  const a = (rowA && rowA.name) ? rowA.name.toLowerCase() : '';
  const b = (rowB && rowB.name) ? rowB.name.toLowerCase() : '';

  if (a > b) {
      return 1;
  }

  if (b > a) {
      return -1;
  }

  return 0;
};

const mobileNumberSort = (rowA, rowB) => {
  const mobileA = parseFloat(rowA.mobileNumber) || 0;
  const mobileB = parseFloat(rowB.mobileNumber) || 0;

  return mobileA - mobileB;
};

const filterColumns = [
  {
    id: "name",
    label: "Name",
    type: "input",
    placeholder: "Enter name",
    config: {
      dataType: "text",
      placeholder: "Your Name",
    },
    value: "",
    validation: {
      required: false,
    },
    valid: false,
    errorMessage: "Enter Valid data",
    touched: false,
  },
  {
    id: "mobileNumber",
    label: "Mobile number",
    type: "input",
    placeholder: "Enter Mobile Number",
    config: {
      dataType: "number",
      placeholder: "9933423456",
    },
    value: "",
    validation: {
      required: false,
    },
    valid: false,
    errorMessage: "Enter Valid data",
    touched: false,
  },
];


const fetchedColumns = [
  {
    name: "Name",
    selector: (row) => {
      const { publicId, name } = row;
      return (
        <Link to={`/customer/profile/${publicId}`} className="fw-bold">
          {name || "N/A"}
        </Link>
      );
    },
    sortable: true,
    sortFunction: caseInsensitiveSort
  },
  {
    name: "Mobile Number",
    selector: (row) => {
      const { mobileNumber , publicId} = row;
      return (
        <Link to={`/customer/profile/${publicId}`} className="fw-bold">
          <span
            className={` ${
              STATUS_MAPPER[row.status]
            } px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center`}
          >
            <i className="fa-solid fa-mobile-screen-button"></i> &nbsp;&nbsp;
            {mobileNumber || "N/A"}
          </span>
        </Link>
      );
    },
    sortable: true,
    sortFunction: mobileNumberSort,
  },
  {
    name: "Email Id",
    selector: ({primaryEmail}) => {
      return (
        <span>
          <i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;
          {primaryEmail || "N/A"}
        </span>
      );
    },
    sortable: true,
  },
  {
    name: "Email verified",
    selector: (row) => {
      return (
        <span
          className={`badge border ${
            EMAIL_MAPPER[row.isPrimaryEmailVerified]
          } px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center`}
        >
          <i className="fa fa-circle fs-9px fa-fw me-5px"></i>{" "}
          {row.isPrimaryEmailVerified ? "verified" : "unverified"}
        </span>
      );
    },
    sortable: true,
  },
  // {
  //   name: "Status",
  //   selector: (row) => {
  //     return (
  //       <span
  //         className={`badge border ${
  //           STATUS_MAPPER[row.status]
  //         } px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center`}
  //       >
  //         <i className="fa fa-circle fs-9px fa-fw me-1"></i>
  //         {row.status}
  //       </span>
  //     );
  //   },
  //   sortable: true,
  // },
];

const CustomerList = () => {
  const dispatch = useDispatch();
  const [pagination] = useState({ pageNumber: 1, pageSize: 10 });
  const { pageNumber, pageSize } = pagination;
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('desc'); // Initial sort direction
  
  
  useEffect(() => {
    customerList(dispatch, { pageNumber, pageSize });
  }, []);

  const {
    data,
    pagination: { totalRecords },
    isFetching,
  } = useSelector((state) => state.customer);

  const handlePerRowsChange = async (
    pageSize = pageSize,
    pageNumber = pageNumber
  ) => {
    customerList(dispatch, { pageNumber, pageSize });
  };

  const applyFilter = (data) => {
    customerList(dispatch, { pageNumber, pageSize, ...data });
  }


  const handlePageChange = (pageNumber) => {
    customerList(dispatch, { pageNumber, pageSize });
  };

  const handleColumnSort = (column) => {
    if (sortedColumn === column) {
      // If already sorted, reverse the direction
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // If sorting a different column, set it as the sorted column and reset direction to ascending
      setSortedColumn(column);
      setSortDirection('asc');
    }
    // Perform sorting logic based on 'column' and 'sortDirection' and update your data accordingly
    // Example: You might use Array.sort() or another sorting method here
    // Update 'data' with the sorted result
  };

  return (
    <div>
      <div className="d-flex align-items-center mb-3">
        <div>
          <ul className="breadcrumb">
          </ul>
        </div>
      </div>
      <div className="card border-0">
        <ul className="nav nav-tabs nav-tabs-v2 px-3">
          <li className="nav-item me-2">
            <a href="#/" className="nav-link px-2 active">
              All Customers
            </a>
          </li>
          <li className="nav-item me-6">
          </li>
        </ul>
        <div className="tab-content p-3">
          <div className="tab-pane fade show active" id="allTab">
            <DataTable
              filterColumns={filterColumns}
              applyFilter={applyFilter}
              columns={fetchedColumns}
              data={data}
              striped
              dense
              responsive
              progressPending={isFetching}
              pagination
              paginationServer
              totalRecords={totalRecords}
              onChangeRowsPerPage={handlePerRowsChange}
              onChangePage={handlePageChange}
              sortServer={{
               columns: sortedColumn ? [{ column: sortedColumn, direction: sortDirection }] : {},
                onSort: (column, direction) => handleColumnSort(column), 
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
