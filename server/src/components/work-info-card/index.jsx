import React from "react";
import "./style.scss";

const WorkInfo = (props) => {
  const {
    publicId,
    companyName,
    workEmail,
    designation,
    totalExperienceInMonth,
    currentExperienceInMonth,
    monthlyIncome,
  } = props;

  return (
    <div style={{ marginLeft: "22px" }}>
      <table key={publicId} className="table table-borderless fw-bold m-0">
        <tbody style={{ textAlign: "left" }}>
          <tr>
            <td className="field">Company name</td>
            <td className="with-form-control">{companyName}</td>
          </tr>
          <tr>
            <td className="field">Designation</td>
            <td className="with-form-control">{designation || "N/A"}</td>
          </tr>
          <tr>
            <td className="field">Email Id</td>
            <td className="with-form-control">{workEmail || "N/A"}</td>
          </tr>
          <tr>
            <td className="field">Current Experience</td>
            <td className="with-form-control">
              {currentExperienceInMonth || "N/A"} Months
            </td>
          </tr>
          <tr>
            <td className="field">Total Experience</td>
            <td>{totalExperienceInMonth || "N/A"} Months</td>
          </tr>
          <tr>
            <td className="field">Net Income</td>
            <td>{monthlyIncome || "N/A"}</td>
          </tr>
          <tr>
            <td className="field"></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WorkInfo;
