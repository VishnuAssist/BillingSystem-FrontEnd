import { Card, TablePagination } from "@mui/material";

import CommonTable from "../../../Components/CommenTable";
import { useDispatch, useSelector } from "react-redux";
import InfoTableDataService from "../services/InfoTableDataService";
import InfoFilter from "./InfoSearch";
import { setCurrentPage, setInfoSearch, setItemsPerPage } from "../../../store/slices/InfoSlice";

const InfoTable = () => {
  const dispatch = useDispatch();
  const { InfoList, searchTerm,itemsPerPage,currentPage } = useSelector((state: any) => state.Info);
  const searchValue = searchTerm?.SearchTerm?.toLowerCase() || "";
  const filterInfo = InfoList.filter((info: any) => {
    const matchesSearch = info.infoTitle.toLowerCase().includes(searchValue);

    return matchesSearch;
  });

    const totalItems = filterInfo.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProviders = filterInfo.slice(startIndex, startIndex + itemsPerPage);
  
    const handleChangePage = (event: unknown, newPage: number) => {
      dispatch(setCurrentPage(newPage + 1));
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setItemsPerPage(parseInt(event.target.value, 10)));
    };
  const { columns, rows } = InfoTableDataService(paginatedProviders);
  return (
    <>
      <Card>
        <InfoFilter
          queryParams={searchTerm}
          onQueryParamsChange={(e) => dispatch(setInfoSearch(e))}
        />
        <CommonTable columns={columns} rows={rows} />
          <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={totalItems}
        rowsPerPage={itemsPerPage}
        page={currentPage - 1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Card>
    </>
  );
};

export default InfoTable;
