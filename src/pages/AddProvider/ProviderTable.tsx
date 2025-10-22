import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  Typography,
  IconButton,
  TableContainer,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { ProviderType } from '../../Models/ProviderType';
import ProviderForm from './ProviderForm';
import ProviderPreview from './ProviderPreview';
import { removeProvider, setCurrentPage, setItemsPerPage } from '../../store/slices/ProviderSlice';
import { AnimatePresence, motion } from 'framer-motion';

const ProviderTable = () => {
  const dispatch = useDispatch();

  const {providerList, searchTerm, villageFilter, currentPage, itemsPerPage} = useSelector((state: any) => state.Provider);

  const filteredProviders = providerList.filter((provider: ProviderType) => {
    const matchesSearch = provider.userName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesVillage = villageFilter === 'all' || provider.village === villageFilter;
    return matchesSearch && matchesVillage;
  });

  const totalItems = filteredProviders.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProviders = filteredProviders.slice(startIndex, startIndex + itemsPerPage);

  const handleChangePage = (event: unknown, newPage: number) => {
    dispatch(setCurrentPage(newPage + 1));
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setItemsPerPage(parseInt(event.target.value, 10)));
  };

  const [form, setForm] = useState(false);
  const openForm = () => setForm(true);
  const closeForm = () => setForm(false);

  const [update, setUpdate] = useState(false);
  const [dataToEdit, setDataToEdit] = useState<ProviderType | null>(null);
  const openUpdate = (data: ProviderType) => {
    setDataToEdit(data);
    setUpdate(true);
  };
  const closeUpdate = () => setUpdate(false);

  const [preview, setPreview] = useState(false);
  const [previewData, setPreviewData] = useState<ProviderType | null>(null);
  const openPreview = (data: ProviderType) => {
    setPreview(true);
    setPreviewData(data);
  };
  const closePreview = () => setPreview(false);

  const [alertDeleteStore, setAlertDeleteStore] = useState(false);
  const [userToDelete, setUserToDelete] = useState<ProviderType | null>(null);
  const deleteStore = () => {
    if (userToDelete) {
      dispatch(removeProvider({ id: userToDelete.id }));
      setAlertDeleteStore(false);
      setUserToDelete(null);
    }
  };
  const openDelete = (user: ProviderType) => {
    setAlertDeleteStore(true);
    setUserToDelete(user);
  };
  const closeDelete = () => {
    setAlertDeleteStore(false);
    setUserToDelete(null);
  };

  return (
    <>
    <TableContainer>
      <Table >
        <TableHead sx={{bgcolor:"background.paper"}}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Village</TableCell>
            <TableCell>District</TableCell>
            <TableCell>Cow Count</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <AnimatePresence>
            {paginatedProviders.length > 0 ? (
              paginatedProviders.map((providerDetails: ProviderType) => (
                <TableRow
                  key={providerDetails.id}
                  component={motion.tr}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <TableCell>{providerDetails.firstName}</TableCell>
                  <TableCell>{providerDetails.email}</TableCell>
                  <TableCell>{providerDetails.village}</TableCell>
                  <TableCell>{providerDetails.district}</TableCell>
                  <TableCell>{providerDetails.cowCount}</TableCell>
                  <TableCell>
                    <IconButton size="small" color="primary" onClick={() => openPreview(providerDetails)}>
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton size="small" color="warning" onClick={() => openUpdate(providerDetails)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error" onClick={() => openDelete(providerDetails)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center" sx={{ py: 3 }}>
                  <Typography variant="body1" color="textSecondary">
                    No providers found matching your criteria.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </AnimatePresence>
        </TableBody>
      </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={totalItems}
        rowsPerPage={itemsPerPage}
        page={currentPage - 1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Dialog open={alertDeleteStore} onClose={closeDelete} maxWidth="xs" fullWidth>
        <DialogContent>Are you sure you want to delete this provider?</DialogContent>
        <DialogActions>
          <Button color="primary" onClick={closeDelete}>
            Cancel
          </Button>
          <Button color="error" onClick={deleteStore}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <ProviderForm form={form} closeForm={closeForm} initialProvider={null} />
      <ProviderPreview preview={preview} closePreview={closePreview} PreviewDetails={previewData} />
      <ProviderForm form={update} closeForm={closeUpdate} initialProvider={dataToEdit} />
    </>
  );
};

export default ProviderTable;