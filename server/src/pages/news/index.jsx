import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
import { newsList } from "./action";
import { updateNewsStatus } from "../news-status/action";
import DataTable from "../../components/datable";
import { STATUS_MAPPER, ARTICLE_STATUS } from "./constants";
import useCustomSnackbar from "../../hooks/toaster";
import './style.scss'
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

const mobileNumberSort = (rowA, rowB) => {
  const mobileA = parseFloat(rowA.mobileNumber) || 0;
  const mobileB = parseFloat(rowB.mobileNumber) || 0;

  return mobileA - mobileB;
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
      const { publicId, title } = row;
      return (
        <Link to={`/news/detail/${publicId}`} className="">
          <span
            className={` ${
              STATUS_MAPPER[row.status]
            } px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center`}
          >
            {title || "N/A"}
          </span>
        </Link>
      );
    },
    sortable: true,
    sortFunction: caseInsensitiveSort,
    width: "20vw",
    style: {
      'div:first-child': {
        whiteSpace: 'normal !important'
      }
    }
  },
  {
    name: "Detail",
    selector: (row) => {
      const { body, publicId } = row;
      return (
        <Link to={`/news/detail/${publicId}`} className="fw-bold">
          <span
            className={` ${
              STATUS_MAPPER[row.status]
            } px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center`}
          >
            {body || "N/A"}
          </span>
        </Link>
      );
    },
    sortable: true,
    sortFunction: mobileNumberSort,
    width: "20vw",
    style: {
      'div:first-child': {
        whiteSpace: 'normal !important'
      },
    }
  },
  {
    name: "Author",
    selector: (row) => {
      const { authorName } = row;
      return <div>{authorName}</div>;
    },
    sortable: true,
    width: "10vw",
  },
  {
    name: "Statistics",
    selector: (row) => {
      const { likes, dislikes, views, bookmarks } = row;
      return (
        <div className="flex">
          <div>likes:- {likes}</div>
          <div>dislikes:- {dislikes}</div>
          <div>views:- {views}</div>
          <div>bookmarks:- {bookmarks}</div>
        </div>
      );
    },
    sortable: true,
    width: "10vw",
  },
  {
    name: "language",
    selector: (row) => {
      const { language } = row;
      return <div>{language}</div>;
    },
    sortable: true,
    width: "10vw",
  },
  {
    name: "status",
    selector: (row) => {
      const dispatch = useDispatch();
      const { showSnackbar } = useCustomSnackbar({ position: "topRight" });
      const { status, publicId } = row;

      const changeNewsStatus = (evt) => {
        if (evt && evt.preventDefault) {
          const status = evt.target.value;

          updateNewsStatus(dispatch, {
            publicId,
            status,
            notificationHandler: (type) => {
                if (type === "success") {
                  showSnackbar(`News has been changed into ${status}.`, {
                    variant: "success",
                  });
                }
                if (type === "failed") {
                  showSnackbar(`News has been changed into ${status}.`, {
                    variant: "error",
                  });
                }
            },
          });
        }
      };

      return (
        <select className="form-select" onChange={changeNewsStatus}>
          <option
            value={ARTICLE_STATUS.PENDING}
            {...(ARTICLE_STATUS.PENDING === status && { selected: true })}
          >
            {ARTICLE_STATUS.PENDING}
          </option>
          <option
            value={ARTICLE_STATUS.IN_REVIEW}
            {...(ARTICLE_STATUS.IN_REVIEW === status && { selected: true })}
          >
            {ARTICLE_STATUS.IN_REVIEW}
          </option>
          <option
            value={ARTICLE_STATUS.PUBLISHED}
            {...(ARTICLE_STATUS.PUBLISHED === status && { selected: true })}
          >
            {ARTICLE_STATUS.PUBLISHED}
          </option>
          <option
            value={ARTICLE_STATUS.UNPUBLISHED}
            {...(ARTICLE_STATUS.UNPUBLISHED === status && { selected: true })}
          >
            {ARTICLE_STATUS.UNPUBLISHED}
          </option>
        </select>
      );
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
  {
    name: "Category and Tags",
    selector: (row) => {
      const { category = [], tags = [] } = row;
      const categories = category.map((i) => i.name);
      const tag = tags.map((i) => i.name);

      return (
        <Fragment>
          <div>{categories.length ? categories.join(",") : "N/A"}</div>
          <div>{tag.length ? "#" + tag.join(",") : "N/A"}</div>
        </Fragment>
      );
    },
    sortable: true,
    width: "10vw",
  },
  {
    name: "source",
    selector: (row) => {
      const { sourceName, sourceUrl } = row;
      return (
        <>
          <div>{sourceName}</div>
          <div>
            <a target="_blank" href={sourceUrl}>
              view
            </a>
          </div>
        </>
      );
    },
    sortable: true,
    width: "10vw",
  },
];

const NewsList = () => {
  const dispatch = useDispatch();
  const [pagination] = useState({ pageNumber: 1, pageSize: 10 });
  const { pageNumber, pageSize } = pagination;
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("desc"); // Initial sort direction

  useEffect(() => {
    newsList(dispatch, { pageNumber, pageSize });
  }, []);

  const {
    data,
    pagination: { totalRecords },
    isFetching,
  } = useSelector((state) => state.news);

  const handlePerRowsChange = async (
    pageSize = pageSize,
    pageNumber = pageNumber
  ) => {
    newsList(dispatch, { pageNumber, pageSize });
  };

  const applyFilter = (data) => {
    newsList(dispatch, { pageNumber, pageSize, ...data });
  };

  const handlePageChange = (pageNumber) => {
    newsList(dispatch, { pageNumber, pageSize });
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
    <div className="news-list">
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
            <Link to="/news/compose" className="nav-link px-2">
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
      {/* <NewsCategoriesList/> */}
    </div>
  );
};

export default NewsList;
