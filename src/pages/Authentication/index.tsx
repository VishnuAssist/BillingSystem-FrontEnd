import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,

  InputLabel,
} from "@mui/material";


import { useNavigate } from "react-router";
import { useMuiTheme } from "../../contexts/ThemeContext"; // ✅ use your MUI theme
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { loginFailed, setCredentials } from "../../store/slices/loginSlice";
import Lottie from "lottie-react";
import cowAnimation from "../../../public/CowDrinkMilk.json";

const LoginPage: React.FC = () => {
    const dispatch = useAppDispatch();
  const navigate = useNavigate();
const { isAuthenticated,  } = useAppSelector((state) => state.login);
  const { providerList } = useAppSelector((state) => state.Provider); // ✅ access farmers

  const [username, setUsername] = useState("sita");
  const [password, setPassword] = useState("sita@123");
const [showAnimation, setShowAnimation] = useState(false);
  const theme = useMuiTheme(); // ✅ get theme colors



    const handleLogin = () => {
    const farmer = providerList.find(
      (f) => f.userName === username && f.password === password
    );

    if (farmer) {
      dispatch(setCredentials({ username: farmer.userName, }));
      setShowAnimation(true);
    } else {
      dispatch(loginFailed("Invalid username or password"));
    }
  };

useEffect(() => {
    if (isAuthenticated && showAnimation) {
      // Delay navigation to show animation for 2 seconds
      const timer = setTimeout(() => {
        navigate("/dashboard");
      }, 7000); // Adjust duration as needed
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [isAuthenticated, showAnimation, navigate]);

 
  // ✅ Create gradient background from theme colors
  const gradientBackground = `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      // minHeight="100vh"
      sx={{
        background: gradientBackground,
        transition: "background 0.5s ease",
        borderRadius: "20px",
        m: 1,
        p: 3,
        minHeight: "calc(100vh - 16px)",
        overflow: "hidden",
      }}
    >
      
      {showAnimation ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ height: 300 }}
        >
          <Lottie
            animationData={cowAnimation}
            loop={true}
            style={{ width: 1200, height: 1200 }}
          />
        </Box>
      ) : (
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
            width: "100%",
            maxWidth: 420,
            bgcolor: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(8px)",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          <InputLabel sx={{ color: "white", fontWeight: 500 }}>
            Username
          </InputLabel>
          <TextField
            fullWidth
            // label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
          />
          <InputLabel sx={{ color: "white", fontWeight: 500 }}>
            Password
          </InputLabel>
          <TextField
            fullWidth
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
          />

          {/* {error && (
                <Alert severity="error" sx={{ mt: 1, mb: 1 }}>
                {error}
                </Alert>
            )} */}

          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{ mt: 2, borderRadius: 2 }}
          >
            Login
          </Button>
        </Paper>)}
    
    </Box>
  );
};

export default LoginPage;
