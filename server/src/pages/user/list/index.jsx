import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useCustomSnackbar from "../../../hooks/toaster";
import { userList } from "./action";
import { createUser } from "../../admin-user/action";
import { STATUS_MAPPER } from "./constants";
import { getRole } from "../../role/action";
import CreateUser from "./create-user";
import CreateRole from "./create-role";

const UserList = () => {
  const dispatch = useDispatch();
  const [pagination] = useState({ pageNumber: 1, pageSize: 10 });
  const { pageNumber, pageSize } = pagination;
  const { showSnackbar } = useCustomSnackbar({ position: "topRight" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  
  const { errors: createUserErrors } = useSelector((state) => {
    return state["admin-user"];
  });

  const callbackHandler = (status) => {
    if (status === "success") {
      showSnackbar("User created.", {
        variant: "success",
      });
      reset();
      return true;
    }

    if (status === "failure") {
      showSnackbar("Something went wrong, while creating user!", {
        variant: "error",
      });
      return true;
    }
  };

  const onSubmit = (data) => {
    if (data) {
      createUser(dispatch, data, callbackHandler);

      return true;
    }

    return false;
  };

  const { data: roleTypes } = useSelector((state) => {
    return state.role;
  });
  console.log(roleTypes)
  useEffect(() => {
    userList(dispatch, { pageNumber, pageSize });
    getRole(dispatch);
  }, []);

  const {
    data,
    pagination: { totalRecords },
    isFetching,
  } = useSelector((state) => {
    return state.list;
  });

  const handlePerRowsChange = async (
    pageSize = pageSize,
    pageNumber = pageNumber
  ) => {
    userList(dispatch, { pageNumber, pageSize });
  };

  const handlePageChange = (pageNumber) => {
    userList(dispatch, { pageNumber, pageSize });
  };

  const fetchedColumns = [
    {
      name: "Name",
      selector: ({ publicId, name }) => {
        return name ? (
          <Link to={`/user/profile/${publicId}`} className="fw-bold">
            {name}
          </Link>
        ) : (
          "N/A"
        );
      },
    },
    {
      name: "Mobile Number",
      selector: (row) => {
        return row.mobileNumber || "N/A";
      },
    },
    {
      name: "Email Id",
      selector: (row) => {
        return row.email || "N/A";
      },
    },
    {
      name: "Role",
      selector: ({role: {role}}) => {
        return role;
      },
    },
    {
      name: "Status",
      selector: (row) => {
        return (
          <span
            className={`badge border ${STATUS_MAPPER[row.status]
              } px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center`}
          >
            <i className="fa fa-circle fs-9px fa-fw me-1"></i> {row.status}
          </span>
        );
      },
    },
  ];

  return (
    <div>
      <div className="d-flex align-items-center mb-3">
        <div>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/dashboard">Home</a>
            </li>
          </ul>
        </div>

        <div className="ms-auto">
        <a
            href="#create-user"
            data-bs-toggle="modal"
            className="btn btn-success btn-rounded px-4 rounded-pill"
          >
            <i className="fa fa-plus fa-lg me-2 ms-n2 text-success-900 white-icon"></i>{" "}
            Create User
          </a>
          <a
            href="#model-create-role"
            data-bs-toggle="modal"
            className="btn btn-success btn-rounded px-4 rounded-pill mx-md-1"
          >
            <i className="fa fa-plus fa-lg me-2 ms-n2 text-success-900 white-icon"></i>{" "}
            Create role
          </a>
        </div>
      </div>

      <CreateUser/>
      <CreateRole/>


      <div className="card border-0">
        <ul className="nav nav-tabs nav-tabs-v2 px-3">
          <li className="nav-item me-2">
            <a href="#/" className="nav-link px-2 active">
              All Users
            </a>
          </li>
        </ul>
        <div className="tab-content p-3">
          <div className="tab-pane fade show active" id="allTab">
            <DataTable
              columns={fetchedColumns}
              data={data}
              striped
              dense
              responsive
              progressPending={isFetching}
              pagination
              paginationServer
              paginationTotalRows={totalRecords}
              onChangeRowsPerPage={handlePerRowsChange}
              onChangePage={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
