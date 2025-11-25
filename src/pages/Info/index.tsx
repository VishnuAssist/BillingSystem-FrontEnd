import PageHeader from "../../Components/PageHeader";
import InfoIcon from "@mui/icons-material/Info";

import InfoTable from "./components/InfoTable";

const Info = () => {
  return (
    <div>
      <PageHeader
        title="Info"
        description="View app information, updates, and version details."
        icon={<InfoIcon />}
        btntitle="Add Info"
      />
      <InfoTable/>
    </div>
  );
};

export default Info;
