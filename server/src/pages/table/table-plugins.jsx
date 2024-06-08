/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Panel,PanelHeader,PanelBody} from "../../components/panel/panel.jsx";
// import Highlight from "react-highlight";
import DataTable from "react-data-table-component";

const columns = [
  { name: "Number", selector: (row) => row.number, sortable: true },
  { name: "Basic Info", selector: (row) => row.basicInfo, sortable: true },
  { name: "Pan Number", selector: (row) => row.panNumber, sortable: true },
  { name: "Bank Name", selector: (row) => row.bankName, sortable: true },
  {
    name: "Current Address",
    selector: (row) => row.currentAddress,
    sortable: true,
  },
  {
    name: "Office Address",
    selector: (row) => row.officeAddress,
    sortable: true,
  },
  {
    name: "Order Status",
    selector: (row) => row.orderStatus,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    number: "LAP/FIN/001579",
    basicInfo: "Rahul",
    panNumber: "KOBPK8848M",
    bankName: "City Union Bank",
    currentAddress: "09e w s colony housing board",
    officeAddress: "09e w s colony housing board",
    orderStatus: "initiated",
  },
];

const TablePlugins = () => {
  const [setCode1] = useState();

  const rowDisabledCriteria = (row) => row.isOutOfStock;
  const rowPreDisabled = (row) => row.disabled;

  // eslint-disable-next-line react/prop-types
  const ExpandedComponent = ({ data }) => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );

  useEffect(() => {
    fetch("/assets/data/table-plugins/code-1.json")
      .then(function (response) {
        return response.text();
      })
      .then((html) => {
        setCode1(html);
      });
  }, []);

  return (
    <div>
      <ol className="breadcrumb float-xl-end">
        <li className="breadcrumb-item">
          <Link to="/table/data">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/table/data">Tables</Link>
        </li>
        <li className="breadcrumb-item active">Data Tables</li>
      </ol>
      <h1 className="page-header">
        Table Plugins <small>header small text goes here...</small>
      </h1>
      <Panel>
        <PanelHeader>React Table</PanelHeader>
        <PanelBody>
          <DataTable
            title="React DataTable Component"
            columns={columns}
            data={data}
            selectableRows
            selectableRowDisabled={rowDisabledCriteria}
            expandableRows
            expandableRowDisabled={rowPreDisabled}
            expandableRowsComponent={ExpandedComponent}
            highlightOnHover
            striped
            dense
            responsive
            pagination
          />
        </PanelBody>
        {/* <div className="hljs-wrapper">
          <Highlight className="typescript">{code1}</Highlight>
        </div> */}
      </Panel>
    </div>
  );
};

export default TablePlugins;
