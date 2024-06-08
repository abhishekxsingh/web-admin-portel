import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AddField from "./add-field";

const Filter = (props) => {
  const {
    handle: { expand = false, setExpand },
    filterColumns = [], applyFilter
  } = props;

  const [fields, setFields] = useState(filterColumns);

  const [formValid, setFormValid] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const fieldChange = (event, field, index) => {
      const updatedFields = [...fields];
      const updatedField = { ...field };
      updatedField.value = event.target.value;
      updatedField.valid = checkValidity(updatedField);
      updatedFields.splice(index, 1, updatedField);

      let isFormValid = true;
      for (let field of updatedFields) {
          if (!field.valid) {
              isFormValid = false;
              break;
          }
      }

      setFields(updatedFields);
      setFormValid(isFormValid);
  };

  const checkValidity = (field) => {
      const rules = field.validation;
      let isValid = true;
      // ... rest of your validation logic
      return isValid;
  };

  const fieldBlur = (event, field, index) => {
      if (field.touched) return;

      const updatedFields = [...fields];
      const updatedField = { ...field };
      updatedField.touched = true;
      updatedField.valid = checkValidity(updatedField);
      updatedFields.splice(index, 1, updatedField);

      setFields(updatedFields);
  };

  const onSubmit = (data) => {
      applyFilter(data);
      //event.preventDefault();
      //alert('data submitted');
      reset()
  };


  function toggleExpand(e) {
    e.preventDefault();
    setExpand(!expand);
  }

  return (
    <div className={"theme-panel " + (expand ? "active" : "")}>
      <a
        href="#0"
        onClick={(e) => toggleExpand(e)}
        className="theme-collapse-btn"
      >
        <i className="fa fa-cog"></i>
      </a>
      <div
        className="theme-panel-content"
        data-scrollbar="true"
        data-height="100%"
      >
        <h5>Filter</h5>
        <div className="theme-panel-divider"></div>
        <fieldset>
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field, index) => (
            <div className="mb-3" key={index}>
              <label className="form-label">{field.label}</label>
              <AddField
                  key={field.id}
                  fieldConfig={field}
                  register={{...register(field.id)}}
                  blured={(event) => fieldBlur(event, field, index)}
                  changed={(event) => fieldChange(event, field, index)}
              />
            </div>
          ))}
          {/* <button type='submit' disabled={!formValid}>
              Submit
          </button> */}
          <button type="reset" className="btn btn-primary w-100px me-5px">
          Reset
        </button>
        <button type="submit" className="btn btn-default w-100px">
          Submit
        </button>
      </form>
        </fieldset>
        <div className="theme-panel-divider"></div>
      </div>
    </div>
  );
};

export default Filter;
