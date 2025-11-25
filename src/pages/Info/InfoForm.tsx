import { Dialog, DialogContent, Grid, TextField } from '@mui/material'
import CustomInput from '../../Components/FormComponents/CustomInput'


const InfoForm = () => {
  return (
    <div>
      <Dialog>
        <DialogContent>
            <form>
                <Grid size={{xs:6}}>
                   <CustomInput label="Info Tile" name="infoTitle" register={register} required />
                </Grid>
                <Grid size={{xs:6}}>
                   <CustomInput label="Info Description" name="infoDescription" register={register} required />
                </Grid>
                <Grid size={{xs:6}}>
                   <CustomInput label="Info Informer" name="infoInformer" register={register} required />
                </Grid>
            </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default InfoForm
