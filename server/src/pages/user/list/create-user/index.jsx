import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import EasyEdit from 'react-easy-edit';
import useCustomSnackbar from "../../../../hooks/toaster";
import { userList } from "./action";
import { getRole } from "../../../role/action";
import { createUser } from "../../../admin-user/action";

const UserForm = ({ saveUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <form onSubmit={handleSubmit(saveUser)}>
      <div className="mb-3">
        <label className="form-label">
          Name <span className="text-danger">*</span>
        </label>
        <div className="row">
          <div className="col-7">
            <EasyEdit
              type="text"
              onSave={(value) => saveUser({ name: value })}
              onCancel={() => {}}
              saveButtonLabel="Save"
              cancelButtonLabel="Cancel"
              attributes={{ name: "name-input", id: 1}}
            />
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">
          Email address <span className="text-danger">*</span>
        </label>
        <div className="row">
          <div className="col-7">
            <EasyEdit
              type="text"
              onSave={(value) => saveUser({ email: value })}
              onCancel={() => {}}
              saveButtonLabel="Save"
              cancelButtonLabel="Cancel"
              attributes={{ name: "email-input", id: 2 }}
            />
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">
          Phone Number <span className="text-danger">*</span>
        </label>
        <div className="row">
          <div className="col-7">
            <EasyEdit
              type="text"
              onSave={(value) => saveUser({ mobileNumber: value })}
              onCancel={() => {}}
              saveButtonLabel="Save"
              cancelButtonLabel="Cancel"
              attributes={{ name: "mobileNumber-input", id: 3 }}
            />
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">
          Role type <span className="text-danger">*</span>
        </label>
        <div className="row">
          <div className="col-7">
            <EasyEdit
              type="select"
              options={['Admin', 'User', 'Editor']}
              onSave={(value) => saveUser({ roleId: value })}
              onCancel={() => {}}
              saveButtonLabel="Save"
              cancelButtonLabel="Cancel"
              attributes={{ name: "roleId-input", id: 4 }}
            />
          </div>
        </div>
      </div>

      {/* Add EasyEdit forms for other fields like title, description, tags, category, editor, and status */}
      
      <div className="modal-footer">
        <button type="submit" className="btn btn-theme">
          Create
        </button>
      </div>
    </form>
  );
};

const CreateUser = () => {
  const dispatch = useDispatch();
  const { showSnackbar } = useCustomSnackbar({ position: "topRight" });

  const callbackHandler = (status) => {
    if (status === "success") {
      showSnackbar("User created.", {
        variant: "success",
      });
      return true;
    }

    if (status === "failure") {
      showSnackbar("Something went wrong while creating user!", {
        variant: "error",
      });
      return true;
    }
  };

  const saveUser = (data) => {
    if (data) {
      createUser(dispatch, data, callbackHandler);
      return true;
    }

    return false;
  };

  useEffect(() => {
    userList(dispatch, { pageNumber: 1, pageSize: 10 });
    getRole(dispatch);
  }, [dispatch]);

  return (
    <div className="modal fade" id="create-user">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create User </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <UserForm saveUser={saveUser} />

        </div>
      </div>
    </div>
  );
};

export default CreateUser;
