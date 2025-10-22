import { Box, Grid, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, setVillageFilter } from '../../store/slices/ProviderSlice';


const ProviderSearch = () => {
  const dispatch = useDispatch();

const {searchTerm, villageFilter, providerList} = useSelector((state: any) => state.Provider);
  const uniqueVillages = ['all', ...new Set(providerList.map((provider: any) => provider.village))];

  const handleVillageFilterChange = (event: SelectChangeEvent) => {
    dispatch(setVillageFilter(event.target.value));
  };

  return (
    <div>
      <Box margin={2}>
        <Grid container spacing={2} alignItems="center" justifyContent="flex-end">
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <TextField
              label="Search by Name"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <FormControl fullWidth size="small">
              <InputLabel>Filter by Village</InputLabel>
              <Select
                value={villageFilter}
                label="Filter by Village"
                onChange={handleVillageFilterChange}
              >
                {uniqueVillages.map((village) => (
                  <MenuItem key={village} value={village}>
                    {village === 'all' ? 'All Villages' : village}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ProviderSearch;