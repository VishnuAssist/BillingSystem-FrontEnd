import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  
} from '@mui/material';
import type { FC,  } from 'react';
import {  useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addProvider, updateProvider } from '../../store/slices/ProviderSlice';
import type { ProviderType } from '../../Models/ProviderType';
import CustomInput from '../../Components/FormComponents/CustomInput';

interface Props {
  form: boolean;
  closeForm: () => void;
  initialProvider: ProviderType | null;
}

const ProviderForm: FC<Props> = ({ form, closeForm, initialProvider }) => {
  const data: ProviderType = {
    id: 0,
    age: 0,
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    phoneNumber: '',
    village: '',
    taluk: '',
    district: '',
    pincode: 0,
    cowCount: 0,
    aadharNumber: '',
    bankName: '',
    bankAccountNumber: '',
  };

  const { register, handleSubmit, reset } = useForm({
    values: initialProvider || data,
  });
  const dispatch = useDispatch();

  const submitData = (data: any) => {
    if (initialProvider) {
      dispatch(updateProvider(data));
    } else {
      dispatch(addProvider(data));
    }
    reset();
    closeForm();
  };

  useEffect(() => {
    reset(initialProvider || data);
  }, [initialProvider, reset]);

  return (
    <Dialog open={form} onClose={closeForm} maxWidth="lg" fullWidth>
      <DialogTitle sx={{ color: 'darkblue' }}>
        {initialProvider ? 'Update Provider' : 'New Provider'}
      </DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <form onSubmit={handleSubmit(submitData)}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput label="User Name" name="userName" register={register} required />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput label="Password" name="password" register={register} required />
            </Grid>
            {!initialProvider && (
              <Grid size={{ xs: 12, md: 4 }}>
                <CustomInput label="Confirm Password" name="confirmPassword" register={register} required />
              </Grid>
            )}
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput label="First Name" name="firstName" register={register} required />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput label="Last Name" name="lastName" register={register} required />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput label="Email" name="email" register={register} required />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput label="Date of Birth" name="dob" type="date" register={register} required />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput label="Age" name="age" type="number" register={register} required />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput label="Phone Number" name="phoneNumber" register={register} required />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput label="Village" name="village" register={register} required />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput label="Taluk" name="taluk" register={register} required />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput label="District" name="district" register={register} required />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput label="Pincode" name="pincode" type="number" register={register} required />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput label="Cow Count" name="cowCount" type="number" register={register} required />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput label="Aadhar Number" name="aadharNumber" register={register} required />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput label="Bank Name" name="bankName" register={register} required />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CustomInput label="Bank Account Number" name="bankAccountNumber" register={register} required />
            </Grid>
          </Grid>
          <DialogActions>
            <Button type="submit" variant="contained" color="primary">
              {initialProvider ? 'Update' : 'Save'}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProviderForm;