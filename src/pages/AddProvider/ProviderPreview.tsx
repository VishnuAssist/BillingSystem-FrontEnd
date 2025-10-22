import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
  Box,
  
  IconButton,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import {
  Close,
  Person,
  Email,
  Phone,
  Cake,
  LocationOn,
  Badge,
  Agriculture,
  AccountBalance,
} from '@mui/icons-material';
import type  { FC } from 'react';
import  type { ProviderType } from '../../Models/ProviderType';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  preview: boolean;
  closePreview: () => void;
  PreviewDetails: ProviderType | null;
}

const dialogVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', damping: 25, stiffness: 300, duration: 0.5 },
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
};

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
};

const cardHoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -5, transition: { type: 'spring', stiffness: 300 } },
};

const PreviewProvider: FC<Props> = ({ preview, closePreview, PreviewDetails }) => {
  if (!PreviewDetails) return null;

  const getInitials = (firstName?: string, lastName?: string) => {
    const first = firstName?.charAt(0) || '';
    const last = lastName?.charAt(0) || '';
    return (first + last).toUpperCase() || 'P';
  };

  const DetailItem: FC<{ icon: React.ReactNode; label: string; value?: string | number }> = ({
    icon,
    label,
    value,
  }) => (
    <motion.div variants={itemVariants}>
      <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Grid size={{ xs: 1 }}>
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Box sx={{ color: 'primary.main' }}>{icon}</Box>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Typography variant="body2" color="text.secondary" fontWeight="medium">
            {label}
          </Typography>
        </Grid>
        <Grid size={{ xs: 7 }}>
          <Typography variant="body1" fontWeight="medium">
            {value || 'Not provided'}
          </Typography>
        </Grid>
      </Grid>
    </motion.div>
  );

  return (
    <AnimatePresence>
      {preview && (
        <Dialog
          open={preview}
          onClose={closePreview}
          maxWidth="md"
          fullWidth
          PaperComponent={motion.div}
          PaperProps={{ variants: dialogVariants, initial: 'hidden', animate: 'visible', exit: 'exit' } as any}
          sx={{ '& .MuiDialog-container': { backdropFilter: 'blur(4px)' } }}
        >
          <motion.div variants={dialogVariants} initial="hidden" animate="visible" exit="exit">
            <DialogTitle
              sx={{
                background: 'linear-gradient(135deg, #1976d2 0%, #115293 100%)',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 2,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <motion.div animate={{ rotate: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    <Person />
                  </motion.div>
                  <Typography variant="h6" fontWeight="bold">
                    Provider Details
                  </Typography>
                </Box>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}>
                <IconButton onClick={closePreview} sx={{ color: 'white' }} size="small">
                  <Close />
                </IconButton>
              </motion.div>
              <motion.div
                animate={{ rotate: 360, transition: { duration: 20, repeat: Infinity, ease: 'linear' } }}
                style={{
                  position: 'absolute',
                  top: -50,
                  right: -50,
                  width: 100,
                  height: 100,
                  border: '2px solid rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                }}
              />
            </DialogTitle>
            <DialogContent sx={{ p: 0, overflow: 'hidden' }}>
              <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #f5f5f5 0%, #e8f5fe 100%)',
                    p: 3,
                    borderBottom: '1px solid',
                    borderColor: 'grey.200',
                  }}
                >
                  <Grid container spacing={3} alignItems="center">
                    <Grid>
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                        <Avatar
                          sx={{
                            width: 80,
                            height: 80,
                            bgcolor: 'primary.main',
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            border: '4px solid white',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                          }}
                        >
                          {getInitials(PreviewDetails.firstName, PreviewDetails.lastName)}
                        </Avatar>
                      </motion.div>
                    </Grid>
                    <Grid>
                      <motion.div variants={staggerVariants} initial="hidden" animate="visible">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                          <motion.div variants={itemVariants}>
                            <Typography variant="h5" fontWeight="bold" color="primary.dark">
                              {PreviewDetails.firstName} {PreviewDetails.lastName}
                            </Typography>
                          </motion.div>
                        </Box>
                        <motion.div variants={itemVariants}>
                          <Typography variant="body1" color="text.secondary">
                            @{PreviewDetails.userName}
                          </Typography>
                        </motion.div>
                        {PreviewDetails.email && (
                          <motion.div variants={itemVariants}>
                            <Typography variant="body2" color="primary.main" sx={{ mt: 0.5 }}>
                              {PreviewDetails.email}
                            </Typography>
                          </motion.div>
                        )}
                      </motion.div>
                    </Grid>
                  </Grid>
                </Box>
              </motion.div>
              <motion.div variants={staggerVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }}>
                <Box sx={{ p: 3 }}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <motion.div variants={itemVariants}>
                        <motion.div variants={cardHoverVariants} initial="rest" whileHover="hover">
                          <Card
                            variant="outlined"
                            sx={{
                              height: '100%',
                              border: '2px solid',
                              borderColor: 'grey.100',
                              borderRadius: 2,
                              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            }}
                          >
                            <CardContent>
                              <motion.div whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                  <Badge sx={{ color: 'primary.main' }} />
                                  <Typography variant="h6" fontWeight="bold" color="primary.dark">
                                    Personal Information
                                  </Typography>
                                </Box>
                              </motion.div>
                              <DetailItem icon={<Cake fontSize="small" />} label="Date of Birth" value={PreviewDetails.dob} />
                              <DetailItem icon={<Person fontSize="small" />} label="Age" value={PreviewDetails.age} />
                              <DetailItem icon={<Email fontSize="small" />} label="Email" value={PreviewDetails.email} />
                              <DetailItem icon={<Phone fontSize="small" />} label="Phone" value={PreviewDetails.phoneNumber} />
                            </CardContent>
                          </Card>
                        </motion.div>
                      </motion.div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <motion.div variants={itemVariants}>
                        <motion.div variants={cardHoverVariants} initial="rest" whileHover="hover">
                          <Card
                            variant="outlined"
                            sx={{
                              height: '100%',
                              border: '2px solid',
                              borderColor: 'grey.100',
                              borderRadius: 2,
                              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            }}
                          >
                            <CardContent>
                              <motion.div whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                  <LocationOn sx={{ color: 'primary.main' }} />
                                  <Typography variant="h6" fontWeight="bold" color="primary.dark">
                                    Address Details
                                  </Typography>
                                </Box>
                              </motion.div>
                              <DetailItem icon={<LocationOn fontSize="small" />} label="Village" value={PreviewDetails.village} />
                              <DetailItem icon={<LocationOn fontSize="small" />} label="Taluk" value={PreviewDetails.taluk} />
                              <DetailItem icon={<LocationOn fontSize="small" />} label="District" value={PreviewDetails.district} />
                              <DetailItem icon={<LocationOn fontSize="small" />} label="Pincode" value={PreviewDetails.pincode} />
                            </CardContent>
                          </Card>
                        </motion.div>
                      </motion.div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <motion.div variants={itemVariants}>
                        <motion.div variants={cardHoverVariants} initial="rest" whileHover="hover">
                          <Card
                            variant="outlined"
                            sx={{
                              border: '2px solid',
                              borderColor: 'success.light',
                              borderRadius: 2,
                              background: 'linear-gradient(135deg, #f8fff8 0%, #f0fff0 100%)',
                            }}
                          >
                            <CardContent>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                <Agriculture sx={{ color: 'success.main' }} />
                                <Typography variant="h6" fontWeight="bold" color="success.dark">
                                  Dairy Details
                                </Typography>
                              </Box>
                              <DetailItem icon={<Agriculture fontSize="small" />} label="Cow Count" value={PreviewDetails.cowCount} />
                            </CardContent>
                          </Card>
                        </motion.div>
                      </motion.div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <motion.div variants={itemVariants}>
                        <motion.div variants={cardHoverVariants} initial="rest" whileHover="hover">
                          <Card
                            variant="outlined"
                            sx={{
                              border: '2px solid',
                              borderColor: 'warning.light',
                              borderRadius: 2,
                              background: 'linear-gradient(135deg, #fffaf0 0%, #fff5e6 100%)',
                            }}
                          >
                            <CardContent>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                <AccountBalance sx={{ color: 'warning.main' }} />
                                <Typography variant="h6" fontWeight="bold" color="warning.dark">
                                  Banking Details
                                </Typography>
                              </Box>
                              <DetailItem icon={<Badge fontSize="small" />} label="Aadhar Number" value={PreviewDetails.aadharNumber} />
                              <DetailItem icon={<AccountBalance fontSize="small" />} label="Bank Name" value={PreviewDetails.bankName} />
                              <DetailItem icon={<AccountBalance fontSize="small" />} label="Account Number" value={PreviewDetails.bankAccountNumber} />
                            </CardContent>
                          </Card>
                        </motion.div>
                      </motion.div>
                    </Grid>
                  </Grid>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                    <Box sx={{ mt: 3, textAlign: 'center' }}>
                      <Typography variant="body2" color="text.secondary">
                        ID: {PreviewDetails.id} • Last updated: {new Date().toLocaleDateString()}
                      </Typography>
                    </Box>
                  </motion.div>
                </Box>
              </motion.div>
            </DialogContent>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default PreviewProvider;