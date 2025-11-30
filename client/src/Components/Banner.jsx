import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SellIcon from "@mui/icons-material/Sell";
import bannerBg from "../Assets/banner-bg.jpg";
import { Link } from "react-router-dom";
const Banner = ({ user }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "400px", md: "500px" },
        width: "100%",
        overflow: "hidden",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography
            variant={isSmallScreen ? "h3" : "h2"}
            component="h1"
            fontWeight="bold"
            sx={{
              mb: 2,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Buy & Sell Anything
          </Typography>

          <Typography
            variant="h6"
            component="p"
            sx={{
              mb: 4,
              maxWidth: "800px",
              mx: "auto",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
            }}
          >
            The easiest way to buy and sell locally. Join thousands of happy
            customers and find the best deals in your area.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              component={Link}
              to={"/products"}
              variant="contained"
              size="large"
              startIcon={<ShoppingCartIcon />}
              sx={{
                bgcolor: "#4caf50",
                transition: "0.3s ease-in-out",
                "&:hover": {
                  bgcolor: "#2e7d32",
                  transform: "translateY(-3px)",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                },
                borderRadius: "50px",
                px: 4,
              }}
            >
              Start Shopping
            </Button>

            <Button
              component={Link}
              to={user ? "/insert" : "/login"}
              variant="outlined"
              size="large"
              startIcon={<SellIcon />}
              sx={{
                borderColor: "white",
                color: "white",
                transition: "0.3s ease-in-out",
                "&:hover": {
                  borderColor: "white",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-3px)",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                },
                borderRadius: "50px",
                px: 4,
              }}
            >
              Sell Your Items
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
