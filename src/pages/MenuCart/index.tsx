import PageHeader from "../../Components/PageHeader";
import InfoIcon from "@mui/icons-material/Info";
import MenuCart from "./menuCart";


const Info = () => {
  return (
    <div>
      <PageHeader
        title="Menu Cart"
        description="View app information, updates, and version details."
        icon={<InfoIcon />}
        btntitle="Add Info"
      />
      <MenuCart/>
    </div>
  );
};

export default Info;
