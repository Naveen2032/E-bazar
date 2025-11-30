import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Stack,
  TextField,
  InputAdornment,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LaptopIcon from "@mui/icons-material/Laptop";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { Link } from "react-router-dom";
import bannerBg from "../Assets/banner-bg.jpg";

const AboutContent = ({ user }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Sample featured categories
  const categories = [
    {
      name: "Mobile",
      icon: (
        <SmartphoneIcon
          sx={{ fontSize: 60, color: theme.palette.success.main }}
        />
      ),
      items: "3,245",
    },
    {
      name: "Laptop",
      icon: (
        <LaptopIcon sx={{ fontSize: 60, color: theme.palette.success.main }} />
      ),
      items: "1,876",
    },
    {
      name: "Sports",
      icon: (
        <SportsSoccerIcon
          sx={{ fontSize: 60, color: theme.palette.success.main }}
        />
      ),
      items: "2,543",
    },
    {
      name: "Fitness",
      icon: (
        <FitnessCenterIcon
          sx={{ fontSize: 60, color: theme.palette.success.main }}
        />
      ),
      items: "1,987",
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 8, md: 12 },
          px: 2,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography
                variant="h3"
                component="h1"
                sx={{ color: "white", fontWeight: "bold", mb: 2 }}
              >
                Buy and Sell Anything Near You
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "white", mb: 4 }}>
                Join millions of users and discover amazing deals on second-hand
                items.
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button
                  component={Link}
                  to={"/products"}
                  variant="contained"
                  size="large"
                  startIcon={<ShoppingBagIcon />}
                  sx={{
                    bgcolor: "#FF5722",
                    "&:hover": { bgcolor: "#E64A19" },
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Start Shopping
                </Button>
                <Button
                  component={Link}
                  to={user ? "/insert" : "/login"}
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "white",
                    color: "white",
                    "&:hover": {
                      borderColor: "white",
                      bgcolor: "rgba(255,255,255,0.1)",
                    },
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Sell Now
                </Button>
              </Stack>
            </Grid>

            <Grid
              item
              xs={12}
              md={5}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              {/* Stats display */}
              <Card sx={{ bgcolor: "rgba(255,255,255,0.9)", p: 2 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                    Why Choose Our Marketplace
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <PeopleIcon
                          sx={{ mr: 1, color: theme.palette.success.main }}
                        />
                        <Box>
                          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                            5K+
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Active Users
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <LocalOfferIcon
                          sx={{ mr: 1, color: theme.palette.success.main }}
                        />
                        <Box>
                          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                            1000+
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Listings
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <AttachMoneyIcon
                          sx={{ mr: 1, color: theme.palette.success.main }}
                        />
                        <Box>
                          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                            ₹0
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Listing Fee
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <ShoppingBagIcon
                          sx={{ mr: 1, color: theme.palette.success.main }}
                        />
                        <Box>
                          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                            30K+
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Daily Sales
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Categories */}
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ mb: 4, textAlign: "center", fontWeight: "bold" }}
        >
          Popular Categories
        </Typography>

        <Grid container spacing={3}>
          {categories.map((category, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h2" sx={{ mb: 1 }}>
                    {category.icon}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {category.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.items} items
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* How It Works */}
      <Box sx={{ bgcolor: "#f5f5f5", py: 6 }}>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            component="h2"
            sx={{ mb: 4, textAlign: "center", fontWeight: "bold" }}
          >
            How It Works
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h1"
                  sx={{
                    color: theme.palette.success.main,
                    mb: 2,
                    opacity: 0.2,
                  }}
                >
                  1
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                  Create an Account
                </Typography>
                <Typography variant="body1">
                  Sign up for free and become part of our marketplace community
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h1"
                  sx={{
                    color: theme.palette.success.main,
                    mb: 2,
                    opacity: 0.2,
                  }}
                >
                  2
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                  List or Browse
                </Typography>
                <Typography variant="body1">
                  Post items for sale or browse thousands of local listings
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h1"
                  sx={{
                    color: theme.palette.success.main,
                    mb: 2,
                    opacity: 0.2,
                  }}
                >
                  3
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                  Make a Deal
                </Typography>
                <Typography variant="body1">
                  Contact sellers, negotiate prices, and finalize transactions
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutContent;
