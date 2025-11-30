import React from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ChairIcon from "@mui/icons-material/Chair";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import heroPic from "../Assets/e-bazar-hero.png";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LaptopIcon from "@mui/icons-material/Laptop";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import HomeIcon from "@mui/icons-material/Home";
// Option 1: Use the checkroom icon (clothing)
import CheckroomIcon from "@mui/icons-material/Checkroom";

// Option 2: Use a fitness icon
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import moment from "moment";
export default function Hero({ productsList }) {
  const theme = useTheme();

  // Sample data for categories
  const categories = [
    {
      id: 2,
      name: "Mobile",
      icon: <SmartphoneIcon sx={{ fontSize: "40px" }} />,
    },
    { id: 3, name: "Laptop", icon: <LaptopIcon sx={{ fontSize: "40px" }} /> },
    {
      id: 4,
      name: "Sports",
      icon: <SportsSoccerIcon sx={{ fontSize: "40px" }} />,
    },
    {
      id: 5,
      name: "Fitness",
      icon: <FitnessCenterIcon sx={{ fontSize: "40px" }} />,
    },
    // { id: 6, name: "Home Decor", icon: <HomeIcon /> },
  ];

  // Sample data for listings
  const listings = [
    {
      id: 1,
      title: "iPhone 13 Pro",
      price: 699,
      location: "New York",
      date: "Today",
      featured: true,
    },
    {
      id: 2,
      title: "Sony PlayStation 5",
      price: 450,
      location: "Los Angeles",
      date: "Yesterday",
    },
    {
      id: 3,
      title: "Macbook Pro 16 M1",
      price: 1899,
      location: "Chicago",
      date: "2 days ago",
    },
    {
      id: 4,
      title: "Herman Miller Chair",
      price: 599,
      location: "Seattle",
      date: "3 days ago",
      featured: true,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(45deg, ${theme.palette.success.light} 30%, ${theme.palette.success.main} 90%)`,
          py: 6,
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
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
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                  component="img"
                  src={heroPic}
                  alt="marketplace illustration"
                  sx={{
                    width: "100%",
                    maxWidth: 400,
                    // borderRadius: 2,
                    // boxShadow: 3,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Categories Section */}
     
      <Box sx={{ bgcolor: "grey.100", py: 6 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Typography
              variant="overline"
              component="h2"
              sx={{ fontWeight: "medium", fontSize: "20pt" }}
            >
              Recently posted products
            </Typography>
            <Button color="success" component={Link} to={"/products"}>
              View All
            </Button>
          </Box>
          <Grid container spacing={3}>
            {productsList?.length > 0 &&
              productsList?.map((listing) => (
                <Grid item xs={12} sm={6} md={3} key={listing.id}>
                  <Card onClick={() => console.log("Card clicked!")}
                    component={Link}
                    to={"/products"}

                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: 2,
                      transition: "0.3s",
                      "&:hover": {
                        boxShadow: 6,
                        transform: "translateY(-4px)",
                        background:
                          "linear-gradient(135deg, #f3f3f3 0%, #fff 100%)",
                        
                      },
                    }}
                  >
                    <Box sx={{ position: "relative" }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={`http://localhost:7000/uploads/product/${listing?.picture}`}
                        alt={listing.title}
                        
                        sx={{ borderBottom: "4px solid #4caf50" }}
                      />
                      {listing.featured && (
                        <Chip
                          label="FEATURED"
                          size="small"
                          sx={{
                            position: "absolute",
                            top: 12,
                            left: 12,
                            bgcolor: "warning.main",
                            color: "white",
                            fontWeight: "bold",
                            boxShadow: 1,
                          }}
                        />
                      )}
                    </Box>

                    <CardContent sx={{ flexGrow: 1, p: 2 }}>
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {listing.title.length > 15
                          ? `${listing.title?.slice(0, 20)}...`
                          : listing.title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mt: 2,
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          color="primary"
                          fontWeight="bold"
                        >
                          ₹{listing.price}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {moment(listing.createdAt).fromNow()}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
