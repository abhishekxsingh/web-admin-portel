import React from "react";

const Field = ({
  fieldConfig,
  focused,
  blured,
  changed,
  register,
}) => {
  const { type, id, placeholder, validation = {}, options = [] } = fieldConfig;

  const commonProps = {
    className: `field form-control ${fieldConfig.touched && !fieldConfig.valid ? 'invalid' : ''}`,
    required: validation.required,
    onBlur: type === 'select' ? blured : focused,
    onChange: changed,
    ...register,
  };

  switch (type) {
    case "input":
      return (
        <input
          type={fieldConfig.config?.type}
          name={id}
          placeholder={placeholder}
          minLength={validation.minLength}
          maxLength={validation.maxLength}
          {...commonProps}
        />
      );
    case "textarea":
      return (
        <textarea
          placeholder={placeholder}
          minLength={validation.minLength}
          maxLength={validation.maxLength}
          {...commonProps}
        />
      );
    case "select":
      return (
        <select {...commonProps}>
          <option>{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
    default:
      return null;
  }
};

export default Field;
