import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useCustomSnackbar from "../../../../hooks/toaster";
import { userList } from "./action";
import { createUser } from "../../../admin-user/action";
import { STATUS_MAPPER } from "./constants";
import { getRole } from "../../../role/action";

const CreateRole = () => {
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
      <div className="modal fade" id="model-create-role">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Role </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">
                    Role name <span className="text-danger">*</span>
                  </label>
                  <div className="row">
                    <div className="col-7">
                      <input
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <span className="text-danger">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Description <span className="text-danger">*</span>
                  </label>
                  <div className="row">
                    <div className="col-7">
                      <input
                        className="form-control"
                        placeholder="Description"
                        name="description"
                        {...register("description", { required: "Description is required" })}
                      />
                      {errors.name && (
                        <span className="text-danger">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

              </div>
              <div className="modal-footer">
                {createUserErrors.map((i, index) => {
                  const { message } = i;
                  return (
                    <div key={index}>
                      <span className="text-danger">{message}</span>
                    </div>
                  );
                })}
                <button
                  type="submit"
                  className="btn btn-theme"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default CreateRole;
