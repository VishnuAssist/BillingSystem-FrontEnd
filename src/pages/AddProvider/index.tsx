
import PageHeader from "../../Components/PageHeader";
import PageTitleWrapper from "../../Components/PageTitleWrapper";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import ProviderForm from "./ProviderForm";
import ProviderDetails from "./ProviderDetails";
import Footer from "../../Components/Footer";
import { Helmet } from "@dr.pogodin/react-helmet";

const Index = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [form, setForm] = useState(false);
  const openForm = () => {
    setForm(true);
  };
  const closeForm = () => {
    setForm(false);
  };

  return (
    <div>
      <Helmet>
        <title>Provider Join</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          title="Provider"
          btntitle="Add Provider"
          icon={""}
          onActionClick={openForm}
        />
      </PageTitleWrapper>
      <Box sx={{ maxWidth: "95%", mx: isMobile ? 1 : 4 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={0}
        >
          <Grid size={{ xs: 12 }}>
            <ProviderDetails />
          </Grid>
        </Grid>
      </Box>
      <Footer />
      <ProviderForm form={form} closeForm={closeForm} initialProvider={null} />
    </div>
  );
};

export default Index;