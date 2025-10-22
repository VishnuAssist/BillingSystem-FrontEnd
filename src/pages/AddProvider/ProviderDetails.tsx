import { Card, Divider } from '@mui/material';
import ProviderTable from './ProviderTable';
import ProviderSearch from './ProviderSearch';

const ProviderDetails = () => {
  return (
    <Card sx={{bgcolor:"background.default"}}>
      <ProviderSearch />
      <Divider />
      <ProviderTable />
    </Card>
  );
};

export default ProviderDetails;