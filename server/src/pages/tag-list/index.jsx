import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
import { newsAddTagList } from "./action";
import DataTable from "../../components/datable";

const caseInsensitiveSort = (rowA, rowB) => {
  const a = rowA && rowA.name ? rowA.name.toLowerCase() : "";
  const b = rowB && rowB.name ? rowB.name.toLowerCase() : "";

  if (a > b) {
    return 1;
  }

  if (b > a) {
    return -1;
  }

  return 0;
};

const filterColumns = [
  {
    id: "language",
    label: "Language",
    type: "select",
    placeholder: "Enter language",
    // config: {
    //   dataType: "text",
    //   placeholder: "Enter language",
    // },
    options:[
      {
        value: "english",
        displayValue: "ENGLISH",
      },
      {
        value: "hindi",
        displayValue: "HINDI",
      },
    ],
    //value: "",
    validation: {
      required: false,
    },
    valid: false,
    errorMessage: "Enter Valid data",
    touched: false,
  },
  {
    id: "status",
    label: "Status",
    type: "select",
    placeholder: "pending",
    // config: {
    //   dataType: "number",
    //   placeholder: "9933423456",
    // },
    options:[
      {
        value: "pending",
        displayValue: "Pending",
      },
      {
        value: "in-review",
        displayValue: "In-review",
      },
      {
        value: "published",
        displayValue: "Published",
      },
      {
        value: "unpublished",
        displayValue: "Unpublished",
      }
    ],
    value: "english",
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
    name: "title",
    selector: (row) => {
      const { publicId, name } = row;
      return (
        <Link to={`/news/detail/${publicId}`} className="fw-bold">
          <span
            className={`px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center`}
          >
            {name || "N/A"}
          </span>
        </Link>
      );
    },
    sortable: true,
    sortFunction: caseInsensitiveSort,
    width: "20vw",
  },
  {
    name: "Creator",
    selector: (row) => {
      const { Creator } = row;
      return <div>{Creator ? Creator : "Admin"}</div>;
    },
    sortable: true,
    width: "10vw",
  },
  {
    name: "Description",
    selector: (row) => {
      const { description } = row;
      return (
        <div>{description}</div>

      );
    },
    sortable: true,
    width: "20vw",
    style: {
      'div:first-child': {
        whiteSpace: 'normal !important'
      },
    }
  },
  {
    name: "language",
    selector: (row) => {
      const { language } = row;
      return <div>{language ? language : "English"}</div>;
    },
    sortable: true,
    width: "10vw",
  },
  {
    name: "date",
    selector: (row) => {
      const { date } = row;
      return <div>{moment(date).format("YYYY-MM-DD HH:mm:ss")}</div>;
    },
    sortable: true,
    width: "10vw",
  },
];

const NewsTagList = () => {
  const dispatch = useDispatch();
  const [pagination] = useState({ pageNumber: 1, pageSize: 10 });
  const { pageNumber, pageSize } = pagination;
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("desc"); // Initial sort direction

  useEffect(() => {
    newsAddTagList(dispatch, { pageNumber, pageSize });
  }, []);

  const {
    data,
    pagination: { totalRecords },
    isFetching,
  } = useSelector((state) => state['tag-list']);

  const handlePerRowsChange = async (
    pageSize = pageSize,
    pageNumber = pageNumber
  ) => {
    newsAddTagList(dispatch, { pageNumber, pageSize });
  };

  const applyFilter = (data) => {
    newsAddTagList(dispatch, { pageNumber, pageSize, ...data });
  };

  const handlePageChange = (pageNumber) => {
    newsAddTagList(dispatch, { pageNumber, pageSize });
  };

  const handleColumnSort = (column) => {
    if (sortedColumn === column) {
      // If already sorted, reverse the direction
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // If sorting a different column, set it as the sorted column and reset direction to ascending
      setSortedColumn(column);
      setSortDirection("asc");
    }
    // Perform sorting logic based on 'column' and 'sortDirection' and update your data accordingly
    // Example: You might use Array.sort() or another sorting method here
    // Update 'data' with the sorted result
  };

  return (
    <div>
      <div className="d-flex align-items-center mb-3">
        <div>
          <ul className="breadcrumb"></ul>
        </div>
      </div>
      <div className="card border-0 flex">
        <ul className="nav nav-tabs nav-tabs-v2 px-3 d-flex justify-content-between">
          <li className="nav-item me-2">
            <a href="#/" className="nav-link px-2 active">
              All Customers
            </a>
          </li>

          <button className="btn btn-primary btn-sm d-flex h-25 m-1">
            <i className="icon-pencil p-2 d-flex"></i>
            <Link to="/news/edit/:publicId" className="nav-link px-2">
              Compose
            </Link>
          </button>
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
                columns: sortedColumn
                  ? [{ column: sortedColumn, direction: sortDirection }]
                  : {},
                onSort: (column, direction) => handleColumnSort(column),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTagList;
