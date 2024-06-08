import React from "react";
import "./style.scss";

const BusinessInfo = (props) => {
  const { businessName, industryType,address,annualTurnover} = props;

  return (
    <div className="" style={{marginLeft: "19px",marginTop:"12px"}}>
          <div className="username fw-bold" style={{textAlign: "left"}}>&nbsp;&nbsp;&nbsp;{businessName || "FINANCIAL COMPANY"}</div><br/>
        <table className="table table-borderless fw-bold m-0">
          <tbody style={{textAlign: "left"}}>
          <tr>
            <td className="">Industry : {industryType}</td>
           
          </tr>
          <tr>
          <td className="">Annual Turnover : {annualTurnover}</td>
          </tr>
          <tr>
          <td td="">Address : {address}</td>

          </tr>
          </tbody>
          </table>
    </div>
  );
};

export default BusinessInfo;
