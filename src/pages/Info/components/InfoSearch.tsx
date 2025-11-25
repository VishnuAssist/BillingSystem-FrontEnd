import { Box } from "@mui/material";
import TextFilter from "../../../Components/Filters/TextFilter";




interface InfoFilterProps {
  queryParams: any;
  onQueryParamsChange: (queryParams: any) => void;
}

const InfoFilter = ({
  queryParams,
  onQueryParamsChange,
}: InfoFilterProps) => {


  const handleSearchChange = (searchTerm: string) => {
    onQueryParamsChange({
      
      SearchTerm: searchTerm || undefined,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 2,
        margin: 2,
      }}
    >
      <TextFilter
        searchTerm={queryParams.SearchTerm || ""}
        onSearchChange={handleSearchChange}
        placeholder="Search Term"
        showLabel={false}
      />

   
    </Box>
  );
};

export default InfoFilter;
