import React, { useState } from "react";
import DataTable from "react-data-table-component";
import Filter from "./filter";

const DataTableComponent = (props) => {
  const {
    filterColumns,
    // pagination: { pageNumber, pageSize } = {},
    data,
    applyFilter,
    onChangeRowsPerPage,
    onChangePage,
    progressPending,
    totalRecords,
    columns,
  } = props;
  //const dispatch = useDispatch();
  //const [pagination, setPagination] = useState({ pageNumber: 1, pageSize:  10 });
  //const [nameFilter, setNameFilter] = useState(" ");
  const [expand, setExpand] = useState(false);
  //const { pageNumber, pageSize } = pagination;

  // useEffect(() => {
  //   customerList(dispatch, { pageNumber, pageSize });
  // }, []);

  // const {
  //   data,
  //   pagination: { totalRecords },
  //   isFetching,
  // } = useSelector((state) => state.customer);

  // const applyFilter = (data) => {
  //   customerList(dispatch, { pageNumber, pageSize, ...data });
  // }

  // const handlePerRowsChange = async (
  //   newPageSize = pageSize,
  //   newPageNumber = pageNumber
  // ) => {
  //   setPagination({ pageNumber: newPageNumber, pageSize: newPageSize });
  //   customerList(dispatch, {
  //     pageNumber: newPageNumber,
  //     pageSize: newPageSize,
  //   });
  // };

  // const handlePageChange = (newPageNumber) => {
  //   setPagination({ ...pagination, pageNumber: newPageNumber });
  //   customerList(dispatch, { pageNumber: newPageNumber, pageSize });
  // };

  return (
    <div className="card border-0">
      <Filter
        handle={{ expand, setExpand }}
        applyFilter={applyFilter}
        filterColumns={filterColumns}
      />
      <div className="d-flex justify-content-end p-2">
        <button
          className="btn btn-theme"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <i className="fa fa-thin fa-filter"></i>&nbsp; Filter
        </button>
      </div>

      <DataTable
        columns={columns}
        data={data}
        //filters={customerListFilter}
        striped
        dense
        responsive
        progressPending={progressPending}
        pagination
        paginationServer
        paginationTotalRows={totalRecords}
        onChangeRowsPerPage={onChangeRowsPerPage}
        onChangePage={onChangePage}
      />
    </div>
  );
};

export default DataTableComponent;
