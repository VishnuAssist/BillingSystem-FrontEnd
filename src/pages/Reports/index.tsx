import PageHeader from "../../Components/PageHeader";
import InfoIcon from "@mui/icons-material/Info";



const Info = () => {
  return (
    <div>
      <PageHeader
        title="Info"
        description="View app information, updates, and version details."
        icon={<InfoIcon />}
        btntitle="Add Info"
      />
      
    </div>
  );
};

export default Info;
