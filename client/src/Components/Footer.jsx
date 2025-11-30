import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();
  // Prevent rendering on login/register pages
  if (pathname === "/login" || pathname === "/register") {
    return null;
  }
  return (
    <div>
      <Box sx={{ bgcolor: "grey.900", color: "grey.400", py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h6"
                component="h3"
                color="white"
                gutterBottom
              >
                E-Bazar
              </Typography>
              <Typography variant="body2">
                The #1 marketplace for buying and selling locally. Join millions
                of users today!
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h6"
                component="h3"
                color="white"
                gutterBottom
              >
                About
              </Typography>
              <Typography variant="body2" component="div">
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Link
                      to={"/"}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Home
                    </Link>
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Link
                      to={"/about"}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      About
                    </Link>
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Link
                      to={"/products"}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Products
                    </Link>
                  </Box>
                  {/* <Box component="li">Contact Us</Box> */}
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h6"
                component="h3"
                color="white"
                gutterBottom
              >
                Connect with us
              </Typography>
              <Typography variant="body2" component="div">
                <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                  {/* Placeholder icons */
              
                  }
                  <Box i
                    sx={{
                      width: 36,
                      height: 36,
                      bgcolor: "grey.800",
                      borderRadius: "50%",
                    }}
                  />
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      bgcolor: "grey.800",
                      borderRadius: "50%",
                    }}
                  />
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      bgcolor: "grey.800",
                      borderRadius: "50%",
                    }}
                  />
                </Box>
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ my: 4, borderColor: "grey.800" }} />
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} e-Bazar. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </div>
  );
}
