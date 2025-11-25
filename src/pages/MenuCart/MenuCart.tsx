import { Card, Grid, Typography } from "@mui/material";
import noImage from "../../../public/assets/no-image.png"
const MenuCart = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 2 }}>
          <Card sx={{ p: 2, bgcolor: "background.default" }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }}>
                <img src={noImage}
                style={{width:"200px",height:"200px"}}/>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
                  Idly
                </Typography>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
                  20
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default MenuCart;
